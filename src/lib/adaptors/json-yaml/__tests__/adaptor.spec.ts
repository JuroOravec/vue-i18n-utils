import flatten from 'lodash.flatten';
import merge from 'lodash.merge';

import type { IDefinition } from '../../../definition/types';
import type { I_Item } from '../../../item/types';
import type { IAdaptorJsonYaml } from '../types';
import { JsonYamlAdaptor } from '..';
import { DefinitionItem } from '../../../definition';
import { relPath as relPathFn, joinDefinition } from '../../__tests__/helpers';
import { enDefinitions, jaDefinitions } from '../../__tests__/definitions';
import { conditions as writeConditions } from './adaptor-writer-conds';
import { testFS, FsConditionData } from '../../__tests__/fs-tests';
import { Item } from '../../../item';

const relPath = (p: string) => relPathFn(p, { base: module.filename });

describe('AdaptorYamlJson', () => {
  const adaptor = new JsonYamlAdaptor();
  // Prepare formatting to match expected results
  adaptor.serializers.setOption('json', 'space', 2);

  describe('usageAnalyzer', () => {
    test('returns empty array', () => {
      const usageItems = adaptor.usageAnalyzer();
      expect(usageItems).toBeDefined();
      expect(usageItems.length).toBe(0);
    });
  });

  describe('parser', () => {
    type DefinitionCondition = [
      string,
      string,
      string[],
      DefinitionItem[],
      {
        throws?: boolean;
      },
    ];

    const definitionConditions: DefinitionCondition[] = [
      ['no match', 'empty file', [relPath('./fixtures/empty.json')], [], {}],
      [
        'no match',
        'empty file (unsupported ext)',
        [relPath('./fixtures/empty.txt')],
        [],
        {},
      ],
      [
        'no match',
        'incorrectly-formatted file',
        [relPath('./fixtures/wrong.json')],
        [],
        { throws: true },
      ],
      [
        'no match',
        'incorrectly-formatted file (unsupported ext)',
        [relPath('./fixtures/wrong.txt')],
        [],
        { throws: true },
      ],
      [
        'no match',
        'correctly-formatted yaml file with no definitions',
        [relPath('./fixtures/no-def.yaml')],
        [],
        {},
      ],
      [
        'no match',
        'correctly-formatted json file with no definitions',
        [relPath('./fixtures/no-def.json')],
        [],
        {},
      ],
      [
        'match',
        'json file',
        [relPath('./fixtures/def.json')],
        joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/def.json'),
        ),
        {},
      ],
      [
        'match',
        'yaml file',
        [relPath('./fixtures/def.yaml')],
        joinDefinition(
          [enDefinitions, jaDefinitions],
          relPath('./fixtures/def.yaml'),
        ),
        {},
      ],
      [
        'match',
        'locale-scoped json file',
        [relPath('./fixtures/def-en.json')],
        joinDefinition([enDefinitions], relPath('./fixtures/def-en.json')),
        {},
      ],
      [
        'match',
        'locale-scoped yaml file',
        [relPath('./fixtures/def-en.yaml')],
        joinDefinition([enDefinitions], relPath('./fixtures/def-en.yaml')),
        {},
      ],
    ];
    definitionConditions.push([
      'match',
      'multiple files',
      definitionConditions.reduce((agg, [resDesc, condDesc, files]) => {
        const extPattern = /\.(?:ya?ml|json)$/;
        const excludePattern = /wrong\..*$/;
        agg.push(
          ...files.filter((f) => {
            const extMatch = extPattern.test(f);
            if (!extMatch) return extMatch;
            return !excludePattern.test(f);
          }),
        );
        return agg;
      }, [] as string[]),
      flatten(
        definitionConditions.map(([resDesc, condDesc, files, items]) => items),
      ),
      {},
    ]);

    test.each(definitionConditions)(
      'finds %s in %s',
      (resDec, condDesc, filepaths, expectedItems, expects) => {
        const { throws } = expects;

        // Do the biz
        if (throws) {
          expect(() => adaptor.parser(filepaths)).toThrow();
          return;
        }
        const defItems = adaptor.parser(filepaths);

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
          instance: adaptor as any,
          method: (inst, items: IDefinition.Item[], ...args) =>
            inst.writer!(items, ...(args as [])),
          condition: merge({}, condition, { meta: { cwd: module.filename } }),
        });
      });
    });
  });

  describe('remover', () => {
    interface RemoveConditionData extends FsConditionData {
      /**
       * Options passed to the method
       */
      options?: IAdaptorJsonYaml.RemoverOptions;
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
        "throws when file doesn't exist",
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
          fileChanges: [[relPath('./fixtures/empty.json'), null]],
          data: [relPath('./fixtures/empty.json')].map(
            (f) => new Item({ source: f }),
          ),
          meta: { removes: 1, writes: 0 },
        },
      ],
      [
        'removes files',
        {
          fileChanges: [[relPath('./fixtures/def.json'), null]],
          data: [relPath('./fixtures/def.json')].map(
            (f) => new Item({ source: f }),
          ),
          meta: { writes: 0, removes: 1 },
        },
      ],
    ];

    describe.each(removeConditions)('%s', (desc, condition) => {
      testFS({
        instance: adaptor as any,
        method: (inst, items: I_Item.Item[], ...args) =>
          inst.remover!(
            items.map((i) => i.source!),
            ...args,
          ),
        condition: merge({}, condition, { meta: { cwd: module.filename } }),
      });
    });
  });
});
