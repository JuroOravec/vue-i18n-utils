import flatten from 'lodash.flatten';

import { UsageItem } from '../../../usage';
import { relPath as relPathFn } from '../../__tests__/helpers';
import { FsCondition } from '../../__tests__/fs-tests';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface UsageCondition
  extends Pick<FsCondition, 'description' | 'meta'> {
  files?: string[];
  expected?: UsageItem[];
}

export const conditions: UsageCondition[] = [
  {
    description: 'finds no match in empty file',
    files: [relPath('./fixtures/empty.vue')],
  },
  {
    description: 'finds no match in incorrectly-formatted file',
    files: [relPath('./fixtures/wrong.txt')],
  },
  {
    description: 'finds no match in correctly-formatted file with no usage',
    files: [relPath('./fixtures/usage-no-match.vue')],
  },
  {
    description: 'finds match in script',
    files: [relPath('./fixtures/usage-match-script.vue')],
    expected: [
      new UsageItem({ line: 100, path: ['message', 'd'] }),
      new UsageItem({ line: 101, path: ['message', 'e'] }),
      new UsageItem({ line: 102, path: ['message', 'd'] }),
    ].map((i) => {
      i.source = relPath('./fixtures/usage-match-script.vue');
      return i;
    }),
  },
  {
    description: 'finds match in template',
    files: [relPath('./fixtures/usage-match-template.vue')],
    expected: [
      new UsageItem({ line: 10, path: ['message', 'a'] }),
      new UsageItem({ line: 19, path: ['message', 'b'] }),
      new UsageItem({ line: 58, path: ['message', 'c'] }),
      new UsageItem({ line: 87, path: ['message', 'c'] }),
    ].map((i) => {
      i.source = relPath('./fixtures/usage-match-template.vue');
      return i;
    }),
  },
  {
    description: 'finds match in script and template',
    files: [relPath('./fixtures/usage-match-mixed.vue')],
    expected: [
      new UsageItem({ line: 10, path: ['message', 'a'] }),
      new UsageItem({ line: 19, path: ['message', 'b'] }),
      new UsageItem({ line: 58, path: ['message', 'c'] }),
      new UsageItem({ line: 87, path: ['message', 'c'] }),
      new UsageItem({ line: 101, path: ['message', 'd'] }),
      new UsageItem({ line: 102, path: ['message', 'e'] }),
      new UsageItem({ line: 103, path: ['message', 'd'] }),
    ].map((i) => {
      i.source = relPath('./fixtures/usage-match-mixed.vue');
      return i;
    }),
  },
];

conditions.push({
  description: 'finds match in multiple files',
  files: flatten(conditions.map(({ files = [] }) => files)),
  expected: flatten(conditions.map(({ expected = [] }) => expected)),
});
