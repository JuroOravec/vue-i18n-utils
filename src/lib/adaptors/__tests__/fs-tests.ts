import fs, { promises as fsp } from 'fs';
import path from 'path';
import { FileResult, FileOptions } from 'tmp';

import type { AnyObj } from '../../../types';
import type { I_Item } from '../../item/types';
import type { I_I18nUtil } from '../../i18n-util/types';
import { writeFileSpies, unlinkSpies, relPath } from './helpers';
import { file } from '../../util/p-tmp';
import { pMap } from '../../util/array';

export interface FsCondition {
  description: string;
  /**
   * Tuple of expected file modifications - [pathToFile, pathToExpectedResult]
   */
  fileChanges?: [string, string | null][];
  /**
   * Input data
   */
  data?: I_Item.Item[];
  linkedFiles?: string[];
  /**
   * Options passed to the method
   */
  options?: AnyObj;
  /**
   * Other test-related data
   */
  meta?: {
    /**
     * How many times have been write functions called
     */
    writes?: number;
    /**
     * How many time have been remove / unlink functions called
     */
    removes?: number;
    /**
     * Whether the tested method should fail under current conditions
     */
    throws?: boolean;
    /**
     * [SourcePath, linkRelPath[] ]
     */
    linkedShouldNotExist?: [string, string[]][];
    /**
     * [SourcePath [linkRelPath, pathToExpected][] ][]
     */
    linkedShouldExist?: [string, [string, string][]][];
    cwd?: string;
  } & FileOptions;
}

export function testFS({
  instance,
  condition,
  method,
}: {
  instance: I_I18nUtil.AdaptorCollection.ItemMethods;
  method: (
    inst: I_I18nUtil.AdaptorCollection.ItemMethods,
    ...args: Partial<[any, any]>
  ) => any;
  condition: Omit<FsCondition, 'description'>;
}) {
  const {
    fileChanges = [],
    data = [],
    linkedFiles = [],
    options = {},
    meta = {},
  } = condition;

  const {
    writes,
    removes,
    linkedShouldExist,
    linkedShouldNotExist,
    throws,
    cwd,
  } = meta;

  const tempToExpectFile = new Map<string, string | null>();
  const tempFileMapping = new Map<string, FileResult>();
  const createdFiles = new Set<string>();

  beforeAll(async () => {
    tempToExpectFile.clear();
    tempFileMapping.clear();
    createdFiles.clear();

    // Replace the source files with temp files with same content, so we
    // can observe the changes on the temp files.
    await pMap(fileChanges, async ([filepath, expect]) => {
      const tempFile = await file(meta);

      tempFileMapping.set(filepath, tempFile);
      tempToExpectFile.set(tempFile.name, expect);

      await fsp.writeFile(tempFile.name, await fsp.readFile(filepath));
    });

    // Copy the linked definitions (files linked in i18n elems via 'src'
    // attr), so that the temp files can still resolve to them via relative
    // path
    const uniqTempDirs = new Set(
      Array.from(tempToExpectFile.keys(), path.dirname),
    );

    await pMap([...uniqTempDirs], (tempDir) =>
      pMap(linkedFiles, async (file) => {
        const src = relPath(file, { base: cwd ?? module.filename });
        const dest = path.join(tempDir, path.basename(src));

        await fsp.writeFile(dest, await fsp.readFile(src));

        createdFiles.add(dest);
      }),
    );

    // Make temp copies of source files (or remember the files if testing
    // file creation anew).
    const tempFileDefs = data.map((item) => {
      const origSrc = item.source!;
      let source: string;

      if (!tempFileMapping.has(origSrc)) {
        createdFiles.add(origSrc);
        source = origSrc;
      } else {
        source = tempFileMapping.get(origSrc)!.name;
      }

      return item.copy({ source });
    });

    // Prepare the spies
    writeFileSpies.reset();
    unlinkSpies.reset();

    const action = () => method(instance, tempFileDefs, options);

    // Do the biz
    await (throws ? expect(action).rejects.toThrow() : action());
  });

  afterAll(async () => {
    // Remove the temp files
    for (const tempFile of tempFileMapping.values()) {
      tempFile.removeCallback();
    }

    await pMap([...createdFiles], (f) =>
      fs.existsSync(f) ? fsp.unlink(f) : undefined,
    );
  });

  const expectedWrites = writes ?? data.length;
  const expectedRemoves = removes ?? 0;

  if (expectedWrites) {
    test(`files were written`, () => {
      const writeWasCalled = writeFileSpies.calledTimes();
      expect(writeWasCalled).toBeTruthy();
      expect(writeWasCalled).toBe(expectedWrites);
    });
  }

  if (!expectedWrites) {
    test(`files were not written`, () => {
      writeFileSpies.validateNotCalled();
    });
  }

  if (expectedRemoves) {
    test(`files were removed`, () => {
      const removeWasCalled = unlinkSpies.calledTimes();
      expect(removeWasCalled).toBeTruthy();
      expect(removeWasCalled).toBe(expectedRemoves);
    });
  }

  if (!expectedRemoves) {
    test(`files were not removed`, () => {
      unlinkSpies.validateNotCalled();
    });
  }

  test('file contents are as expected', async () => {
    await pMap([...tempToExpectFile], async ([tempFile, expectFile]) => {
      if (!expectFile) {
        expect(fs.existsSync(tempFile)).toBe(false);
        return;
      }

      const tempFileContent = await fsp.readFile(tempFile, 'utf-8');
      const expectFileContent = await fsp.readFile(expectFile, 'utf-8');

      expect(tempFileContent.trim()).toBe(expectFileContent.trim());
    });
  });

  test('linked file contents are as expected', async () => {
    await pMap(linkedShouldExist || [], async ([file, linkedToExpected]) => {
      const tempDir = path.dirname(tempFileMapping.get(file)!.name);

      return pMap(linkedToExpected, async ([linkedRelPath, expectFile]) => {
        const linkedFile = path.resolve(tempDir, linkedRelPath);
        const linkedFileContent = await fsp.readFile(linkedFile, 'utf-8');
        const expectFileContent = await fsp.readFile(expectFile, 'utf-8');

        expect(linkedFileContent.trim()).toBe(expectFileContent.trim());
      });
    });
  });

  test('linked file are removed as expected', () => {
    for (const [file, relPaths] of linkedShouldNotExist || []) {
      const tempDir = path.dirname(tempFileMapping.get(file)!.name);

      for (const relPath of relPaths) {
        const linkedPath = path.resolve(tempDir, relPath);

        // Check that the file we want to confirm as non-existant did
        // actually exist at the start of the test
        if (!createdFiles.has(linkedPath)) {
          fail(`File is not part of the test: '${linkedPath}'`);
        }

        expect(fs.existsSync(linkedPath)).toBeFalsy();
      }
    }
  });
}
