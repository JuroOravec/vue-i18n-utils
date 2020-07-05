import type { IAdaptorJsonYaml } from '../types';
import { Item } from '../../../item';
import { relPath as relPathFn } from '../../__tests__/helpers';
import { FsCondition } from '../../__tests__/fs-tests';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface RemoverCondition extends FsCondition {
  /**
   * Options passed to the method
   */
  options?: IAdaptorJsonYaml.RemoverOptions;
}

export const conditions: RemoverCondition[] = [
  {
    description: "doesn't remove anything on empty array",
    meta: { writes: 0, removes: 0 },
  },
  {
    description: "throws when file doesn't exist",
    data: [relPath('./fixtures/some-rando-source.vue')].map(
      (f) => new Item({ source: f }),
    ),
    meta: { writes: 0, removes: 2, throws: true },
  },
  {
    description: 'removes empty files with no content',
    fileChanges: [[relPath('./fixtures/empty.json'), null]],
    data: [relPath('./fixtures/empty.json')].map(
      (f) => new Item({ source: f }),
    ),
    meta: { removes: 1, writes: 0 },
  },
  {
    description: 'removes files',
    fileChanges: [[relPath('./fixtures/def.json'), null]],
    data: [relPath('./fixtures/def.json')].map((f) => new Item({ source: f })),
    meta: { writes: 0, removes: 1 },
  },
];
