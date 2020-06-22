import { DefinitionItem } from '../../../definition';
import { IAdaptorVue } from '..';
import { VueDefinitionItem } from '../vue-definition';
import { ContentFormatter } from '../../../content-formatter';
import { joinDefinition, relPath as relPathFn } from '../../__tests__/helpers';
import { FsConditionData } from '../../__tests__/fs-tests';
import { enDefinitions, jaDefinitions } from '../../__tests__/definitions';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

export interface WriteConditionData extends FsConditionData {
  /**
   * Options passed to the method
   */
  options?: IAdaptorVue.WriteOptions;
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
 * Test conditions when the file-to-be-written-to isn't Vue SFC file.
 */
const writeConditionsWrong: WriteCondition[] = [
  [
    "doesn't do anything on empty array",
    {
      fileChanges: [
        [relPath('./fixtures/wrong.txt'), relPath('./fixtures/wrong.txt')],
      ],
      meta: { writes: 0, removes: 0 },
    },
  ],
  [
    "doesn't remove content and adds definitions when writing additional items to incorrect files",
    {
      fileChanges: [
        [
          relPath('./fixtures/wrong.txt'),
          relPath('./fixtures/wrong-added.txt'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there2'],
          value: 'badabom',
          source: relPath('./fixtures/wrong.txt'),
        }),
      ],
      options: {
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
];

/**
 * Test conditions when the file-to-be-written-to doesn't exist
 */
const writeConditionsNonexist: WriteCondition[] = [
  [
    "creates new file when writing items to file that doesn't exist",
    {
      data: [
        // Non-existing source - should create it
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/some-rando-source.vue'),
        }),
      ],
      meta: { writes: 1 },
    },
  ],
  [
    "throws when source doesn't exist",
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
  [
    'adds new items as locale-scoped block when new definitions are added to a file',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-locale.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
  [
    'adds new items as general block when new definitions are added to a file',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-general.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
      ],
      options: {
        addType: 'general',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
  [
    "doesn't add an item that doesn't match by source",
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-general.vue'),
        ],
        [
          relPath('./fixtures/wrong.txt'),
          relPath('./fixtures/wrong-added.txt'),
        ],
      ],
      data: [
        // Correct source - should be written to write-empty.vue
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
        // Diff source - should NOT be written to write-empty.vue
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there2'],
          value: 'badabom',
          source: relPath('./fixtures/wrong.txt'),
        }),
      ],
      options: {
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
      meta: {
        writes: 2,
      },
    },
  ],
];

/**
 * Test conditions testing linked files
 */
const writeConditionsPopulated: WriteCondition[] = [
  [
    'adds new items as locale-scoped block when new definitions are added to a file',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-locale.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
  [
    'adds new items as general block when new definitions are added to a file',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-general.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
      ],
      options: {
        addType: 'general',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
  [
    'removes i18n blocks with no items when writing a subset of original items to a vue files with i18n elements',
    {
      fileChanges: [
        [
          relPath('./fixtures/write.vue'),
          relPath('./fixtures/write-subset.vue'),
        ],
      ],
      data: [
        ...joinDefinition([enDefinitions], relPath('./fixtures/write.vue')),
      ],
      options: {
        contentFormatter: new ContentFormatter({
          afterBlock: '',
          afterGroup: '',
        }),
      },
      meta: { writes: 1, removes: 1 },
    },
  ],
  [
    "doesn't add an item that doesn't match by source",
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-empty-added-general.vue'),
        ],
        [
          relPath('./fixtures/wrong.txt'),
          relPath('./fixtures/wrong-added.txt'),
        ],
      ],
      data: [
        // Correct source - should be written to write-empty.vue
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
        // Diff source - should NOT be written to write-empty.vue
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there2'],
          value: 'badabom',
          source: relPath('./fixtures/wrong.txt'),
        }),
      ],
      options: {
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
    },
  ],
  [
    "doesn't change info in file if items are same as what is already in a file (locale-scoped)",
    {
      fileChanges: [
        [
          relPath('./fixtures/write.vue'),
          relPath('./fixtures/write-noadd-locale.vue'),
        ],
      ],
      data: [
        ...joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/write.vue'),
        ),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
        }),
      },
      meta: { writes: 1, removes: 1 },
    },
  ],
  [
    "doesn't change info in file if items are same as what is already in a file (general)",
    {
      fileChanges: [
        [
          relPath('./fixtures/write.vue'),
          relPath('./fixtures/write-noadd-general.vue'),
        ],
      ],
      data: [
        ...joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/write.vue'),
        ),
      ],
      options: {
        addType: 'general',
        strategy: 'general',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
          beforeGroup: '',
          afterGroup: '',
        }),
      },
      meta: { writes: 1, removes: 1 },
    },
  ],
];

/**
 * Test conditions when the file-to-be-written-to is Vue SFC file.
 */
const writeConditionsLinked: WriteCondition[] = [
  [
    'moves definitions to linked file if ALL items contain "link" prop',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-linked.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
          link: './write-linked.json',
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
          beforeContent: '',
          afterContent: '',
        }),
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-empty.vue'),
            [['./write-linked.json', relPath('./fixtures/write-linked.json')]],
          ],
        ],
      },
    },
  ],
  [
    'moves definitions to linked file if ANY item contains "link" prop',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-empty.vue'),
          relPath('./fixtures/write-linked2.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
        }),
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-empty.vue'),
          link: './write-linked2.json',
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          afterBlock: '',
          beforeContent: '',
          afterContent: '',
        }),
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-empty.vue'),
            [
              [
                './write-linked2.json',
                relPath('./fixtures/write-linked2.json'),
              ],
            ],
          ],
        ],
      },
    },
  ],
  [
    'keeps definitions in linked file if it was there before and ANY item contains "link" prop',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-linked4.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          link: './write-linked.json',
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          beforeBlock: '',
          beforeContent: '',
          afterBlock: '',
          afterContent: '',
          afterGroup: '',
        }),
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-linked.vue'),
            [['./write-linked.json', relPath('./fixtures/write-linked4.json')]],
          ],
        ],
      },
    },
  ],
  [
    'keeps definitions in linked file and updates them there if ANY item contains "link" prop',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-linked.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          link: './write-linked.json',
        }),
        new VueDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          afterGroup: '',
          beforeContent: '',
          afterContent: '',
        }),
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-linked.vue'),
            [['./write-linked.json', relPath('./fixtures/write-linked3.json')]],
          ],
        ],
      },
    },
  ],
  [
    "doesn't fix filename's locale if filename's locale is different than item's locale and fileMatchLocale is false",
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-linked-by.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          link: './write-linked-by.json',
          sourceScope: 'locale',
        }),
        new VueDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          sourceScope: 'locale',
        }),
      ],
      options: {
        fileMatchLocale: false,
        addType: 'locale',
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-linked.vue'),
            [
              [
                './write-linked-bz.json',
                relPath('./fixtures/write-linked3.json'),
              ],
            ],
          ],
        ],
      },
    },
  ],
  [
    "fixes filename's locale if filename's locale is different than item's locale and fileMatchLocale is false",
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-linked-bz.vue'),
        ],
      ],
      data: [
        new VueDefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          link: './write-linked-by.json',
          sourceScope: 'locale',
        }),
        new VueDefinitionItem({
          locale: 'bz',
          path: ['wromsh'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
          sourceScope: 'locale',
        }),
      ],
      options: {
        fileMatchLocale: true,
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          afterGroup: '',
          beforeContent: '',
          afterContent: '',
        }),
      },
      meta: {
        writes: 2,
        linkedShouldExist: [
          [
            relPath('./fixtures/write-linked.vue'),
            [
              [
                './write-linked-bz.json',
                relPath('./fixtures/write-linked3.json'),
              ],
            ],
          ],
        ],
      },
    },
  ],
  [
    'removes linked file if no items should be written to it',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-linked3.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'gg',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({
          afterGroup: '',
          beforeGroup: '',
          beforeBlock: '',
        }),
      },
      meta: {
        removes: 1,
        linkedShouldNotExist: [
          [relPath('./fixtures/write-linked.vue'), ['./write-linked.json']],
        ],
      },
    },
  ],
  [
    'moves definitions from linked file to vue file if no items contain "link" prop',
    {
      fileChanges: [
        [
          relPath('./fixtures/write-linked.vue'),
          relPath('./fixtures/write-empty-added-locale.vue'),
        ],
      ],
      data: [
        new DefinitionItem({
          locale: 'bz',
          path: ['hi', 'there'],
          value: 'badabing',
          source: relPath('./fixtures/write-linked.vue'),
        }),
      ],
      options: {
        addType: 'locale',
        contentFormatter: new ContentFormatter({ afterGroup: '' }),
      },
      meta: {
        removes: 1,
        linkedShouldNotExist: [
          [relPath('./fixtures/write-linked.vue'), ['./write-linked.json']],
        ],
      },
    },
  ],
];

export const conditions: [string, WriteCondition[]][] = [
  ['nonexist', writeConditionsNonexist],
  ['empty', writeConditionsEmpty],
  ['wrong', writeConditionsWrong],
  ['linked', writeConditionsLinked],
  ['populated', writeConditionsPopulated],
];
