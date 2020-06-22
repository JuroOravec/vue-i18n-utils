import type { I_I18nUtil } from '../types';
import { LoadedBase } from '../base';
import { parametrizeInstance, validateAdaptorCalls } from './i18n-util-helpers';
import {
  conditions as itemProcessorConditions,
  ItemProcessorConditionData,
} from './item-processor-conds';
import { conditions as instanceConditions } from './i18n-util-conds';
import {
  testUsageAnalyze,
  testUsageValidate,
  testStats,
} from './item-processor-tests';

parametrizeInstance(
  instanceConditions,
  (name, getInstance, getAdaptorSpies) => {
    let i18nUtil: ReturnType<typeof getInstance>;
    let adaptorSpies: ReturnType<typeof getAdaptorSpies>;

    beforeAll(() => {
      i18nUtil = getInstance();
      adaptorSpies = getAdaptorSpies();
    });

    describe('usageAnalyzeAgainst', () => {
      describe.each(itemProcessorConditions)('%s', (desc, cond) => {
        const { definitions, analysis } = cond;
        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const params: [
          string,
          (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorConditionData,
            ...args: any[]
          ) => ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>,
        ][] = [
          [
            'loadFromFiles',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageAnalyzeAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          ],
          [
            'loadFromItems',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageAnalyzeAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          ],
        ];

        describe.each(params)('%s', (desc, method) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>;
          } = {} as any;
          beforeEach(() => {
            fn.call = () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });
          testUsageAnalyze(fn, analysis);

          if (desc === 'loadFromFiles' && cond.usageInputFiles.length) {
            test('calls usageAnalyzers', () => {
              fn.call();
              validateAdaptorCalls(adaptorSpies, { usageAnalyzer: { vue: 1 } });
            });
          } else {
            test('does not call usageAnalyzers', () => {
              fn.call();
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });

    describe('usageValidateAgainst', () => {
      describe.each(itemProcessorConditions)('returns [%s]', (desc, cond) => {
        const { definitions, valid } = cond;
        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const params: [
          string,
          (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorConditionData,
            ...args: any[]
          ) => ReturnType<I_I18nUtil.I18nUtil['usageValidate']>,
        ][] = [
          [
            'loadFromFiles',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageValidateAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          ],
          [
            'loadFromItems',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageValidateAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          ],
        ];

        describe.each(params)('%s', (desc, method) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['usageValidate']>;
          } = {} as any;
          beforeEach(() => {
            fn.call = () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });
          testUsageValidate(fn, valid);

          if (desc === 'loadFromFiles' && cond.usageInputFiles.length) {
            test('calls usageAnalyzers', () => {
              try {
                fn.call();
              } catch {}
              validateAdaptorCalls(adaptorSpies, { usageAnalyzer: { vue: 1 } });
            });
          } else {
            test('does not call usageAnalyzers', () => {
              try {
                fn.call();
              } catch {}
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });

    describe('statsAgainst', () => {
      describe.each(itemProcessorConditions)('returns [%s]', (desc, cond) => {
        const { definitions, stats } = cond;
        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const params: [
          string,
          (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorConditionData,
            ...args: any[]
          ) => ReturnType<I_I18nUtil.I18nUtil['stats']>,
        ][] = [
          [
            'loadFromFiles',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .statsAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          ],
          [
            'loadFromItems',
            (i18nUtil, cond, ...args) =>
              i18nUtil
                .statsAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          ],
        ];

        describe.each(params)('%s', (desc, method) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['stats']>;
          } = {} as any;
          beforeEach(() => {
            fn.call = () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });
          testStats(fn, stats);

          if (desc === 'loadFromFiles' && cond.usageInputFiles.length) {
            test('calls usageAnalyzers', () => {
              fn.call();
              validateAdaptorCalls(adaptorSpies, { usageAnalyzer: { vue: 1 } });
            });
          } else {
            test('does not call usageAnalyzers', () => {
              fn.call();
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });
  },
);
