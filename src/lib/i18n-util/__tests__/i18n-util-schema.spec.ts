import type { IDefinition } from '../../definition/types';
import type { ISchemator } from '../../schemator/types';
import { LoadedI18nUtil } from '..';
import { definitions, definitionsJY } from './fixtures/definitions';
import {
  emptySchema,
  fullSchemaLocale,
  fullSchemaMaster,
} from './fixtures/schemas';
import { parametrizeInstance, validateAdaptorCalls } from './i18n-util-helpers';
import { conditions as instanceConditions } from './i18n-util-conds';

type DefItem = IDefinition.Item;

parametrizeInstance(
  instanceConditions,
  (name, getInstance, getAdaptorSpies) => {
    let i18nUtil: ReturnType<typeof getInstance>;
    let adaptorSpies: ReturnType<typeof getAdaptorSpies>;

    beforeAll(() => {
      i18nUtil = getInstance();
      adaptorSpies = getAdaptorSpies();
    });

    describe('schema', () => {
      let schemaSpy: jest.SpyInstance;

      beforeAll(() => {
        schemaSpy = jest.spyOn(i18nUtil.schemator, 'generate');
      });

      afterAll(() => {
        if (schemaSpy) schemaSpy.mockRestore();
      });

      beforeEach(() => {
        if (schemaSpy) schemaSpy.mockClear();
      });

      test('returns empty object schema from empty array', () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        const schema =
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.schema()
            : i18nUtil.schema(defs);

        expect(schemaSpy).toBeCalled();
        expect(schemaSpy).toBeCalledTimes(1);

        expect(schema).toBeDefined();
        expect(schema).toEqual(emptySchema);

        validateAdaptorCalls(adaptorSpies);
      });

      test.each([
        ['master schema', { scope: 'master' }, fullSchemaMaster],
        ['locale schema', { scope: 'locale' }, fullSchemaLocale],
        ['default schema', {}, fullSchemaLocale],
      ] as [string, ISchemator.GenerateOptions, any][])(
        'returns %s object from array of definitions',
        (desc, opts, expected) => {
          const schema =
            i18nUtil instanceof LoadedI18nUtil
              ? i18nUtil.schema(opts)
              : i18nUtil.schema(definitions, opts);

          expect(schemaSpy).toBeCalled();
          expect(schemaSpy).toBeCalledTimes(1);

          expect(schema).toBeDefined();
          expect(schema).toEqual(expected);

          validateAdaptorCalls(adaptorSpies);
        },
      );

      test('returns object schema with keys taken from all locales', () => {
        const defs = definitionsJY as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        const schema =
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.schema()
            : i18nUtil.schema(defs);

        expect(schemaSpy).toBeCalled();
        expect(schemaSpy).toBeCalledTimes(1);

        expect(schema).toBeDefined();
        expect(schema).toEqual(fullSchemaLocale);

        validateAdaptorCalls(adaptorSpies);
      });

      test('options are passed to schema generator', () => {
        const options = { test: 'confirmed' };

        i18nUtil instanceof LoadedI18nUtil
          ? i18nUtil.schema(options)
          : i18nUtil.schema(definitions, options);

        expect(schemaSpy).toBeCalled();
        expect(schemaSpy).toBeCalledTimes(1);
        expect(schemaSpy.mock.calls[0][1]).toBeDefined();
        expect(schemaSpy.mock.calls[0][1].test).toBe('confirmed');

        validateAdaptorCalls(adaptorSpies);
      });
    });
  },
);
