import fs from 'fs';
import path from 'path';
import flatten from 'lodash.flatten';

import { I_Item } from '../../item/types';

const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync');
const writeFileSpy = jest.spyOn(fs, 'writeFile');
const writeFilePromiseSpy = jest.spyOn(fs.promises, 'writeFile');
const unlinkSyncSpy = jest.spyOn(fs, 'unlinkSync');
const unlinkSpy = jest.spyOn(fs, 'unlink');
const unlinkPromiseSpy = jest.spyOn(fs.promises, 'unlink');

export const writeFileSpies = {
  spies() {
    return {
      sync: writeFileSyncSpy,
      async: writeFileSpy,
      promise: writeFilePromiseSpy,
    };
  },
  reset() {
    writeFileSyncSpy.mockClear();
    writeFileSpy.mockClear();
    writeFilePromiseSpy.mockClear();
  },
  calledTimes() {
    return (
      writeFileSyncSpy.mock.calls.length +
      writeFileSpy.mock.calls.length +
      writeFilePromiseSpy.mock.calls.length
    );
  },
  validateNotCalled() {
    expect(writeFileSpy).not.toHaveBeenCalled();
    expect(writeFileSyncSpy).not.toHaveBeenCalled();
    expect(writeFilePromiseSpy).not.toHaveBeenCalled();
  },
};

export const unlinkSpies = {
  spies() {
    return {
      sync: unlinkSyncSpy,
      async: unlinkSpy,
      promise: unlinkPromiseSpy,
    };
  },
  reset() {
    unlinkSyncSpy.mockClear();
    unlinkSpy.mockClear();
    unlinkPromiseSpy.mockClear();
  },
  calledTimes() {
    return (
      unlinkSyncSpy.mock.calls.length +
      unlinkSpy.mock.calls.length +
      unlinkPromiseSpy.mock.calls.length
    );
  },
  validateNotCalled() {
    expect(unlinkSpy).not.toHaveBeenCalled();
    expect(unlinkSyncSpy).not.toHaveBeenCalled();
    expect(unlinkPromiseSpy).not.toHaveBeenCalled();
  },
};

export function relPath(
  p: string,
  opts: { base?: typeof module | string } = {},
) {
  const base = opts.base ?? module;
  return path.resolve(
    typeof base === 'string' ? base : module.filename,
    '..',
    p,
  );
}

export function joinDefinition<T extends I_Item.Item>(
  defGroups: T[][],
  source?: string,
) {
  return flatten(
    defGroups.map((defs) =>
      defs.map(
        (def) =>
          def.copy({
            ...(source ? { source } : {}),
          }) as T,
      ),
    ),
  );
}
