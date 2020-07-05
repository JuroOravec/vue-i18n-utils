import toParams from '../../../../test/util/to-params';

import type { I_I18nUtil } from '../types';
import { LoadedBase } from '../base';
import { parametrizeInstance, validateAdaptorCalls } from './i18n-util-helpers';
import {
  conditions as itemProcessorConditions,
  ItemProcessorCondition,
} from './item-processor-conds';
import { conditions as instanceConditions } from './i18n-util-conds';
import {
  testUsageAnalyze,
  testUsageValidate,
  testStats,
} from './item-processor-tests';

type ItemProcessorParam = Omit<ItemProcessorCondition, 'description'>;

const itemProcessorParams = toParams(itemProcessorConditions);

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
      describe.each(itemProcessorParams)('%s', (condDesc, cond) => {
        const { definitions, analysis } = cond;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const conditions: {
          description: string;
          method: (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorParam,
            ...args: any[]
          ) => ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>;
        }[] = [
          {
            description: 'loadFromFiles',
            method: async (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageAnalyzeAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          },
          {
            description: 'loadFromItems',
            method: async (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageAnalyzeAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          },
        ];

        describe.each(toParams(conditions))('%s', (desc, { method }) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>;
          } = {} as any;

          const shouldCallUsageAnalyzer =
            desc === 'loadFromFiles' && cond.usageInputFiles.length;

          beforeEach(() => {
            fn.call = async () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });

          testUsageAnalyze(fn, analysis);

          if (shouldCallUsageAnalyzer) {
            test('calls usageAnalyzers', async () => {
              await fn.call();
              validateAdaptorCalls(adaptorSpies, { usageAnalyzer: { vue: 1 } });
            });
          }

          if (!shouldCallUsageAnalyzer) {
            test('does not call usageAnalyzers', async () => {
              await fn.call();
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });

    describe('usageValidateAgainst', () => {
      describe.each(itemProcessorParams)('returns [%s]', (condDesc, cond) => {
        const { definitions, throws } = cond;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const conditions: {
          description: string;
          method: (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorParam,
            ...args: any[]
          ) => ReturnType<I_I18nUtil.I18nUtil['usageValidate']>;
        }[] = [
          {
            description: 'loadFromFiles',
            method: (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageValidateAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          },
          {
            description: 'loadFromItems',
            method: (i18nUtil, cond, ...args) =>
              i18nUtil
                .usageValidateAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          },
        ];

        describe.each(toParams(conditions))('%s', (desc, { method }) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['usageValidate']>;
          } = {} as any;

          const shouldCallUsageAnalyzer =
            desc === 'loadFromFiles' && cond.usageInputFiles.length;

          beforeEach(() => {
            fn.call = async () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });

          testUsageValidate(fn, throws);

          if (shouldCallUsageAnalyzer) {
            test('calls usageAnalyzers', async () => {
              try {
                await fn.call();
              } catch {
                /** noop */
              }
              validateAdaptorCalls(adaptorSpies, {
                usageAnalyzer: { vue: 1 },
              });
            });
          }

          if (!shouldCallUsageAnalyzer) {
            test('does not call usageAnalyzers', async () => {
              try {
                await fn.call();
              } catch {
                /** noop */
              }
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });

    describe('statsAgainst', () => {
      describe.each(itemProcessorParams)('returns [%s]', (desc, cond) => {
        const { definitions, stats } = cond;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        const conditions: {
          description: string;
          method: (
            i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
            cond: ItemProcessorParam,
            ...args: any[]
          ) => Promise<ReturnType<I_I18nUtil.I18nUtil['stats']>>;
        }[] = [
          {
            description: 'loadFromFiles',
            method: async (i18nUtil, cond, ...args) =>
              i18nUtil
                .statsAgainst(...(args as [any]))
                .loadFromFiles(cond.usageInputFiles),
          },
          {
            description: 'loadFromItems',
            method: async (i18nUtil, cond, ...args) =>
              i18nUtil
                .statsAgainst(...(args as [any]))
                .loadFromItems(cond.usage),
          },
        ];

        describe.each(toParams(conditions))('%s', (desc, { method }) => {
          const fn: {
            call: () => Promise<ReturnType<I_I18nUtil.I18nUtil['stats']>>;
          } = {} as any;

          const shouldCallUsageAnalyzer =
            desc === 'loadFromFiles' && cond.usageInputFiles.length;

          beforeEach(() => {
            fn.call = async () =>
              i18nUtil instanceof LoadedBase
                ? method(i18nUtil, cond)
                : method(i18nUtil, cond, definitions);
          });

          testStats(fn, stats);

          if (shouldCallUsageAnalyzer) {
            test('calls usageAnalyzers', async () => {
              await fn.call();
              validateAdaptorCalls(adaptorSpies, { usageAnalyzer: { vue: 1 } });
            });
          }

          if (!shouldCallUsageAnalyzer) {
            test('does not call usageAnalyzers', async () => {
              await fn.call();
              validateAdaptorCalls(adaptorSpies);
            });
          }
        });
      });
    });
  },
);
