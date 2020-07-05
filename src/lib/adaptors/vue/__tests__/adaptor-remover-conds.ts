import type { IAdaptorVue } from '..';
import { Item } from '../../../item';
import { relPath as relPathFn } from '../../__tests__/helpers';
import { FsCondition } from '../../__tests__/fs-tests';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface RemoverCondition extends FsCondition {
  /**
   * Options passed to the method
   */
  options?: IAdaptorVue.RemoverOptions;
}

export const conditions: RemoverCondition[] = [
  {
    description: "doesn't remove anything on empty array",
    meta: { writes: 0, removes: 0 },
  },
  {
    description: "throws on file that doesn't exist",
    data: [relPath('./fixtures/some-rando-source.vue')].map(
      (f) => new Item({ source: f }),
    ),
    meta: { writes: 0, removes: 1, throws: true },
  },
  {
    description: 'removes empty files with no content',
    fileChanges: [[relPath('./fixtures/empty.vue'), null]],
    data: [relPath('./fixtures/empty.vue')].map((f) => new Item({ source: f })),
    meta: { removes: 1, writes: 0 },
  },
  {
    description: 'removes files with only whitespace',
    fileChanges: [[relPath('./fixtures/empty-whitespace.vue'), null]],
    data: [relPath('./fixtures/empty-whitespace.vue')].map(
      (f) => new Item({ source: f }),
    ),
    meta: { removes: 1, writes: 0 },
  },
  {
    description: "doesn't remove non-empty files with non-i18n content",
    fileChanges: [
      [relPath('./fixtures/wrong.txt'), relPath('./fixtures/wrong.txt')],
    ],
    data: [relPath('./fixtures/wrong.txt')].map((f) => new Item({ source: f })),
    meta: { writes: 1, removes: 0 },
  },
  {
    description:
      'removes only i18n tags and linked files but not file itself if file has both i18n and non-i18n content',
    fileChanges: [
      [
        relPath('./fixtures/write.vue'),
        relPath('./fixtures/write-removed.vue'),
      ],
    ],
    data: [relPath('./fixtures/write.vue')].map((f) => new Item({ source: f })),
    meta: {
      writes: 1,
      removes: 1,
      linkedShouldNotExist: [[relPath('./fixtures/write.vue'), ['./def.yaml']]],
    },
  },
  {
    description: 'removes files and linked files if file has only i18n content',
    fileChanges: [[relPath('./fixtures/write-linked.vue'), null]],
    data: [relPath('./fixtures/write-linked.vue')].map(
      (f) => new Item({ source: f }),
    ),
    meta: {
      writes: 0,
      removes: 2,
      linkedShouldNotExist: [
        [relPath('./fixtures/write-linked.vue'), ['./write-linked.json']],
      ],
    },
  },
];
