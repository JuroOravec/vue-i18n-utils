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
    files: [relPath('./fixtures/empty.json')],
    meta: { throws: true },
  },
  {
    description: 'finds no match in empty file (unsupported ext)',
    files: [relPath('./fixtures/empty.txt')],
    meta: { throws: true },
  },
  {
    description: 'finds no match in incorrectly-formatted file',
    files: [relPath('./fixtures/wrong.json')],
    meta: { throws: true },
  },
  {
    description:
      'finds no match in incorrectly-formatted file (unsupported ext)',
    files: [relPath('./fixtures/wrong.txt')],
    meta: { throws: true },
  },
  {
    description:
      'finds no match in correctly-formatted yaml file with no definitions',
    files: [relPath('./fixtures/no-def.yaml')],
  },
  {
    description:
      'finds no match in correctly-formatted json file with no definitions',
    files: [relPath('./fixtures/no-def.json')],
  },
  {
    description: 'finds match in json file',
    files: [relPath('./fixtures/def.json')],
    expected: joinDefinition(
      [enDefinitions, jaDefinitions],
      relPath('./fixtures/def.json'),
    ),
  },
  {
    description: 'finds match in yaml file',
    files: [relPath('./fixtures/def.yaml')],
    expected: joinDefinition(
      [enDefinitions, jaDefinitions],
      relPath('./fixtures/def.yaml'),
    ),
  },
  {
    description: 'finds match in locale-scoped json file',
    files: [relPath('./fixtures/def-en.json')],
    expected: joinDefinition(
      [enDefinitions],
      relPath('./fixtures/def-en.json'),
    ),
  },
  {
    description: 'finds match in locale-scoped yaml file',
    files: [relPath('./fixtures/def-en.yaml')],
    expected: joinDefinition(
      [enDefinitions],
      relPath('./fixtures/def-en.yaml'),
    ),
  },
];

conditions.push({
  description: 'finds match in multiple files',
  files: conditions.reduce((agg, { files = [], meta: { throws } = {} }) => {
    if (throws) return agg;

    const extPattern = /\.(?:ya?ml|json)$/;

    return [...agg, ...files.filter((f) => extPattern.test(f))];
  }, [] as string[]),
  expected: flatten(conditions.map(({ expected = [] }) => expected)),
});
