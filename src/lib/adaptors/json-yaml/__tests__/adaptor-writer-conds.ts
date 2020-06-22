import { DefinitionItem } from '../../../definition';
import { IAdaptorJsonYaml } from '../types';
import { ContentFormatter } from '../../../content-formatter';
import { joinDefinition, relPath as relPathFn } from '../../__tests__/helpers';
import { FsConditionData } from '../../__tests__/fs-tests';
import { enDefinitions, jaDefinitions } from '../../__tests__/definitions';
import { JsonYamlDefinitionItem } from '..';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface WriteConditionData extends FsConditionData {
  /**
   * Options passed to the method
   */
  options?: IAdaptorJsonYaml.WriterOptions & FsConditionData['options'];
}

export type WriteCondition = [
  /**
   * Behaviour description used for annotating jest groups - What is the
   * expected outcome?
   */
  string,
  WriteConditionData,
];

/**
 * Test conditions when the file-to-be-written-to doesn't exist
 */
const writeConditionsNonexist: WriteCondition[] = [
  [
    "creates new file when writing to file that doesn't exist",
    {
      data: [
        // Non-existing source - should create it
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/some-rando-source.yaml'),
        }),
      ],
      meta: { writes: 1 },
    },
  ],
  [
    'throws when any item has no source',
    {
      data: [
        // Non-existing source - invalid source path
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
        }),
      ],
      meta: { writes: 0, throws: true },
    },
  ],
];

/**
 * Test conditions when the file-to-be-written-to is empty
 */
const writeConditionsEmpty: WriteCondition[] = [
  ["doesn't do anythingon empty array", {}],
  [
    'adds new items when new definitions are added (general)',
    {
      fileChanges: [
        [relPath('./fixtures/empty.yaml'), relPath('./fixtures/def.yaml')],
      ],
      data: joinDefinition(
        [enDefinitions, jaDefinitions],
        relPath('./fixtures/empty.yaml'),
      ),
      options: { contentFormatter: new ContentFormatter({ afterGroup: '' }) },
      meta: { writes: 1, removes: 0, postfix: 'yaml' },
    },
  ],
  [
    'adds new items when new definitions are added (locale)',
    {
      fileChanges: [
        [
          relPath('./fixtures/empty-en.yaml'),
          relPath('./fixtures/def-en.yaml'),
        ],
      ],
      data: joinDefinition(
        [enDefinitions],
        relPath('./fixtures/empty-en.yaml'),
      ),
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({ afterGroup: '' }),
      },
      meta: { writes: 1, removes: 0, postfix: 'en.yaml' },
    },
  ],
  [
    "doesn't add an item that doesn't match by source",
    {
      fileChanges: [
        [
          relPath('./fixtures/empty-en.json'),
          relPath('./fixtures/def-en.json'),
        ],
      ],
      data: [
        // Correct source - should be written to empty.json
        ...joinDefinition([enDefinitions], relPath('./fixtures/empty-en.json')),
        // Diff source - should NOT be written to empty.json
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there2'],
          value: 'badabom',
          source: relPath('./fixtures/some-rando.yaml'),
        }),
      ],
      meta: { writes: 2, removes: 0, postfix: 'en.json' },
    },
  ],
] as WriteCondition[];

/**
 * Test conditions when the file-to-be-written-to isn't JSON/YAML file.
 */
const writeConditionsWrong: WriteCondition[] = [
  [
    "doesn't change content and throws on non-json/yaml files",
    {
      fileChanges: [
        [relPath('./fixtures/wrong.txt'), relPath('./fixtures/wrong.txt')],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/wrong.txt'),
        }),
      ],
      meta: { throws: true, writes: 0, postfix: 'txt' },
    },
  ],
];

/**
 * Test conditions when the file-to-be-written-to is Vue SFC file.
 */
const writeConditionsPopulated: WriteCondition[] = [
  [
    'removes entries with no items when writing subset of original items',
    {
      fileChanges: [
        [relPath('./fixtures/def.json'), relPath('./fixtures/def-no-ja.json')],
      ],
      data: [
        ...joinDefinition([enDefinitions], relPath('./fixtures/def.json')),
      ],
      meta: { writes: 1, removes: 0, postfix: 'json' },
    },
  ],
  [
    'adds new items',
    {
      fileChanges: [
        [relPath('./fixtures/def-no-ja.json'), relPath('./fixtures/def.json')],
      ],
      data: [
        ...joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/def-no-ja.json'),
        ),
      ],
      meta: { writes: 1, removes: 0, postfix: 'json' },
    },
  ],
  [
    "doesn't change the info on identical items",
    {
      fileChanges: [
        [relPath('./fixtures/def.json'), relPath('./fixtures/def.json')],
      ],
      data: [
        ...joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/def.json'),
        ),
      ],
      meta: { writes: 1, postfix: 'json' },
    },
  ],
  [
    "doesn't fix filename's locale if filename's locale is different than item's locale and fileMatchLocale is false",
    {
      fileChanges: [
        [relPath('./fixtures/def-en.json'), relPath('./fixtures/def-by.json')],
      ],
      data: [
        new JsonYamlDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/def-en.json'),
          sourceScope: 'locale',
        }),
        new JsonYamlDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/def-en.json'),
          sourceScope: 'locale',
        }),
      ],
      options: {
        fileMatchLocale: false,
      },
      meta: {
        writes: 1,
        postfix: 'json',
      },
    },
  ],
  [
    "fixes filename's locale if filename's locale is different than item's locale and fileMatchLocale is false",
    {
      fileChanges: [
        [relPath('./fixtures/def-en.json'), relPath('./fixtures/def-bz.json')],
      ],
      data: [
        new JsonYamlDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/def-en.json'),
          sourceScope: 'locale',
        }),
        new JsonYamlDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/def-en.json'),
          sourceScope: 'locale',
        }),
      ],
      options: {
        fileMatchLocale: true,
        addType: 'locale',
      },
      meta: {
        writes: 1,
        postfix: 'en.json',
      },
    },
  ],
];

export const conditions: [string, WriteCondition[]][] = [
  ['nonexist', writeConditionsNonexist],
  ['empty', writeConditionsEmpty],
  ['wrong', writeConditionsWrong],
  ['populated', writeConditionsPopulated],
];
