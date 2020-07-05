import flatten from 'lodash.flatten';

import type { AnyObj } from '../../../../types';
import { DOMContentGroup } from '../content-group-dom';
import { DefinitionItem } from '../../../../lib/definition';
import { VueAdaptor } from '..';
import toParams from '../../../../../test/util/to-params';
import {
  matchByContentConditions,
  positionConditions,
  addTypeConditions,
  conditions,
  strategyConditions,
  Expected,
} from './dom-content-resolve-items-conds';

describe('DOMContent', () => {
  /**
   * Create DOMContent instance with options commonly used in these tests
   */
  function newDOMContent() {
    return new DOMContentGroup({
      serializers: VueAdaptor.defaults.serializers,
    });
  }

  describe('insertElement', () => {
    const domContent = new DOMContentGroup();

    describe('tag', () => {
      test('defaults to "i18n"', () => {
        const blockContent = domContent.insertElement();

        expect(blockContent.node.nodeName).toBe('I18N');
        expect((blockContent.node as Element).outerHTML).toBe('<i18n></i18n>');
      });

      test('can be overriden with "tag" option', () => {
        const blockContent = domContent.insertElement({ tag: 'bingo' });

        expect(blockContent.node.nodeName).toBe('BINGO');
        expect((blockContent.node as Element).outerHTML).toBe(
          '<bingo></bingo>',
        );
      });
    });

    describe('text', () => {
      test('defaults to ""', () => {
        const blockContent = domContent.insertElement();
        expect(blockContent.content).toBe('');
      });

      test('can be overriden with "text" option', () => {
        const blockContent = domContent.insertElement({ text: 'bingo' });
        expect(blockContent.content).toBe('bingo');
      });
    });

    describe('attributes', () => {
      test("doesn't add any attrs by default", () => {
        const blockContent = domContent.insertElement();
        expect(blockContent.attributes).toEqual({});
      });

      test("can be passed with 'attributes' option", () => {
        const attrs = { a: '1', b: 'lol' };
        const blockContent = domContent.insertElement({ attributes: attrs });

        expect(blockContent.attributes).toEqual(attrs);
      });
    });

    describe('position', () => {
      test('appends by default', () => {
        const expectedBlockContent = domContent.insertElement({ tag: 'posa' });
        const lastBlockContent = domContent.blocks[domContent.length - 1];

        expect(lastBlockContent.node.nodeName).toBe('POSA');
        expect(expectedBlockContent).toBe(lastBlockContent);
      });

      test(`appends if 'append'`, () => {
        const expectedBlockContent = domContent.insertElement({
          tag: 'posb',
          position: 'append',
        });
        const lastBlockContent = domContent.blocks[domContent.length - 1];

        expect(lastBlockContent.node.nodeName).toBe('POSB');
        expect(expectedBlockContent).toBe(lastBlockContent);
      });

      test(`prepends if 'prepend'`, () => {
        const expectedBlockContent = domContent.insertElement({
          tag: 'posc',
          position: 'prepend',
        });
        const firstBlockContent = domContent.blocks[0];

        expect(firstBlockContent.node.nodeName).toBe('POSC');
        expect(expectedBlockContent).toBe(firstBlockContent);
      });
    });
  });

  describe('remove', () => {
    test('removes the block from contentBlocks', async () => {
      const domContent = new DOMContentGroup();

      expect(domContent).toHaveLength(0);

      domContent.insertElement();
      const block2 = domContent.insertElement();

      expect(domContent).toHaveLength(2);

      const removed = await domContent.remove(block2);

      expect(domContent).toHaveLength(1);
      expect(removed).toBeDefined();
      expect(domContent.blocks).not.toContain(removed);
    });

    test('removes the block from the dom', async () => {
      const domContent = new DOMContentGroup();
      domContent.insertElement({ text: 'a' });

      expect(domContent.content).not.toContain('<i18n>b</i18n>');

      const block2 = domContent.insertElement({ text: 'b' });

      expect(domContent.content).toContain('<i18n>b</i18n>');

      await domContent.remove(block2);

      expect(domContent.content).not.toContain('<i18n>b</i18n>');
    });
  });

  describe('resolveItems', () => {
    const definitions = [
      new DefinitionItem({
        value: 'hello',
        path: ['hello', 'path'],
        locale: 'en',
        sourceScope: 'locale',
      }),
      new DefinitionItem({
        value: 'baboon',
        path: ['other', 'path'],
        locale: 'en',
        sourceScope: 'general',
      }),
      new DefinitionItem({
        value: 'bonjour',
        path: ['some', 'path'],
        locale: 'fr',
        sourceScope: 'locale',
      }),
    ];

    test('returns an object with matched, to-prepend, and to-append items', async () => {
      const domContent = newDOMContent();
      const res = await domContent.resolveItems([]);

      expect(res).toBeDefined();

      const { matched, prepend, append } = res;

      expect(matched).toBeDefined();
      expect(matched).toBeInstanceOf(Map);

      expect(prepend).toBeDefined();
      expect(prepend).toBeInstanceOf(Map);

      expect(append).toBeDefined();
      expect(append).toBeInstanceOf(Map);
    });

    test('returns empty results on empty array', async () => {
      const domContent = newDOMContent();
      const res = await domContent.resolveItems([]);

      expect(res).toBeDefined();

      const { matched, prepend, append } = res;

      expect(matched.size).toBe(0);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(0);
    });

    test('returns items split among the prepend / append / matched maps', async () => {
      const domContent = newDOMContent();
      domContent.insertElement({ attributes: { locale: 'en' } });
      const { matched, prepend, append } = await domContent.resolveItems(
        definitions,
        {
          matchByContent: false,
          strategy: 'locale',
        },
      );

      expect(matched.size).toBe(1);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(1);

      const matchedItems = flatten([...matched.values()]);
      const appendItems = flatten([...append.values()]);

      expect(matchedItems).toHaveLength(2);
      expect(appendItems).toHaveLength(1);
    });

    test('matched items are indexed by contentBlocks', async () => {
      const domContent = newDOMContent();
      const contentBlock = domContent.insertElement({
        attributes: { locale: 'en' },
      });
      const { matched, prepend, append } = await domContent.resolveItems(
        definitions,
        {
          matchByContent: false,
          strategy: 'locale',
        },
      );

      expect(matched.size).toBe(1);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(1);
      expect(matched.has(contentBlock)).toBe(true);

      const matchedItems = matched.get(contentBlock);

      expect(matchedItems).toHaveLength(2);
      expect(matchedItems!.every((item) => item.locale === 'en'));
    });

    describe.each([['prepend'], ['append']] as const)(
      '%s items are indexed by locales',
      (pos) => {
        test.each(toParams(addTypeConditions))(
          '%s',
          async (desc, { addType, expected }) => {
            const domContent = newDOMContent();
            const { matched, prepend, append } = await domContent.resolveItems(
              definitions,
              {
                addType,
                matchByContent: false,
                strategy: 'locale',
                addPosition: pos,
              },
            );

            const localesCount = expected.length;

            expected.forEach(({ localeKey, itemCount }) => {
              const prependSize = pos === 'prepend' ? localesCount : 0;
              const appendSize = pos === 'append' ? localesCount : 0;

              expect(matched.size).toBe(0);
              expect(prepend.size).toBe(prependSize);
              expect(append.size).toBe(appendSize);

              const mapWithItems = pos === 'prepend' ? prepend : append;

              expect(mapWithItems.has(localeKey)).toBeTruthy();

              const matchedItems = mapWithItems.get(localeKey);

              expect(matchedItems).toHaveLength(itemCount);
            });
          },
        );
      },
    );

    describe('addType', () => {
      test("groups all to-be-pre-/appended items under '*' if 'general'", async () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = await domContent.resolveItems(
          definitions,
          {
            matchByContent: false,
            strategy: 'locale',
            addType: 'general',
          },
        );

        expect(matched.size).toBe(0);
        expect(prepend.size).toBe(0);
        expect(append.size).toBe(1);

        expect(append.has('*')).toBeTruthy();

        const matchedItems = append.get('*');

        expect(matchedItems).toHaveLength(definitions.length);
      });

      test("groups to-be-pre-/appended items by locales if 'locale'", async () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = await domContent.resolveItems(
          definitions,
          {
            matchByContent: false,
            strategy: 'locale',
            addType: 'locale',
          },
        );

        expect(matched.size).toBe(0);
        expect(prepend.size).toBe(0);
        expect(append.size).toBe(2);

        expect(append.has('en')).toBeTruthy();
        expect(append.has('fr')).toBeTruthy();

        const matchedItems = append.get('en');

        expect(matchedItems).toHaveLength(2);
      });

      test("default is the same as 'custom'", async () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = await domContent.resolveItems(
          definitions,
          {
            matchByContent: false,
            strategy: 'locale',
          },
        );

        expect(matched.size).toBe(0);
        expect(prepend.size).toBe(0);
        expect(append.size).toBe(3);

        ['*', 'en', 'fr'].forEach((locale) => {
          expect(append.has(locale)).toBeTruthy();

          const matchedItems = append.get(locale);

          expect(matchedItems).toHaveLength(1);
        });
      });
    });

    describe('position', () => {
      test.each(toParams(positionConditions))(
        '%s',
        async (desc, { addPosition, expectedAs }) => {
          const domContent = newDOMContent();
          const { matched, prepend, append } = await domContent.resolveItems(
            definitions,
            {
              addPosition,
              matchByContent: false,
              strategy: 'locale',
              addType: 'locale',
            },
          );

          const prependSize = expectedAs === 'prepend' ? 2 : 0;
          const appendSize = expectedAs === 'append' ? 2 : 0;

          expect(matched.size).toBe(0);
          expect(prepend.size).toBe(prependSize);
          expect(append.size).toBe(appendSize);

          const mapWithItems = expectedAs === 'prepend' ? prepend : append;

          expect(mapWithItems.has('fr')).toBe(true);
          expect(mapWithItems.has('en')).toBe(true);

          const matchedItems = mapWithItems.get('en');

          expect(matchedItems).toHaveLength(2);
        },
      );
    });

    async function testCondition(
      options: AnyObj,
      domContent: DOMContentGroup,
      expected: Expected,
    ) {
      const { matched, prepend, append } = await domContent.resolveItems(
        definitions,
        options,
      );

      const expectedBlocks = expected.matched.map((item) => ({
        ...item,
        block: domContent.blocks[item.index],
      }));

      expect(matched.size).toBe(expectedBlocks.length);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(
        expected.unmatched ?? (expectedBlocks.length ? 1 : 2),
      );

      for (const { block, count } of expectedBlocks) {
        const hasLength = Boolean(expectedBlocks.length);
        expect(matched.has(block)).toBe(hasLength);

        if (expectedBlocks.length) {
          const matchedItems = matched.get(block);
          expect(matchedItems).toHaveLength(count);
        }
      }
    }

    describe('matchByContent', () => {
      describe.each(toParams(matchByContentConditions))(
        'set to [%s]',
        (matchByContentDesc, { matchByContent, keyExpected }) => {
          const opts = {
            ...(matchByContent !== undefined ? { matchByContent } : {}),
            strategy: 'locale',
            addPosition: 'append',
            addType: 'locale',
          };

          describe.each(toParams(conditions))(
            'using DOMContent containing blocks [%s]',
            (condDesc, { instances, matchByContent }) => {
              const { expected, desc } = matchByContent[keyExpected];

              const scopeConditions: {
                description: string;
                contentGroup: DOMContentGroup;
                expected: Expected;
              }[] = [
                {
                  description: 'locale-scoped',
                  contentGroup: instances.locale,
                  expected: expected.locale,
                },
                {
                  description: 'general',
                  contentGroup: instances.general,
                  expected: expected.general,
                },
                {
                  description: 'mixed',
                  contentGroup: instances.mixed,
                  expected: expected.mixed,
                },
              ];

              test.each(toParams(scopeConditions))(
                `should match [${desc}] block against [%s] content blocks`,
                async (comment, { contentGroup, expected }) => {
                  await testCondition(opts, contentGroup, expected);
                },
              );
            },
          );
        },
      );
    });

    describe('strategy', () => {
      describe.each(toParams(strategyConditions))(
        'set to [%s]',
        (desc, { strategy, keyExpected }) => {
          const opts = {
            ...(strategy !== undefined ? { strategy } : {}),
            matchByContent: true,
            addPosition: 'append',
            addType: 'locale',
          };

          describe.each(toParams(conditions))(
            'using DOMContent containing blocks [%s]',
            (condDesc, { instances, strategy }) => {
              const { expected, desc } = strategy[keyExpected];

              const scopeConditions: {
                description: string;
                contentGroup: DOMContentGroup;
                expected: Expected;
              }[] = [
                {
                  description: 'locale-scoped',
                  contentGroup: instances.locale,
                  expected: expected.locale,
                },
                {
                  description: 'general',
                  contentGroup: instances.general,
                  expected: expected.general,
                },
                {
                  description: 'mixed',
                  contentGroup: instances.mixed,
                  expected: expected.mixed,
                },
              ];

              test.each(toParams(scopeConditions))(
                `should match [${desc}] block against [%s] content blocks`,
                async (comment, { contentGroup, expected }) => {
                  await testCondition(opts, contentGroup, expected);
                },
              );
            },
          );
        },
      );
    });
  });
});
