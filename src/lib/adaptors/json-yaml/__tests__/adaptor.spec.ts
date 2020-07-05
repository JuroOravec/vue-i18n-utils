import merge from 'lodash.merge';

import toParams from '../../../../../test/util/to-params';

import type { IDefinition } from '../../../definition/types';
import type { I_Item } from '../../../item/types';
import { JsonYamlAdaptor } from '..';
import { DefinitionItem } from '../../../definition';
import { testFS } from '../../__tests__/fs-tests';
import { conditionGroups as writeConditionGroups } from './adaptor-writer-conds';
import { conditions as parserConditions } from './adaptor-parser-conds';
import { conditions as removerConditions } from './adaptor-remover-conds';

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
    test.each(toParams(parserConditions))(
      '%s',
      async (desc, { files = [], expected = [], meta: { throws } = {} }) => {
        // Do the biz
        if (throws) {
          await expect(() => adaptor.parser(files)).rejects.toThrow();
          return;
        }

        const defItems = await adaptor.parser(files);

        expect(defItems).toBeDefined();
        expect(defItems instanceof Array).toBeTruthy();
        expect(defItems.length).toBe(expected.length);

        defItems.forEach((item) => {
          expect(item).toBeDefined();
          expect(item instanceof DefinitionItem).toBeTruthy();

          const match = expected.find(
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
    describe.each(toParams(writeConditionGroups))(
      '%s',
      (desc, { conditions }) => {
        describe.each(toParams(conditions))('%s', (condDesc, condition) => {
          testFS({
            instance: adaptor as any,
            method: (inst, items: IDefinition.Item[], ...args) =>
              inst.writer!(items, ...(args as [])),
            condition: merge({}, condition, { meta: { cwd: module.filename } }),
          });
        });
      },
    );
  });

  describe('remover', () => {
    describe.each(toParams(removerConditions))('%s', (desc, condition) => {
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
