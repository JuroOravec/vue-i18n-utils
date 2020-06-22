import flatten from 'lodash.flatten';
import differenceBy from 'lodash.differenceby';
import { sync as globSync } from 'glob';

import type { IDefinition } from '../../definition/types';
import type { I_I18nUtil } from '../types';
import { LoadedI18nUtil } from '..';
import { UsageItem } from '../../usage';
import { mapUniq } from '../../util/array';
import { validateItems } from './item-processor-helpers';
import {
  definitions as inputDefs,
  patchDefinitionsJY,
  patchDefinitions,
  patchExpectedJY,
  patchDefinitionsV,
  patchExpectedV,
  dropExpectedJY,
  dropDefinitionsJY,
  dropExpectedV,
  dropDefinitionsV,
  dropDefinitions,
  addLocaleExpectedJY,
  addLocaleDefinitionsJY,
  addLocaleDefinitionsV,
  addLocaleExpectedV,
  removeLocaleExpectedJY,
  removeLocaleDefinitionsJY,
  removeLocaleExpectedV,
  removeLocaleDefinitionsV,
  clearLocaleExpectedJY,
  clearLocaleDefinitionsJY,
  clearLocaleExpectedV,
  clearLocaleDefinitionsV,
} from './fixtures/definitions';
import { usageNoMatch, usageMatch, usageMatchSubset } from './fixtures/usage';
import {
  parametrizeInstance,
  validateAdaptorCalls,
  forEachAdaptor,
  Spies,
} from './i18n-util-helpers';
import { conditions as instanceConditions } from './i18n-util-conds';
import { DefinitionLoader } from '../loader';

type DefItem = IDefinition.Item;

parametrizeInstance(
  instanceConditions,
  (name, getInstance, getAdaptorSpies) => {
    let i18nUtil: ReturnType<typeof getInstance>;
    let adaptorSpies: ReturnType<typeof getAdaptorSpies>;

    beforeAll(() => {
      i18nUtil = getInstance();
      adaptorSpies = getAdaptorSpies();
      // TODO Testing i18n adaptor is skipped for now as it behaves like
      // json-yaml, so the effort to have it tested properly is not worth it rn
      adaptorSpies.delete('i18n');
    });

    describe('definitions', () => {
      const globs = ['src/lib/i18n-util/__tests__/fixtures/*.{vue,json}'];
      const paths = flatten(globs.map((p) => globSync(p)));

      test('returns empty on empty array', () => {
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [];
        }

        const definitions =
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.definitions()
            : i18nUtil.definitions([]);
        validateItems(definitions, []);

        validateAdaptorCalls(adaptorSpies);
      });

      test('throws on invalid path', () => {
        if (i18nUtil instanceof LoadedI18nUtil) return;

        const nonpaths = paths.map((p) => p + 'nonsense');
        const action = () => i18nUtil.definitions(nonpaths);
        expect(action).toThrow();
      });

      test('options are passed to adaptors', () => {
        if (i18nUtil instanceof LoadedI18nUtil) return;

        const definitions =
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.definitions()
            : i18nUtil.definitions(paths, { test: 'confirmed' });

        validateItems(definitions, inputDefs);

        const expectedCalls = i18nUtil instanceof LoadedI18nUtil ? 0 : 1;
        validateAdaptorCalls(adaptorSpies, { parser: expectedCalls });

        forEachAdaptor(adaptorSpies, ({ parser }) => {
          expect(parser.mock.calls[0][1]).toBeDefined();
          expect(parser.mock.calls[0][1].test).toBe('confirmed');
        });
      });

      test('returns definitions from analysed files', () => {
        const definitions =
          i18nUtil instanceof LoadedI18nUtil
            ? i18nUtil.definitions()
            : i18nUtil.definitions(paths);

        validateItems(definitions, inputDefs);

        const expectedCalls = i18nUtil instanceof LoadedI18nUtil ? 0 : 1;
        validateAdaptorCalls(adaptorSpies, { parser: expectedCalls });
      });
    });

    describe('usage', () => {
      const globs = ['src/lib/i18n-util/__tests__/fixtures/*.{vue,json}'];
      const paths = flatten(globs.map((p) => globSync(p)));

      test('returns empty on empty array', () => {
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [];
        }

        const usage = i18nUtil.usage([]);
        validateItems(usage, [], UsageItem);
        validateAdaptorCalls(adaptorSpies);
      });

      test('throws on invalid path', () => {
        const nonpaths = paths.map((p) => p + 'nonsense');
        const action = () => i18nUtil.usage(nonpaths);
        expect(action).toThrow();
      });

      test('options are passed to adaptors', () => {
        i18nUtil.usage(paths, { test: 'confirmed' });

        validateAdaptorCalls(adaptorSpies, { usageAnalyzer: 1 });
        forEachAdaptor(adaptorSpies, ({ usageAnalyzer }) => {
          expect(usageAnalyzer.mock.calls[0][1]).toBeDefined();
          expect(usageAnalyzer.mock.calls[0][1].test).toBe('confirmed');
        });
      });

      test('returns definitions from analysed files', () => {
        const usage = i18nUtil.usage(paths);

        validateItems(
          usage,
          [...usageNoMatch, ...usageMatch, ...usageMatchSubset],
          UsageItem,
        );
        validateAdaptorCalls(adaptorSpies, { usageAnalyzer: 1 });
      });
    });

    describe('write', () => {
      type Writers = [jest.SpyInstance, DefItem[]][];
      let writers: Writers;

      beforeAll(() => {
        writers = [
          [
            adaptorSpies.get('json-yaml')!.writer,
            inputDefs.filter((d) => /(?:json|ya?ml)$/.test(d.source)),
          ],
          [
            adaptorSpies.get('vue')!.writer,
            inputDefs.filter((d) => /(?:vue)$/.test(d.source)),
          ],
        ];
      });

      test("doesn't call writers on empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? i18nUtil.write()
          : i18nUtil.write(defs);

        validateAdaptorCalls(adaptorSpies);
      });

      test('calls writers with definitions', () => {
        i18nUtil instanceof LoadedI18nUtil
          ? i18nUtil.write()
          : i18nUtil.write(inputDefs);

        writers.forEach(([writer, defs]) => {
          expect(writer.mock.calls[0][0]).toBeDefined();
          validateItems(writer.mock.calls[0][0], defs);
        });
        validateAdaptorCalls(adaptorSpies, { writer: 1 });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };

        i18nUtil instanceof LoadedI18nUtil
          ? i18nUtil.write(options)
          : i18nUtil.write(inputDefs, options);

        writers.forEach(([writer]) => {
          expect(writer.mock.calls[0][1]).toBeDefined();
          expect(writer.mock.calls[0][1].test).toBe('confirmed');
        });
        validateAdaptorCalls(adaptorSpies, { writer: 1 });
      });
    });

    describe.each([
      [
        'patch',
        (
          i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
          defs: DefItem[],
          ...args: Partial<[any, any]>
        ) => i18nUtil.patch(...args),
      ],
      [
        'patchTo',
        (
          i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
          defs: DefItem[],
          ...args: Partial<[any, any]>
        ) => {
          const loader = i18nUtil.patchTo(...args);
          expect(loader).toBeDefined();
          expect(loader).toBeInstanceOf(DefinitionLoader);
          return loader.loadFromItems(defs);
        },
      ],
    ])('%s', (methodName, method) => {
      type Adaptors = [
        Spies & {
          expected: DefItem[];
          files: string[];
        },
      ][];
      let adaptors: Adaptors;

      beforeAll(() => {
        adaptors = [
          [
            {
              ...adaptorSpies.get('json-yaml')!,
              expected: patchExpectedJY,
              files: mapUniq(patchDefinitionsJY, (i) => i.source),
            },
          ],
          [
            {
              ...adaptorSpies.get('vue')!,
              expected: patchExpectedV,
              files: mapUniq(patchDefinitionsV, (i) => i.source),
            },
          ],
        ];
      });

      test("doesn't call writers nor parsers on empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        validateAdaptorCalls(adaptorSpies);
      });

      test('calls parsers of adaptors that matched files of definitions ', () => {
        const defs = patchDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        adaptors.forEach(([{ parser, files }]) => {
          expect(parser.mock.calls[0][0]).toBeDefined();
          expect(parser.mock.calls[0][0]).toEqual(files);
        });

        validateAdaptorCalls(adaptorSpies, { parser: 1, writer: null });
      });

      test('calls writers of adaptors that matched files of definitions ', () => {
        const defs = patchDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        adaptors.forEach(([{ writer, expected }]) => {
          expect(writer.mock.calls[0][0]).toBeDefined();
          validateItems(writer.mock.calls[0][0], expected);
        });
        validateAdaptorCalls(adaptorSpies, { writer: 1, parser: null });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };
        const defs = patchDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }

        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs, options)
          : method(i18nUtil, defs, defs, options);

        adaptors.forEach(([{ writer, parser }]) => {
          expect(parser.mock.calls[0][1]).toBeDefined();
          expect(parser.mock.calls[0][1].test).toBe('confirmed');
          expect(writer.mock.calls[0][1]).toBeDefined();
          expect(writer.mock.calls[0][1].test).toBe('confirmed');
        });
        validateAdaptorCalls(adaptorSpies, { parser: 1, writer: 1 });
      });
    });

    describe.each([
      [
        'drop',
        (
          i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
          defs: DefItem[],
          ...args: Partial<[any, any]>
        ) => i18nUtil.drop(...args),
      ],
      [
        'dropFrom',
        (
          i18nUtil: I_I18nUtil.I18nUtil | I_I18nUtil.LoadedI18nUtil,
          defs: DefItem[],
          ...args: Partial<[any, any]>
        ) => {
          const loader = i18nUtil.dropFrom(...args);
          expect(loader).toBeDefined();
          expect(loader).toBeInstanceOf(DefinitionLoader);
          return loader.loadFromItems(defs);
        },
      ],
    ])('%s', (methodName, method) => {
      type Adaptors = [
        Spies & {
          name: string;
          expected: DefItem[];
          files: string[];
          removedFiles: string[];
        },
      ][];
      let adaptors: Adaptors;

      beforeAll(() => {
        adaptors = [
          [
            {
              name: 'json-yaml',
              ...adaptorSpies.get('json-yaml')!,
              expected: dropExpectedJY,
              files: mapUniq(dropDefinitionsJY, (i) => i.source),
              removedFiles: mapUniq(dropDefinitionsJY, (i) => i.source),
            },
          ],
          [
            {
              name: 'vue',
              ...adaptorSpies.get('vue')!,
              expected: dropExpectedV,
              files: mapUniq(dropDefinitionsV, (i) => i.source),
              removedFiles: [],
            },
          ],
        ];
      });

      test("doesn't call any adaptor methods on empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        validateAdaptorCalls(adaptorSpies);
      });

      test('calls parsers of adaptors that matched files of definitions ', () => {
        const defs = dropDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        validateAdaptorCalls(adaptorSpies, {
          parser: 1,
          writer: null,
          remover: null,
        });
        adaptors.forEach(([{ parser, files }]) => {
          expect(parser.mock.calls[0][0]).toBeDefined();
          expect(parser.mock.calls[0][0]).toEqual(files);
        });
      });

      test('calls writers of adaptors that matched files of definitions ', () => {
        const defs = dropDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        adaptors.forEach(([{ writer, expected }]) => {
          if (expected.length > 0) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][0]).toBeDefined();
            validateItems(writer.mock.calls[0][0], expected);
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });

      test('calls removers of adaptors that matched files of definitions if dropped items result to no items remaining', () => {
        const defs = dropDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs)
          : method(i18nUtil, defs, defs);

        adaptors.forEach(([{ remover, removedFiles }]) => {
          if (!removedFiles.length) {
            expect(remover).toBeCalledTimes(0);
            return;
          }
          expect(remover).toBeCalledTimes(1);
          expect(remover.mock.calls[0][0]).toBeDefined();
          for (const file of removedFiles) {
            expect(remover.mock.calls[0][0]).toContainEqual(file);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };
        const defs = dropDefinitions;
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }

        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, defs, options)
          : method(i18nUtil, defs, defs, options);

        adaptors.forEach(([{ writer, parser, remover, expected }]) => {
          expect(parser).toBeCalledTimes(1);
          expect(parser.mock.calls[0][1]).toBeDefined();
          expect(parser.mock.calls[0][1].test).toBe('confirmed');

          if (expected.length > 0) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][1]).toBeDefined();
            expect(writer.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(writer).toBeCalledTimes(0);
          }

          if (expected.length === 0) {
            expect(remover).toBeCalledTimes(1);
            expect(remover.mock.calls[0][1]).toBeDefined();
            expect(remover.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(remover).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });
    });

    describe.each([
      [
        'addLocale',
        'fr',
        (i18nUtil: any, ...args: any[]) => i18nUtil.addLocale(...args),
      ],
      [
        'addLocales',
        ['fr'],
        (i18nUtil: any, ...args: any[]) => i18nUtil.addLocales(...args),
      ],
    ])('%s', (desc, locale, method) => {
      type Adaptors = [
        Spies & {
          expected: DefItem[];
          files: string[];
        },
      ][];
      let adaptors: Adaptors;

      beforeAll(() => {
        adaptors = [
          [
            {
              ...adaptorSpies.get('json-yaml')!,
              expected: addLocaleExpectedJY,
              files: mapUniq(addLocaleDefinitionsJY, (i) => i.source),
            },
          ],
          [
            {
              ...adaptorSpies.get('vue')!,
              expected: addLocaleExpectedV,
              files: mapUniq(addLocaleDefinitionsV, (i) => i.source),
            },
          ],
        ];
      });

      test("doesn't call writers nor parsers on empty array and returns empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, defs, locale);

        validateItems(res, []);
        validateAdaptorCalls(adaptorSpies);
      });

      test('calls parsers of adaptors that matched files of added definitions and returns added definitions', () => {
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, [...inputDefs], locale);

        validateItems(res, [
          ...addLocaleDefinitionsJY,
          ...addLocaleDefinitionsV,
        ]);

        adaptors.forEach(([{ parser, files, expected }]) => {
          if (expected.length) {
            expect(parser).toBeCalledTimes(1);
            expect(parser.mock.calls[0][0]).toBeDefined();
            expect(parser.mock.calls[0][0]).toEqual(files);
          } else {
            expect(parser).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });

      test('calls writers of adaptors that matched files of added definitions ', () => {
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale)
          : method(i18nUtil, [...inputDefs], locale);

        adaptors.forEach(([{ writer, expected }]) => {
          if (expected.length) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][0]).toBeDefined();
            validateItems(writer.mock.calls[0][0], expected);
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };

        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale, options)
          : method(i18nUtil, [...inputDefs], locale, options);

        adaptors.forEach(([{ writer, parser, expected }]) => {
          if (expected.length) {
            expect(parser).toBeCalledTimes(1);
            expect(parser.mock.calls[0][1]).toBeDefined();
            expect(parser.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(parser).toBeCalledTimes(0);
          }

          if (expected.length) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][1]).toBeDefined();
            expect(writer.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });
    });

    describe.each([
      [
        'removeLocale',
        'en',
        (i18nUtil: any, ...args: any[]) => i18nUtil.removeLocale(...args),
      ],
      [
        'removeLocales',
        ['en'],
        (i18nUtil: any, ...args: any[]) => i18nUtil.removeLocales(...args),
      ],
    ])('%s', (desc, locale, method) => {
      type Adaptors = [
        Spies & {
          name: string;
          expected: DefItem[];
          removed: DefItem[];
          files: string[];
          removedFiles: string[];
          modifiedFiles: string[];
        },
      ][];
      let adaptors: Adaptors;

      beforeAll(() => {
        adaptors = [
          [
            {
              name: 'json-yaml',
              ...adaptorSpies.get('json-yaml')!,
              expected: removeLocaleExpectedJY,
              removed: removeLocaleDefinitionsJY,
              files: mapUniq(removeLocaleDefinitionsJY, (item) => item.source),
              removedFiles: differenceBy(
                mapUniq(removeLocaleDefinitionsJY, (item) => item.source),
                mapUniq(removeLocaleExpectedJY, (item) => item.source),
              ),
              modifiedFiles: [],
            },
          ],
          [
            {
              name: 'vue',
              ...adaptorSpies.get('vue')!,
              expected: removeLocaleExpectedV,
              removed: removeLocaleDefinitionsV,
              files: mapUniq(removeLocaleDefinitionsV, (item) => item.source),
              removedFiles: differenceBy(
                mapUniq(removeLocaleDefinitionsV, (item) => item.source),
                mapUniq(removeLocaleExpectedV, (item) => item.source),
              ),
              modifiedFiles: [],
            },
          ],
        ];
        adaptors.forEach((adaptorArr) => {
          const adaptor = adaptorArr[0];
          adaptor.modifiedFiles = differenceBy(
            adaptor.files,
            adaptor.removedFiles,
          );
        });
      });

      test("doesn't call any adaptor methods on empty array and returns empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, defs, locale);

        validateItems(res, []);
        validateAdaptorCalls(adaptorSpies);
      });

      test('calls parsers of adaptors that matched files of removed definitions and returns removed definitions', () => {
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, inputDefs, locale);

        validateItems(res, [
          ...removeLocaleDefinitionsJY,
          ...removeLocaleDefinitionsV,
        ]);

        adaptors.forEach(([{ parser, files, removed }]) => {
          if (removed.length) {
            expect(parser).toBeCalledTimes(1);
            expect(parser.mock.calls[0][0]).toBeDefined();
            expect(parser.mock.calls[0][0]).toEqual(files);
          } else {
            expect(parser).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });

      test('calls writers of adaptors that matched files of removed definitions ', () => {
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale)
          : method(i18nUtil, inputDefs, locale);

        adaptors.forEach(([{ writer, expected, modifiedFiles }]) => {
          if (modifiedFiles.length > 0) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][0]).toBeDefined();
            validateItems(writer.mock.calls[0][0], expected);
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });

      test('calls removers of adaptors that matched files of definitions if dropped items result to no items remaining', () => {
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale)
          : method(i18nUtil, inputDefs, locale);

        adaptors.forEach(([{ remover, removedFiles }]) => {
          if (!removedFiles.length) {
            expect(remover).toBeCalledTimes(0);
            return;
          }
          expect(remover).toBeCalledTimes(1);
          expect(remover.mock.calls[0][0]).toBeDefined();
          for (const file of removedFiles) {
            expect(remover.mock.calls[0][0]).toContainEqual(file);
          }
        });
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };

        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale, options)
          : method(i18nUtil, inputDefs, locale, options);

        adaptors.forEach(
          ([
            { writer, parser, remover, removed, modifiedFiles, removedFiles },
          ]) => {
            if (removed.length) {
              expect(parser).toBeCalledTimes(1);
              expect(parser.mock.calls[0][1]).toBeDefined();
              expect(parser.mock.calls[0][1].test).toBe('confirmed');
            } else {
              expect(parser).toBeCalledTimes(0);
            }

            if (modifiedFiles.length) {
              expect(writer).toBeCalledTimes(1);
              expect(writer.mock.calls[0][1]).toBeDefined();
              expect(writer.mock.calls[0][1].test).toBe('confirmed');
            } else {
              expect(writer).toBeCalledTimes(0);
            }

            if (removedFiles.length) {
              expect(remover).toBeCalledTimes(1);
              expect(remover.mock.calls[0][1]).toBeDefined();
              expect(remover.mock.calls[0][1].test).toBe('confirmed');
            } else {
              expect(remover).toBeCalledTimes(0);
            }
          },
        );
        validateAdaptorCalls(adaptorSpies, {
          parser: null,
          writer: null,
          remover: null,
        });
      });
    });

    describe.each([
      [
        'clearLocale',
        'en',
        (i18nUtil: any, ...args: any[]) => i18nUtil.clearLocale(...args),
      ],
      [
        'clearLocales',
        ['en'],
        (i18nUtil: any, ...args: any[]) => i18nUtil.clearLocales(...args),
      ],
    ])('%s', (desc, locale, method) => {
      type Adaptors = [
        Spies & {
          name: string;
          expected: DefItem[];
          cleared: DefItem[];
          files: string[];
        },
      ][];
      let adaptors: Adaptors;

      beforeAll(() => {
        adaptors = [
          [
            {
              ...adaptorSpies.get('json-yaml')!,
              name: 'json-yaml',
              expected: clearLocaleExpectedJY,
              cleared: clearLocaleDefinitionsJY,
              files: mapUniq(clearLocaleDefinitionsJY, (i) => i.source),
            },
          ],
          [
            {
              ...adaptorSpies.get('vue')!,
              name: 'vue',
              expected: clearLocaleExpectedV,
              cleared: clearLocaleDefinitionsV,
              files: mapUniq(clearLocaleDefinitionsV, (i) => i.source),
            },
          ],
        ];
      });

      test("doesn't call any adaptor methods on empty array and returns empty array", () => {
        const defs = [] as DefItem[];
        if (i18nUtil instanceof LoadedI18nUtil) {
          i18nUtil.loaded.items = [...defs];
        }
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, defs, locale);

        validateItems(res, []);
        validateAdaptorCalls(adaptorSpies);
      });

      test('calls parsers of adaptors that matched files of cleared definitions and returns cleared definitions', () => {
        const res =
          i18nUtil instanceof LoadedI18nUtil
            ? method(i18nUtil, locale)
            : method(i18nUtil, inputDefs, locale);

        validateItems(res, [
          ...clearLocaleDefinitionsJY,
          ...clearLocaleDefinitionsV,
        ]);

        adaptors.forEach(([{ parser, files, cleared }]) => {
          if (cleared.length) {
            expect(parser).toBeCalledTimes(1);
            expect(parser.mock.calls[0][0]).toBeDefined();
            expect(parser.mock.calls[0][0]).toEqual(files);
          } else {
            expect(parser).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });

      test('calls writers of adaptors that matched files of cleared definitions', () => {
        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale)
          : method(i18nUtil, inputDefs, locale);

        adaptors.forEach(([{ writer, expected, cleared }]) => {
          if (cleared.length) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][0]).toBeDefined();
            validateItems(writer.mock.calls[0][0], expected);
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });

      test('options are passed to adaptors', () => {
        const options = { test: 'confirmed' };

        i18nUtil instanceof LoadedI18nUtil
          ? method(i18nUtil, locale, options)
          : method(i18nUtil, inputDefs, locale, options);

        adaptors.forEach(([{ writer, parser, cleared, name }]) => {
          if (cleared.length) {
            expect(parser).toBeCalledTimes(1);
            expect(parser.mock.calls[0][1]).toBeDefined();
            expect(parser.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(parser).toBeCalledTimes(0);
          }

          if (cleared.length) {
            expect(writer).toBeCalledTimes(1);
            expect(writer.mock.calls[0][1]).toBeDefined();
            expect(writer.mock.calls[0][1].test).toBe('confirmed');
          } else {
            expect(writer).toBeCalledTimes(0);
          }
        });
        validateAdaptorCalls(adaptorSpies, { parser: null, writer: null });
      });
    });
  },
);
