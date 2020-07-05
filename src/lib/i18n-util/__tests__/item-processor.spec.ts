import type { IDefinition } from '../../definition/types';

import type { I_I18nUtil } from '../types';
import toParams from '../../../../test/util/to-params';
import { I18nUtil, LoadedI18nUtil } from '..';
import {
  definitions as inputDefs,
  definitionsMissing,
} from './fixtures/definitions';
import {
  simple,
  expanded,
  expandedMerged,
  simpleMerged,
  simpleMissing,
} from './fixtures/definition-objects';
import { mapUniq } from '../../util/array';
import { LoadedBase } from '../base';
import {
  conditions as itemProcessorConditions,
  instanceConditions,
} from './item-processor-conds';
import {
  testUsageAnalyze,
  testUsageValidate,
  testStats,
} from './item-processor-tests';
import { validateItems } from './item-processor-helpers';
import { DefinitionArray } from '../../definition';

type DefItem = IDefinition.Item;

const itemProcessorParams = toParams(itemProcessorConditions);

describe('I18nUtilItemProcessor', () => {
  describe.each(instanceConditions)('%s', (name, klass, setup) => {
    let i18nUtil: I18nUtil | LoadedI18nUtil;

    beforeAll(() => {
      i18nUtil = setup();
    });

    beforeEach(() => {
      if (i18nUtil instanceof LoadedBase) {
        i18nUtil.loaded.items = [...inputDefs];
      }
    });

    const commonMethodsConditions: {
      description: string;
      locale: string | string[] | null;
      method: (...args: any) => any;
      transformer: (items: DefItem[], opts: any) => any[];
      validator: (res: any[], exp: any[]) => void;
    }[] = [
      {
        description: 'master',
        locale: null,
        method: (i18nUtil: I18nUtil, ...args: [any]) =>
          i18nUtil.master(...args),
        transformer: (arr) => arr,
        validator: validateItems,
      },
      {
        description: 'locale',
        locale: 'de',
        method: (i18nUtil: I18nUtil, ...args: [any, any]) =>
          i18nUtil.locale(...args),
        transformer: (arr) => arr.filter((item) => item.locale === 'de'),
        validator: validateItems,
      },
      {
        description: 'locales',
        locale: ['en', 'de'],
        method: (i18nUtil: I18nUtil, ...args: [any, any]) =>
          i18nUtil.locales(...args),
        transformer: (arr) =>
          arr.filter((item) => ['en', 'de'].includes(item.locale)),
        validator: validateItems,
      },
      {
        description: 'missingItems',
        locale: null,
        method: (i18nUtil: I18nUtil, ...args: [any, any]) =>
          i18nUtil.missingItems(...args),
        transformer: (arr, opts) =>
          DefinitionArray.filterMissing(
            opts.includeMissing ? arr : [...inputDefs, ...definitionsMissing],
            opts,
          ).items,
        validator: validateItems,
      },
      {
        description: 'missingLocales',
        locale: null,
        method: (i18nUtil: I18nUtil, ...args: [any]) =>
          i18nUtil.missingLocales(...args),
        transformer: (arr, opts: any) =>
          mapUniq(
            DefinitionArray.filterMissing(
              opts.includeMissing ? arr : [...inputDefs, ...definitionsMissing],
              opts,
            ).items,
            (item) => item.locale,
          ),
        validator: (result: string[], expected: string[]) => {
          expect(result).toBeDefined();
          expect(Array.isArray(result)).toBeTruthy();
          expect(result).toHaveLength(expected.length);
          expect(result.every((l) => typeof l === 'string')).toBeTruthy();
          result.every((l) => expected.includes(l));
        },
      },
    ];

    describe.each(toParams(commonMethodsConditions))(
      '%s',
      (desc, { locale, method, transformer, validator }) => {
        test('returns empty array on empty array', async () => {
          const defs = [] as DefItem[];

          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...defs];
          }

          const res = await (i18nUtil instanceof LoadedBase
            ? locale
              ? method(i18nUtil, locale)
              : method(i18nUtil)
            : locale
            ? method(i18nUtil, defs, locale)
            : method(i18nUtil, defs));

          expect(res).toEqual([]);
        });

        describe('returns entries of definitions with matching locale', () => {
          const conditions: {
            description: string;
            options?: any;
            expected?: DefItem[];
          }[] = [
            {
              description: 'includeMissing=true',
              options: { includeMissing: true },
              expected: [...inputDefs, ...definitionsMissing],
            },
            {
              description: 'includeMissing=false',
              options: { includeMissing: false },
              expected: inputDefs,
            },
            {
              description: 'includeMissing=default',
              expected: inputDefs,
            },
            {
              description: 'includeMissing=true missingValue=""',
              options: { includeMissing: true, missingValue: '' },
              expected: [
                ...inputDefs,
                ...definitionsMissing.map((item) => item.copy({ value: '' })),
              ],
            },
            {
              description: 'includeMissing=true missingValue=default',
              options: { includeMissing: true },
              expected: [...inputDefs, ...definitionsMissing],
            },
          ];

          test.each(toParams(conditions))(
            '%s',
            async (desc, { options = {}, expected = [] }) => {
              const res = await (i18nUtil instanceof LoadedBase
                ? locale
                  ? method(i18nUtil, locale, options)
                  : method(i18nUtil, options)
                : locale
                ? method(i18nUtil, inputDefs, locale, options)
                : method(i18nUtil, inputDefs, options));

              validator(res, transformer(expected, options));
            },
          );
        });
      },
    );

    describe('toObject', () => {
      test('returns empty object on empty array', () => {
        const defs = [] as DefItem[];

        if (i18nUtil instanceof LoadedBase) {
          i18nUtil.loaded.items = [...defs];
        }

        const res =
          i18nUtil instanceof LoadedBase
            ? i18nUtil.toObject()
            : i18nUtil.toObject(defs);

        expect(res).toEqual({});
      });

      describe('returns object composed of all definitions on definitions array', () => {
        const conditions: {
          description: string;
          options?: any;
          expected?: object;
        }[] = [
          {
            description: 'simple=true',
            options: { simple: true },
            expected: simple,
          },
          {
            description: 'simple=false',
            options: { simple: false },
            expected: expanded,
          },
          {
            description: 'simple=default',
            expected: expanded,
          },
          {
            description: 'merge=true',
            options: { merge: true },
            expected: expandedMerged,
          },
          {
            description: 'merge=false',
            options: { merge: false },
            expected: expanded,
          },
          {
            description: 'merge=default',
            expected: expanded,
          },
          {
            description: 'simple=true merge=true',
            options: { simple: true, merge: true },
            expected: simpleMerged,
          },
          {
            description: 'includeMissing=true',
            options: { simple: true, includeMissing: true },
            expected: simpleMissing,
          },
          {
            description: 'includeMissing=false',
            options: { simple: true, includeMissing: false },
            expected: simple,
          },
          {
            description: 'includeMissing=default',
            options: { simple: true, includeMissing: false },
            expected: simple,
          },
        ];

        test.each(toParams(conditions))(
          '%s',
          (desc, { options = {}, expected = [] }) => {
            const defs = [...inputDefs, ...definitionsMissing] as DefItem[];
            if (i18nUtil instanceof LoadedBase) {
              i18nUtil.loaded.items = [...defs];
            }
            const res =
              i18nUtil instanceof LoadedBase
                ? i18nUtil.toObject(options)
                : i18nUtil.toObject([...defs], options);

            expect(res).toEqual(expected);
          },
        );
      });
    });

    describe('usageAnalyze', () => {
      describe.each(itemProcessorParams)('returns [%s]', (desc, cond) => {
        const { definitions, usage, analysis } = cond;

        const fn: {
          call: () => ReturnType<I_I18nUtil.I18nUtil['usageAnalyze']>;
        } = {} as any;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }

          fn.call = () =>
            i18nUtil instanceof LoadedBase
              ? i18nUtil.usageAnalyze(usage)
              : i18nUtil.usageAnalyze(definitions, usage);
        });

        testUsageAnalyze(fn, analysis);
      });
    });

    describe('usageValidate', () => {
      describe.each(itemProcessorParams)('returns [%s]', (desc, cond) => {
        const { definitions, usage, throws } = cond;

        const fn: {
          call: () => ReturnType<I_I18nUtil.I18nUtil['usageValidate']>;
        } = {} as any;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...definitions];
          }

          fn.call = () =>
            i18nUtil instanceof LoadedBase
              ? i18nUtil.usageValidate(usage)
              : i18nUtil.usageValidate(definitions, usage);
        });

        testUsageValidate(fn, throws);
      });
    });

    describe('stats', () => {
      describe.each(itemProcessorParams)(
        'returns [%s]',
        (desc, { definitions, usage, stats }) => {
          const fn: {
            call: () => ReturnType<I_I18nUtil.I18nUtil['stats']>;
          } = {} as any;

          beforeEach(() => {
            if (i18nUtil instanceof LoadedBase) {
              i18nUtil.loaded.items = [...definitions];
            }

            fn.call = () =>
              i18nUtil instanceof LoadedBase
                ? i18nUtil.stats(usage)
                : i18nUtil.stats(definitions, usage);
          });

          testStats(fn, stats);
        },
      );
    });
  });
});
