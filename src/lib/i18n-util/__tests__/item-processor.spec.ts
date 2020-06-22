import type { IDefinition } from '../../definition/types';

import type { I_I18nUtil } from '../types';
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
import { conditions, instanceConditions } from './item-processor-conds';
import {
  testUsageAnalyze,
  testUsageValidate,
  testStats,
} from './item-processor-tests';
import { validateItems } from './item-processor-helpers';
import { DefinitionArray } from '../../definition';

type DefItem = IDefinition.Item;

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

    describe.each([
      [
        'master',
        null,
        (i18nUtil: any, ...args: any[]) => i18nUtil.master(...args),
        (arr: any[], opts: any) => arr,
        validateItems,
      ],
      [
        'locale',
        'de',
        (i18nUtil: any, ...args: any[]) => i18nUtil.locale(...args),
        (arr: DefItem[], opts: any) =>
          arr.filter((item) => item.locale === 'de'),
        validateItems,
      ],
      [
        'locales',
        ['en', 'de'],
        (i18nUtil: any, ...args: any[]) => i18nUtil.locales(...args),
        (arr: DefItem[], opts: any) =>
          arr.filter((item) => ['en', 'de'].includes(item.locale)),
        validateItems,
      ],
      [
        'missingItems',
        null,
        (i18nUtil: any, ...args: any[]) => i18nUtil.missingItems(...args),
        (arr: DefItem[], opts: any) =>
          DefinitionArray.filterMissing(
            opts.includeMissing ? arr : [...inputDefs, ...definitionsMissing],
            opts,
          ).items,
        validateItems,
      ],
      [
        'missingLocales',
        null,
        (i18nUtil: any, ...args: any[]) => i18nUtil.missingLocales(...args),
        (arr: DefItem[], opts: any) =>
          mapUniq(
            DefinitionArray.filterMissing(
              opts.includeMissing ? arr : [...inputDefs, ...definitionsMissing],
              opts,
            ).items,
            (item) => item.locale,
          ),
        (result: string[], expected: string[]) => {
          expect(result).toBeDefined();
          expect(Array.isArray(result)).toBeTruthy();
          expect(result.every((l) => typeof l === 'string')).toBeTruthy();
          expect(result).toHaveLength(expected.length);
          result.every((l) => expected.includes(l));
        },
      ],
    ] as [string, string | string[] | null, (...args: any) => any, (items: DefItem[], opts: any) => DefItem[], (res: any[], exp: any[]) => void][])(
      '%s',
      (methodName, locale, method, transformer, validator) => {
        test('returns empty array on empty array', () => {
          const defs = [] as DefItem[];
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...defs];
          }
          const res =
            i18nUtil instanceof LoadedBase
              ? locale
                ? method(i18nUtil, locale)
                : method(i18nUtil)
              : locale
              ? method(i18nUtil, defs, locale)
              : method(i18nUtil, defs);

          expect(res).toEqual([]);
        });

        describe('returns entries of definitions with matching locale', () => {
          test.each([
            [
              'includeMissing=true',
              { includeMissing: true },
              [...inputDefs, ...definitionsMissing],
            ],
            ['includeMissing=false', { includeMissing: false }, inputDefs],
            ['includeMissing=default', {}, inputDefs],
            [
              'includeMissing=true missingValue=""',
              { includeMissing: true, missingValue: '' },
              [
                ...inputDefs,
                ...definitionsMissing.map((item) => item.copy({ value: '' })),
              ],
            ],
            [
              'includeMissing=true missingValue=default',
              { includeMissing: true },
              [...inputDefs, ...definitionsMissing],
            ],
          ] as [string, any, DefItem[]][])('%s', (desc, opts, expected) => {
            const res =
              i18nUtil instanceof LoadedBase
                ? locale
                  ? method(i18nUtil, locale, opts)
                  : method(i18nUtil, opts)
                : locale
                ? method(i18nUtil, inputDefs, locale, opts)
                : method(i18nUtil, inputDefs, opts);

            validator(res, transformer(expected, opts));
          });
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
        test.each([
          ['simple=true', { simple: true }, simple],
          ['simple=false', { simple: false }, expanded],
          ['simple=default', {}, expanded],
          ['merge=true', { merge: true }, expandedMerged],
          ['merge=false', { merge: false }, expanded],
          ['merge=default', {}, expanded],
          [
            'simple=true merge=true',
            { simple: true, merge: true },
            simpleMerged,
          ],
          [
            'includeMissing=true',
            { simple: true, includeMissing: true },
            simpleMissing,
          ],
          [
            'includeMissing=false',
            { simple: true, includeMissing: false },
            simple,
          ],
          [
            'includeMissing=default',
            { simple: true, includeMissing: false },
            simple,
          ],
        ])('%s', (desc, opts, expected) => {
          const defs = [...inputDefs, ...definitionsMissing] as DefItem[];
          if (i18nUtil instanceof LoadedBase) {
            i18nUtil.loaded.items = [...defs];
          }
          const res =
            i18nUtil instanceof LoadedBase
              ? i18nUtil.toObject(opts)
              : i18nUtil.toObject([...defs], opts);

          expect(res).toEqual(expected);
        });
      });
    });

    describe('usageAnalyze', () => {
      describe.each(conditions)('returns [%s]', (desc, cond) => {
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
      describe.each(conditions)('returns [%s]', (desc, cond) => {
        const { definitions, usage, valid } = cond;
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

        testUsageValidate(fn, valid);
      });
    });

    describe('stats', () => {
      describe.each(conditions)(
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
