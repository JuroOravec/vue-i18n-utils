import flatten from 'lodash.flatten';
import merge from 'lodash.merge';

import type { I_Item } from '../../../item/types';
import { DefinitionItem } from '../../../definition';
import { UsageItem } from '../../../usage';
import { VueAdaptor, IAdaptorVue } from '..';
import { relPath as relPathFn, joinDefinition } from '../../__tests__/helpers';
import { conditions as writeConditions } from './adaptor-writer-conds';
import { enDefinitions, jaDefinitions } from '../../__tests__/definitions';
import { testFS, FsConditionData } from '../../__tests__/fs-tests';
import { Item } from '../../../item';
import { IDefinition } from '../../../definition/types';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

const linkedDefFiles = [
  './fixtures/def-en.yaml',
  './fixtures/def.yaml',
  './fixtures/write-linked.json',
  './fixtures/write-linked2.json',
];

describe('AdaptorVue', () => {
  const vueAdaptor = new VueAdaptor();
  // Prepare formatting to match expected results
  vueAdaptor.serializers.setOption('json', 'space', 2);

  describe('usageAnalyzer', () => {
    type UsageCondition = [string, string, string[], UsageItem[]];

    const usageConditions: UsageCondition[] = [
      ['no match', 'empty file', [relPath('./fixtures/empty.vue')], []],
      [
        'no match',
        'incorrectly-formatted file',
        [relPath('./fixtures/wrong.txt')],
        [],
      ],
      [
        'no match',
        'correctly-formatted file with no usage',
        [relPath('./fixtures/usage-no-match.vue')],
        [],
      ],
      [
        'match',
        'script',
        [relPath('./fixtures/usage-match-script.vue')],
        [
          new UsageItem({ line: 100, path: ['message', 'd'] }),
          new UsageItem({ line: 101, path: ['message', 'e'] }),
          new UsageItem({ line: 102, path: ['message', 'd'] }),
        ].map((i) => {
          i.source = relPath('./fixtures/usage-match-script.vue');
          return i;
        }),
      ],
      [
        'match',
        'template',
        [relPath('./fixtures/usage-match-template.vue')],
        [
          new UsageItem({ line: 10, path: ['message', 'a'] }),
          new UsageItem({ line: 19, path: ['message', 'b'] }),
          new UsageItem({ line: 58, path: ['message', 'c'] }),
          new UsageItem({ line: 87, path: ['message', 'c'] }),
        ].map((i) => {
          i.source = relPath('./fixtures/usage-match-template.vue');
          return i;
        }),
      ],
      [
        'match',
        'script and template',
        [relPath('./fixtures/usage-match-mixed.vue')],
        [
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
      ],
    ];
    usageConditions.push([
      'match',
      'multiple files',
      flatten(usageConditions.map(([resDesc, condDesc, files]) => files)),
      flatten(
        usageConditions.map(([resDesc, condDesc, files, items]) => items),
      ),
    ]);

    test.each(usageConditions)(
      'finds %s in [%s]',
      (resDec, condDesc, filepaths, expectedItems) => {
        const usageItems = vueAdaptor.usageAnalyzer(filepaths);
        expect(usageItems).toBeDefined();
        expect(usageItems.length).toBe(expectedItems.length);

        usageItems.forEach((item) => {
          expect(item).toBeDefined();
          expect(item instanceof UsageItem).toBeTruthy();

          const match = expectedItems.find((eItem) => {
            return (
              item.source === relPath(eItem.source) &&
              item.line === eItem.line &&
              item.pathHash === eItem.pathHash
            );
          });
          expect(match).toBeDefined();
        });
      },
    );
  });

  describe('parser', () => {
    type DefinitionCondition = [string, string, string[], IDefinition.Item[]];

    const definitionConditions: DefinitionCondition[] = [
      ['no match', 'empty file', [relPath('./fixtures/empty.vue')], []],
      [
        'no match',
        'incorrectly-formatted file',
        [relPath('./fixtures/wrong.txt')],
        [],
      ],
      [
        'no match',
        'correctly-formatted file with no definitions',
        [relPath('./fixtures/definition-no-match.vue')],
        [],
      ],
      [
        'match',
        'file with locale-scoped i18n block',
        [relPath('./fixtures/definition-match-single-scoped.vue')],
        joinDefinition(
          [enDefinitions],
          relPath('./fixtures/definition-match-single-scoped.vue'),
        ),
      ],
      [
        'match',
        'file with locale-scoped i18n block with "src" attr',
        [relPath('./fixtures/definition-match-single-scoped-src.vue')],
        joinDefinition(
          [enDefinitions],
          relPath('./fixtures/definition-match-single-scoped-src.vue'),
        ),
      ],
      [
        'match',
        'file with general i18n block',
        [relPath('./fixtures/definition-match-single-general.vue')],
        joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/definition-match-single-general.vue'),
        ),
      ],
      [
        'match',
        'file with general i18n block with "src" attr',
        [relPath('./fixtures/definition-match-single-general-src.vue')],
        joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/definition-match-single-general-src.vue'),
        ),
      ],
      [
        'match',
        'file with general i18n block with "src" attr',
        [relPath('./fixtures/definition-match-mixed.vue')],
        joinDefinition(
          [...Array(3).fill(enDefinitions), ...Array(3).fill(jaDefinitions)],
          relPath('./fixtures/definition-match-mixed.vue'),
        ),
      ],
    ];
    definitionConditions.push([
      'match',
      'multiple files',
      flatten(definitionConditions.map(([resDesc, condDesc, files]) => files)),
      flatten(
        definitionConditions.map(([resDesc, condDesc, files, items]) => items),
      ),
    ]);

    test.each(definitionConditions)(
      'finds %s in [%s]',
      (resDec, condDesc, filepaths, expectedItems) => {
        const defItems = vueAdaptor.parser(filepaths);
        expect(defItems).toBeDefined();
        expect(defItems instanceof Array).toBeTruthy();
        expect(defItems.length).toBe(expectedItems.length);

        defItems.forEach((item) => {
          expect(item).toBeDefined();
          expect(item instanceof DefinitionItem).toBeTruthy();

          const match = expectedItems.find(
            (eItem) =>
              item.localeTokenHash === eItem.localeTokenHash &&
              item.value === eItem.value,
          );
          expect(match).toBeDefined();
        });
      },
    );
  });

  describe('writer', () => {
    describe.each(writeConditions)('%s', (desc, conditions) => {
      describe.each(conditions)('%s', (condDesc, condition) => {
        testFS({
          instance: vueAdaptor,
          method: (inst, ...args) => inst.writer!(...args),
          condition: merge({}, condition, {
            meta: { cwd: module.filename },
            linkedFiles: linkedDefFiles,
          }),
        });
      });
    });
  });

  describe('remover', () => {
    interface RemoveConditionData extends FsConditionData {
      /**
       * Options passed to the method
       */
      options?: IAdaptorVue.RemoverOptions;
    }

    type RemoveCondition = [
      /**
       * Behaviour description used for annotating jest groups - What is the
       * expected outcome?
       */
      string,
      RemoveConditionData,
    ];

    const removeConditions: RemoveCondition[] = [
      [
        "doesn't remove anything on empty array",
        {
          fileChanges: [],
          data: [],
          options: {},
          meta: { writes: 0, removes: 0 },
        },
      ],
      [
        "throws when file that doesn't exist",
        {
          data: [relPath('./fixtures/some-rando-source.vue')].map(
            (f) => new Item({ source: f }),
          ),
          fileChanges: [],
          meta: { writes: 0, removes: 2, throws: true },
        },
      ],
      [
        'removes empty files with no content',
        {
          fileChanges: [[relPath('./fixtures/empty.vue'), null]],
          data: [relPath('./fixtures/empty.vue')].map(
            (f) => new Item({ source: f }),
          ),
          meta: { removes: 1, writes: 0 },
        },
      ],
      [
        'removes files with only whitespace',
        {
          fileChanges: [[relPath('./fixtures/empty-whitespace.vue'), null]],
          data: [relPath('./fixtures/empty-whitespace.vue')].map(
            (f) => new Item({ source: f }),
          ),
          meta: { removes: 1, writes: 0 },
        },
      ],
      [
        "doesn't remove non-empty files with non-i18n content",
        {
          fileChanges: [
            [relPath('./fixtures/wrong.txt'), relPath('./fixtures/wrong.txt')],
          ],
          data: [relPath('./fixtures/wrong.txt')].map(
            (f) => new Item({ source: f }),
          ),
          options: {},
          meta: { writes: 1, removes: 0 },
        },
      ],
      [
        'removes only i18n tags and linked files but not file itself if file has both i18n and non-i18n content',
        {
          fileChanges: [
            [
              relPath('./fixtures/write.vue'),
              relPath('./fixtures/write-removed.vue'),
            ],
          ],
          data: [relPath('./fixtures/write.vue')].map(
            (f) => new Item({ source: f }),
          ),
          options: {},
          meta: {
            writes: 1,
            removes: 1,
            linkedShouldNotExist: [
              [relPath('./fixtures/write.vue'), ['./def.yaml']],
            ],
          },
        },
      ],
      [
        'removes files and linked files if file has only i18n content',
        {
          fileChanges: [[relPath('./fixtures/write-linked.vue'), null]],
          data: [relPath('./fixtures/write-linked.vue')].map(
            (f) => new Item({ source: f }),
          ),
          options: {},
          meta: {
            writes: 0,
            removes: 2,
            linkedShouldNotExist: [
              [relPath('./fixtures/write-linked.vue'), ['./write-linked.json']],
            ],
          },
        },
      ],
    ];

    describe.each(removeConditions)('%s', (desc, condition) => {
      testFS({
        instance: vueAdaptor,
        method: (inst, items: I_Item.Item[], ...args) =>
          inst.remover!(
            items.map((i) => i.source!),
            ...args,
          ),
        condition: merge({}, condition, {
          meta: { cwd: module.filename },
          linkedFiles: linkedDefFiles,
        }),
      });
    });
  });
});
