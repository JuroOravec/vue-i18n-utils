import merge from 'lodash.merge';

import toParams from '../../../../../test/util/to-params';

import type { I_Item } from '../../../item/types';
import type { I_I18nUtil } from '../../../i18n-util/types';
import { VueAdaptor } from '..';
import { DefinitionItem } from '../../../definition';
import { UsageItem } from '../../../usage';
import { relPath as relPathFn } from '../../__tests__/helpers';
import { conditionGroups as writeConditionGroups } from './adaptor-writer-conds';
import { conditions as usageConditions } from './adaptor-usage-conds';
import { conditions as parserConditions } from './adaptor-parser-conds';
import { conditions as removerConditions } from './adaptor-remover-conds';
import { testFS } from '../../__tests__/fs-tests';

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
    test.each(toParams(usageConditions))(
      '%s',
      async (desc, { files = [], expected = [] }) => {
        const usageItems = await vueAdaptor.usageAnalyzer(files);

        expect(usageItems).toBeDefined();
        expect(usageItems.length).toBe(expected.length);

        usageItems.forEach((item) => {
          expect(item).toBeDefined();
          expect(item instanceof UsageItem).toBeTruthy();

          const match = expected.find((eItem) => {
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
    test.each(toParams(parserConditions))(
      '%s',
      async (desc, { files = [], expected = [] }) => {
        const defItems = await vueAdaptor.parser(files);

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
            instance: vueAdaptor as I_I18nUtil.AdaptorCollection.ItemMethods,
            method: (inst, ...args) => inst.writer!(...args),
            condition: merge({}, condition, {
              meta: { cwd: module.filename },
              linkedFiles: linkedDefFiles,
            }),
          });
        });
      },
    );
  });

  describe('remover', () => {
    describe.each(toParams(removerConditions))('%s', (desc, condition) => {
      testFS({
        instance: vueAdaptor as I_I18nUtil.AdaptorCollection.ItemMethods,
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
