import fs, { promises as fsp } from 'fs';
import path from 'path';
import { FileResult } from 'tmp';

import { debug } from './debug';
import pRimraf from './p-rimraf';
import { pMap } from './array';
import { file } from './p-tmp';

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
  promises: {
    writeFile: (
      ...args: Parameters<typeof fsp.writeFile>
    ) => ReturnType<typeof fsp.writeFile>;

    unlink: (
      ...args: Parameters<typeof fsp.unlink>
    ) => ReturnType<typeof fsp.unlink>;
  };
};

/**
 * Accepts a function and passes to it Node's FileSystem writers wrapped with
 * following features:
 * - directory autocreation (and auto-removal on error)
 * - rollback of file write changes on error
 */
export async function safeWrite(
  options: ISafeWriteOptions = {},
  fn: (writers: ISafeWriters) => void,
): Promise<void> {
  const {
    restoreOnError = true,
    createDir = true,
    removeDirOnError = true,
    mkdirOptions = {},
  } = options;

  // Store original content of overwriten files in case we need to unroll the
  // changes
  const backups: {
    tmp: FileResult | null;
    src: string;
    topCreatedDir: string | null;
  }[] = [];

  async function backupAndPrep(
    filepath: string,
    shouldCreateDir?: boolean,
  ): Promise<void> {
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

      await fsp.mkdir(dirPath, { ...mkdirOptions, recursive: true });
    }

    // Save the original content in temp file so it can be restored
    if (restoreOnError) {
      // Check if file exists
      let tmpFileObj: FileResult | null = null;

      if (fs.existsSync(filepath)) {
        debug(`Creating temp copy of file ${filepath}`);
        tmpFileObj = await file();
        await fsp.copyFile(filepath, tmpFileObj!.name);
      }

      backups.push({
        tmp: tmpFileObj,
        src: filepath,
        topCreatedDir: topNonExistPath,
      });
    }
  }

  async function safeWriteFilePromise(
    ...args: Parameters<typeof fsp.writeFile>
  ): Promise<void> {
    const pathStr = args[0].toString();
    await backupAndPrep(pathStr);
    return fsp.writeFile(...args);
  }

  async function safeUnlinkPromise(
    ...args: Parameters<typeof fsp.unlink>
  ): Promise<void> {
    const pathStr = args[0].toString();
    await backupAndPrep(pathStr, false);
    return fsp.unlink(...args);
  }

  const writers: ISafeWriters = {
    promises: {
      unlink: safeUnlinkPromise,
      writeFile: safeWriteFilePromise,
    },
  };

  try {
    return fn(writers);
  } catch (e) {
    if (restoreOnError) {
      // Undo all file changes, starting with the last
      backups.reverse();

      await pMap(backups, async ({ tmp, src, topCreatedDir }) => {
        debug(`Restoring file ${src}`);

        if (tmp) {
          // Original directory and file exist
          await fsp.copyFile(tmp.name, src);
          tmp.removeCallback();
          return;
        }

        // Original file does not exist, possibly neither the dir
        await fsp.unlink(src);

        if (topCreatedDir && createDir && removeDirOnError) {
          await pRimraf(topCreatedDir);
        }
      });
    }
    throw e;
  }
}
