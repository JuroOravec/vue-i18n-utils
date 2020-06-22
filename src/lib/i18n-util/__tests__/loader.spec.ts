import type { I_I18nUtil } from '../types';
import type { I_Item } from '../../item/types';
import { DefinitionLoader, UsageLoader, LoaderBase } from '../loader';
import {
  definitionConditions,
  LoaderParam,
  usageConditions,
} from './loader-conds';
import { createI18nUtil } from './i18n-util-conds';
import { validateItems } from './item-processor-helpers';
import { I18nUtil } from '..';
import { DefinitionItem } from '../../definition';
import { UsageItem } from '../../usage';

describe('Loader', () => {
  type LoaderCond = [
    string,
    new (...args: any[]) => I_I18nUtil.Loader,
    (keyof I_I18nUtil.Loader)[],
    LoaderParam[],
    new (...args: any[]) => I_Item.Item,
  ];
  const conditions: LoaderCond[] = [
    [
      DefinitionLoader.name,
      DefinitionLoader,
      ['loadFromFiles', 'loadFromItems', 'loadFromObjects'],
      definitionConditions,
      DefinitionItem,
    ],
    [
      UsageLoader.name,
      UsageLoader,
      ['loadFromFiles', 'loadFromItems', 'loadFromObjects'],
      usageConditions,
      UsageItem,
    ],
  ];

  describe.each(conditions)(
    '%s',
    (name, klass, methodNames, conds, itemClass) => {
      let loader: I_I18nUtil.Loader;

      const cb: I_I18nUtil.Loader['callback'] = (items, ctx) => {
        expect(items).toBeDefined();
        expect(items).toBeInstanceOf(Array);
        expect(ctx).toBeDefined();
        expect(ctx).toBeInstanceOf(klass);
        expect(ctx.i18nUtil).toBeDefined();
        expect(ctx.i18nUtil).toBeInstanceOf(I18nUtil);
        return items;
      };
      const cbMock = jest.fn(cb);

      beforeAll(() => {
        const i18nUtil = createI18nUtil();
        loader = new (klass as typeof LoaderBase)({
          i18nUtil: i18nUtil,
          callback: () => ({}),
        }) as any;
      });

      beforeEach(() => {
        cbMock.mockClear();
        loader.callback = cbMock;
      });

      test('initializes', () => {
        new klass();
      });

      describe.each(methodNames.map((name) => [name]))('%s', (method) => {
        const callMethod = (...args: any[]) => (loader as any)[method](...args);

        describe('callback', () => {
          const checkReturnCb = (...args: [any, any]) => {
            cb(...args);
            return 'success';
          };
          const checkReturnCbMock = jest.fn(checkReturnCb);

          beforeEach(() => {
            checkReturnCbMock.mockClear();
            loader.callback = checkReturnCbMock;
          });

          test('calls callback', () => {
            callMethod([]);

            expect(checkReturnCbMock).toBeCalledTimes(1);
            expect(checkReturnCbMock.mock.calls[0]).toHaveLength(2);
          });

          test("returns callback's return value", () => {
            const res = callMethod([]);

            expect(checkReturnCbMock).toBeCalledTimes(1);
            expect(checkReturnCbMock.mock.calls[0]).toHaveLength(2);
            expect(res).toBeDefined();
            expect(res).toBe('success');
          });
        });

        describe.each(conds)(
          '%s',
          (desc, { items, files, objects, throws, options }) => {
            const argMap = {
              loadFromFiles: files,
              loadFromItems: items,
              loadFromObjects: objects,
            } as Record<typeof method, any>;
            const arg = argMap[method];

            const shouldThrow = throws && method !== 'loadFromItems';

            test('loads items (empty)', () => {
              const res = callMethod([], options);
              validateItems(res, [], itemClass);
            });

            if (shouldThrow) {
              test('throws', () => {
                const action = () => callMethod(arg, options);
                expect(action).toThrow();
              });
            }

            if (!shouldThrow && arg !== undefined) {
              test('loads items', () => {
                const res = callMethod(arg, options);
                validateItems(res, items, itemClass);
              });
            }
          },
        );
      });
    },
  );
});
