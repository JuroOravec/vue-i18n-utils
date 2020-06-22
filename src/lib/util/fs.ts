import fs from 'fs';
import path from 'path';
import tmp from 'tmp';
import { sync as rimrafSync } from 'rimraf';

import { debug } from './debug';

/**
 * Options object passed to `safeWrite`
 */
export interface ISafeWriteOptions {
  /**
   * Whether the changes done to files should be undone if the process throws
   *
   * Defaults to `true`
   */
  restoreOnError?: boolean;
  /**
   * Whether directories should be autocreated when writing to a file in
   * a directory which doesn't exist yet.
   *
   * Defaults to `true`
   */
  createDir?: boolean;
  /**
   * Whether directories created by the `createDir` option should be removed
   * when the process throws.
   */
  removeDirOnError?: boolean;
  /**
   * Options object passed to fs.mkdirSync when `createDir` is `true`.
   *
   * Defaults to `true`
   */
  mkdirOptions?: Extract<Parameters<typeof fs.mkdirSync>[1], object>;
}

/**
 * Object with FileSystem writers passed to the function passed to `safeWrite`.
 */
export type ISafeWriters = {
  writeFile: (
    ...args: Parameters<typeof fs.writeFile>
  ) => ReturnType<typeof fs.writeFile>;
  writeFileSync: (
    ...args: Parameters<typeof fs.writeFileSync>
  ) => ReturnType<typeof fs.writeFileSync>;
  unlink: (
    ...args: Parameters<typeof fs.unlink>
  ) => ReturnType<typeof fs.unlink>;
  unlinkSync: (
    ...args: Parameters<typeof fs.unlinkSync>
  ) => ReturnType<typeof fs.unlinkSync>;
  promises: {
    writeFile: (
      ...args: Parameters<typeof fs.promises.writeFile>
    ) => ReturnType<typeof fs.promises.writeFile>;
    unlink: (
      ...args: Parameters<typeof fs.promises.unlink>
    ) => ReturnType<typeof fs.promises.unlink>;
  };
};

/**
 * Accepts a function and passes to it Node's FileSystem writers wrapped with
 * following features:
 * - directory autocreation (and auto-removal on error)
 * - rollback of file write changes on error
 */
export function safeWrite(
  options: ISafeWriteOptions = {},
  fn: (writers: ISafeWriters) => void,
) {
  const {
    restoreOnError = true,
    createDir = true,
    removeDirOnError = true,
    mkdirOptions = {},
  } = options;

  // Store original content of overwriten files in case we need to unroll the
  // changes
  const backups: {
    tmp: tmp.FileResult | null;
    src: string;
    topCreatedDir: string | null;
  }[] = [];

  function backupAndPrep(filepath: string, shouldCreateDir?: boolean) {
    // Check if parent dir exists
    const dirPath = path.dirname(filepath);
    let topNonExistPath: string | null = null;
    if ((shouldCreateDir ?? createDir) && !fs.existsSync(dirPath)) {
      topNonExistPath = dirPath;
      let parentDirPath = path.dirname(topNonExistPath);
      while (!fs.existsSync(parentDirPath)) {
        topNonExistPath = parentDirPath;
        parentDirPath = path.dirname(topNonExistPath);
      }
      fs.mkdirSync(dirPath, { ...mkdirOptions, recursive: true });
    }

    // Save the original content in temp file so it can be restored
    if (restoreOnError) {
      // Check if file exists
      let tmpFileObj: tmp.FileResult | null = null;
      if (fs.existsSync(filepath)) {
        debug(`Creating temp copy of file ${filepath}`);
        tmpFileObj = tmp.fileSync();
        fs.copyFileSync(filepath, tmpFileObj.name);
      }

      backups.push({
        tmp: tmpFileObj,
        src: filepath,
        topCreatedDir: topNonExistPath,
      });
    }
  }

  function safeWriteFile(...args: Parameters<typeof fs.writeFile>) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr);
    return fs.writeFile(...args);
  }

  function safeWriteFileSync(...args: Parameters<typeof fs.writeFileSync>) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr);
    return fs.writeFileSync(...args);
  }

  async function safeWriteFilePromise(
    ...args: Parameters<typeof fs.promises.writeFile>
  ) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr);
    return fs.promises.writeFile(...args);
  }

  function safeUnlink(...args: Parameters<typeof fs.unlink>) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr, false);
    return fs.unlink(...args);
  }

  function safeUnlinkSync(...args: Parameters<typeof fs.unlinkSync>) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr, false);
    return fs.unlinkSync(...args);
  }

  async function safeUnlinkPromise(
    ...args: Parameters<typeof fs.promises.unlink>
  ) {
    const pathStr = args[0].toString();
    backupAndPrep(pathStr, false);
    return fs.promises.unlink(...args);
  }

  const writers: ISafeWriters = {
    writeFile: safeWriteFile,
    writeFileSync: safeWriteFileSync,
    unlink: safeUnlink,
    unlinkSync: safeUnlinkSync,
    promises: {
      unlink: safeUnlinkPromise,
      writeFile: safeWriteFilePromise,
    },
  };

  try {
    fn(writers);
  } catch (e) {
    if (restoreOnError) {
      // Undo all file changes, starting with the last
      backups.reverse();
      for (const { tmp, src, topCreatedDir } of backups) {
        debug(`Restoring file ${src}`);
        if (tmp) {
          // Original directory and file exist
          fs.copyFileSync(tmp.name, src);
          tmp.removeCallback();
          continue;
        }
        // Original file does not exist, possibly neither the dir
        fs.unlinkSync(src);
        if (topCreatedDir && createDir && removeDirOnError) {
          rimrafSync(topCreatedDir);
        }
      }
    }
    throw e;
  }
}
