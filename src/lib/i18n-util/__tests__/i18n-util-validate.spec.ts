import { ValidationError } from 'schema-utils';

import type { I_I18nUtil } from '../types';
import { LoadedI18nUtil } from '..';
import { parametrizeInstance, validateAdaptorCalls } from './i18n-util-helpers';
import { conditions as instanceConditions } from './i18n-util-conds';
import {
  conditions as validateConditions,
  ValidateCondData,
} from './i18n-util-validate-conds';
import { DefinitionLoader } from '../loader';

parametrizeInstance(
  instanceConditions,
  (name, getInstance, getAdaptorSpies) => {
    let i18nUtil: ReturnType<typeof getInstance>;
    let adaptorSpies: ReturnType<typeof getAdaptorSpies>;

    beforeAll(() => {
      i18nUtil = getInstance();
      adaptorSpies = getAdaptorSpies();
    });

    const methodConditions: [
      string,
      (
        i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
        cond: ValidateCondData,
        ...args: Partial<[any, any]>
      ) => ReturnType<I_I18nUtil.I18nUtil['validate']>,
    ][] = [
      [
        'validate',
        (i18nUtil, cond, ...args) =>
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.validate(cond.schema, ...(args as any[]))
            : i18nUtil.validate(args[0], cond.schema, ...args.slice(1)),
      ],
      [
        'validateAgainst',
        (i18nUtil, cond, ...args) => {
          const loader = i18nUtil.validateAgainst(...args);
          expect(loader).toBeDefined();
          expect(loader).toBeInstanceOf(DefinitionLoader);
          return loader.loadFromItems(cond.schemaDefinitions);
        },
      ],
    ];

    describe.each(methodConditions)('%s', (methodName, method) => {
      let validateSpy: jest.SpyInstance;

      beforeAll(() => {
        validateSpy = jest.spyOn(i18nUtil.validator, 'validate');
      });

      afterAll(() => {
        if (validateSpy) validateSpy.mockRestore();
      });

      beforeEach(() => {
        if (validateSpy) validateSpy.mockClear();
      });

      describe.each(validateConditions)('%s', (desc, cond) => {
        const { definitions, options, validatee, throws } = cond;

        beforeEach(() => {
          if (i18nUtil instanceof LoadedI18nUtil) {
            i18nUtil.loaded.items = [...definitions];
          }
        });

        test(throws ? 'throws' : 'does not throw', () => {
          const action = () =>
            i18nUtil instanceof LoadedI18nUtil
              ? method(i18nUtil, cond, options)
              : method(i18nUtil, cond, definitions, options);

          throws ? expect(action).toThrowError(ValidationError) : action();

          validateAdaptorCalls(adaptorSpies, {
            parser: null,
            writer: null,
          });

          expect(validateSpy).toBeCalled();
          expect(validateSpy).toBeCalledTimes(1);
          expect(validateSpy.mock.calls[0][0]).toBeDefined();
          expect(validateSpy.mock.calls[0][0]).toEqual(cond.schema);
          expect(validateSpy.mock.calls[0][1]).toEqual(validatee);

          validateAdaptorCalls(adaptorSpies);
        });

        test('options are passed to validator', () => {
          const testOpts = { test: 'confirmed' };

          const action = () =>
            i18nUtil instanceof LoadedI18nUtil
              ? method(i18nUtil, cond, { ...options, ...testOpts })
              : method(i18nUtil, cond, definitions, {
                  ...options,
                  ...testOpts,
                });

          throws ? expect(action).toThrowError(ValidationError) : action();

          expect(validateSpy).toBeCalled();
          expect(validateSpy).toBeCalledTimes(1);
          expect(validateSpy.mock.calls[0][2]).toBeDefined();
          expect(validateSpy.mock.calls[0][2].test).toBe('confirmed');

          validateAdaptorCalls(adaptorSpies);
        });
      });
    });
  },
);
