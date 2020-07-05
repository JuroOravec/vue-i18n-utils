import flatten from 'lodash.flatten';

import { DefinitionItem } from '../../../definition';
import { joinDefinition, relPath as relPathFn } from '../../__tests__/helpers';
import { enDefinitions, jaDefinitions } from '../../__tests__/definitions';
import { FsCondition } from '../../__tests__/fs-tests';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface ParserCondition
  extends Pick<FsCondition, 'description' | 'meta'> {
  files?: string[];
  expected?: DefinitionItem[];
}

export const conditions: ParserCondition[] = [
  {
    description: 'finds no match in empty file',
    files: [relPath('./fixtures/empty.vue')],
  },
  {
    description: 'finds no match in incorrectly-formatted file',
    files: [relPath('./fixtures/wrong.txt')],
  },
  {
    description:
      'finds no match in correctly-formatted file with no definitions',
    files: [relPath('./fixtures/definition-no-match.vue')],
  },
  {
    description: 'finds match in file with locale-scoped i18n block',
    files: [relPath('./fixtures/definition-match-single-scoped.vue')],
    expected: joinDefinition(
      [enDefinitions],
      relPath('./fixtures/definition-match-single-scoped.vue'),
    ),
  },
  {
    description:
      'finds match in file with locale-scoped i18n block with "src" attr',
    files: [relPath('./fixtures/definition-match-single-scoped-src.vue')],
    expected: joinDefinition(
      [enDefinitions],
      relPath('./fixtures/definition-match-single-scoped-src.vue'),
    ),
  },
  {
    description: 'finds match in file with general i18n block',
    files: [relPath('./fixtures/definition-match-single-general.vue')],
    expected: joinDefinition(
      [enDefinitions, jaDefinitions],
      relPath('./fixtures/definition-match-single-general.vue'),
    ),
  },
  {
    description: 'finds match in file with general i18n block with "src" attr',
    files: [relPath('./fixtures/definition-match-single-general-src.vue')],
    expected: joinDefinition(
      [enDefinitions, jaDefinitions],
      relPath('./fixtures/definition-match-single-general-src.vue'),
    ),
  },
  {
    description: 'finds match in file with general i18n block with "src" attr',
    files: [relPath('./fixtures/definition-match-mixed.vue')],
    expected: joinDefinition(
      [...Array(3).fill(enDefinitions), ...Array(3).fill(jaDefinitions)],
      relPath('./fixtures/definition-match-mixed.vue'),
    ),
  },
];

conditions.push({
  description: 'finds match in multiple files',
  files: flatten(conditions.map(({ files = [] }) => files)),
  expected: flatten(conditions.map(({ expected = [] }) => expected)),
});
