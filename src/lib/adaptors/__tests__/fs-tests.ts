import fs from 'fs';
import path from 'path';
import { fileSync, FileResult, FileOptions } from 'tmp';

import type { I_Item } from '../../item/types';
import type { I_I18nUtil } from '../../i18n-util/types';
import { writeFileSpies, unlinkSpies, relPath } from './helpers';
import { AnyObj } from '../../../types';

export interface FsConditionData {
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
  condition: FsConditionData;
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

  beforeAll(() => {
    tempToExpectFile.clear();
    tempFileMapping.clear();
    createdFiles.clear();

    // Replace the source files with temp files with same content, so we
    // can observe the changes on the temp files.
    fileChanges.forEach(([filepath, expect]) => {
      const tempFile = fileSync(meta);
      tempFileMapping.set(filepath, tempFile);
      tempToExpectFile.set(tempFile.name, expect);
      fs.writeFileSync(tempFile.name, fs.readFileSync(filepath));
    });

    // Copy the linked definitions (files linked in i18n elems via 'src'
    // attr), so that the temp files can still resolve to them via relative
    // path
    const uniqTempDirs = new Set(
      Array.from(tempToExpectFile.keys(), path.dirname),
    );
    for (const tempDir of uniqTempDirs) {
      linkedFiles.forEach((file) => {
        const src = relPath(file, { base: cwd ?? module.filename });
        const dest = path.join(tempDir, path.basename(src));
        fs.writeFileSync(dest, fs.readFileSync(src));
        createdFiles.add(dest);
      });
    }

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
    if (throws) expect(action).toThrow();
    else action();
  });

  afterAll(() => {
    // Remove the temp files
    for (const tempFile of tempFileMapping.values()) {
      tempFile.removeCallback();
    }
    for (const file of createdFiles) {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    }
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

  test('file contents are as expected', () => {
    for (const [tempFile, expectFile] of tempToExpectFile) {
      if (expectFile) {
        const tempFileContent = fs.readFileSync(tempFile, 'utf-8').trim();
        const expectFileContent = fs.readFileSync(expectFile, 'utf-8').trim();
        expect(tempFileContent).toBe(expectFileContent);
      } else {
        expect(fs.existsSync(tempFile)).toBe(false);
      }
    }
  });

  test('linked file contents are as expected', () => {
    for (const [file, linkedToExpected] of linkedShouldExist || []) {
      const tempDir = path.dirname(tempFileMapping.get(file)!.name);

      for (const [linkedRelPath, expectFile] of linkedToExpected) {
        const linkedFile = path.resolve(tempDir, linkedRelPath);
        const linkedFileContent = fs.readFileSync(linkedFile, 'utf-8').trim();
        const expectFileContent = fs.readFileSync(expectFile, 'utf-8').trim();

        expect(linkedFileContent).toBe(expectFileContent);
      }
    }
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
