import flatten from 'lodash.flatten';

import type { AnyObj } from '../../../../types';
import { DOMContentGroup } from '../content-group-dom';
import { DefinitionItem } from '../../../../lib/definition';
import { VueAdaptor } from '..';

export type IResolveItemsOptions = {
  strategy?: 'add' | 'locale' | 'localeStrict' | 'general';
  matchByContent?: boolean | 'strict';
  addPosition?: 'prepend' | 'append';
  addType?: 'general' | 'locale' | 'custom';
};

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
    test('removes the block from contentBlocks', () => {
      const domContent = new DOMContentGroup();
      expect(domContent.length).toBe(0);
      domContent.insertElement();
      const block2 = domContent.insertElement();
      expect(domContent.length).toBe(2);
      const removed = domContent.remove(block2);
      expect(domContent.length).toBe(1);
      expect(removed).toBeDefined();
      expect(domContent.blocks.includes(removed!)).toBe(false);
    });

    test('removes the block from the dom', () => {
      const domContent = new DOMContentGroup();
      domContent.insertElement({ text: 'a' });
      expect(domContent.content).not.toContain('<i18n>b</i18n>');
      const block2 = domContent.insertElement({ text: 'b' });
      expect(domContent.content).toContain('<i18n>b</i18n>');
      domContent.remove(block2);
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

    test('returns an object with matched, to-prepend, and to-append items', () => {
      const domContent = newDOMContent();
      const res = domContent.resolveItems([]);
      expect(res).toBeDefined();
      const { matched, prepend, append } = res;
      expect(matched).toBeDefined();
      expect(matched instanceof Map).toBe(true);
      expect(prepend).toBeDefined();
      expect(prepend instanceof Map).toBe(true);
      expect(append).toBeDefined();
      expect(append instanceof Map).toBe(true);
    });

    test('returns empty results on empty array', () => {
      const domContent = newDOMContent();
      const res = domContent.resolveItems([]);
      expect(res).toBeDefined();
      const { matched, prepend, append } = res;
      expect(matched.size).toBe(0);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(0);
    });

    test('returns items split among the prepend / append / matched maps', () => {
      const domContent = newDOMContent();
      domContent.insertElement({ attributes: { locale: 'en' } });
      const { matched, prepend, append } = domContent.resolveItems(
        definitions,
        {
          matchByContent: false,
          strategy: 'locale',
        },
      );
      expect(matched.size).toBe(1);
      expect(prepend.size).toBe(0);
      expect(append.size).toBe(1);

      const matchedItems = flatten(Array.from(matched.values()));
      const appendItems = flatten(Array.from(append.values()));
      expect(matchedItems).toHaveLength(2);
      expect(appendItems).toHaveLength(1);
    });

    test('matched items are indexed by contentBlocks', () => {
      const domContent = newDOMContent();
      const contentBlock = domContent.insertElement({
        attributes: { locale: 'en' },
      });
      const { matched, prepend, append } = domContent.resolveItems(
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

    describe.each([['prepend'], ['append']] as ['prepend' | 'append'][])(
      '%s items are indexed by locales',
      (pos) => {
        const params: [
          string,
          'locale' | 'general' | 'custom',
          { localeKey: string; itemsCount: number }[],
        ][] = [
          [
            'locale code if locale-scoped',
            'locale',
            [
              { localeKey: 'en', itemsCount: 2 },
              { localeKey: 'fr', itemsCount: 1 },
            ],
          ],
          [
            "per items' sourceScope if custom",
            'custom',
            [
              { localeKey: 'en', itemsCount: 1 },
              { localeKey: '*', itemsCount: 1 },
              { localeKey: 'fr', itemsCount: 1 },
            ],
          ],
          [
            "'*' if multiple locales combined",
            'general',
            [{ localeKey: '*', itemsCount: 3 }],
          ],
        ];

        test.each(params)('%s', (desc, addType, expects) => {
          const domContent = newDOMContent();
          const { matched, prepend, append } = domContent.resolveItems(
            definitions,
            {
              matchByContent: false,
              strategy: 'locale',
              addPosition: pos,
              addType,
            },
          );

          const localesCount = expects.length;
          expects.forEach(({ localeKey, itemsCount }) => {
            const prependSize = pos === 'prepend' ? localesCount : 0;
            const appendSize = pos === 'append' ? localesCount : 0;

            expect(matched.size).toBe(0);
            expect(prepend.size).toBe(prependSize);
            expect(append.size).toBe(appendSize);

            const mapWithItems = pos === 'prepend' ? prepend : append;
            expect(mapWithItems.has(localeKey)).toBe(true);
            const matchedItems = mapWithItems.get(localeKey);
            expect(matchedItems).toHaveLength(itemsCount);
          });
        });
      },
    );

    describe('addType', () => {
      test("groups all to-be-pre-/appended items under '*' if 'general'", () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = domContent.resolveItems(
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

        expect(append.has('*')).toBe(true);
        const matchedItems = append.get('*');
        expect(matchedItems).toHaveLength(definitions.length);
      });

      test("groups to-be-pre-/appended items by locales if 'locale'", () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = domContent.resolveItems(
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

        expect(append.has('en')).toBe(true);
        expect(append.has('fr')).toBe(true);
        const matchedItems = append.get('en');
        expect(matchedItems).toHaveLength(2);
      });

      test("default is the same as 'custom'", () => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = domContent.resolveItems(
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
          expect(append.has(locale)).toBe(true);
          const matchedItems = append.get(locale);
          expect(matchedItems).toHaveLength(1);
        });
      });
    });

    describe('position', () => {
      test.each([
        ['prepend', 'prepend'] as ['prepend', 'prepend'],
        ['append', 'append'] as ['append', 'append'],
        ['append', undefined] as ['append', undefined],
      ])("puts unmatched items to '%s' category if '%s'", (target, posArg) => {
        const domContent = newDOMContent();
        const { matched, prepend, append } = domContent.resolveItems(
          definitions,
          {
            matchByContent: false,
            strategy: 'locale',
            addPosition: posArg,
            addType: 'locale',
          },
        );

        const prependSize = target === 'prepend' ? 2 : 0;
        const appendSize = target === 'append' ? 2 : 0;

        expect(matched.size).toBe(0);
        expect(prepend.size).toBe(prependSize);
        expect(append.size).toBe(appendSize);

        const mapWithItems = target === 'prepend' ? prepend : append;
        expect(mapWithItems.has('fr')).toBe(true);
        expect(mapWithItems.has('en')).toBe(true);

        const matchedItems = mapWithItems.get('en');
        expect(matchedItems).toHaveLength(2);
      });
    });

    type ExpectedItemEntry = {
      index: number;
      count: number;
    };
    type ExpectedItem = {
      [key in 'locale' | 'general' | 'mixed']: {
        matched: ExpectedItemEntry[];
        unmatched?: number;
      };
    };
    type CondItem = {
      /**
       * Description of the expected result
       */
      desc: string;
      /**
       * Group of indices of expected ContentBlock of
       * DOMContent.contentBlocks that are expected to be matched in
       * particular cases.
       */
      expected: ExpectedItem;
    };
    type Conditions = [
      /**
       * Test case condition description
       */
      string,
      /**
       * DOMContent instances
       */
      { [key in 'locale' | 'general' | 'mixed']: DOMContentGroup },
      {
        /**
         * Info on expected results for varying `matchByContent` option
         */
        matchByContent: { [key in 'false' | 'true' | 'strict']: CondItem };
        /**
         * Info on expected results for varying `strategy` option
         */
        strategy: {
          [key in 'locale' | 'localeStrict' | 'general' | 'add']: CondItem;
        };
      },
    ][];

    const insertElements = {
      ls: {
        noMatch: {
          attributes: { locale: 'bz' },
          text: '{"bada": "bing"}',
        },
        noPathMatch: {
          attributes: { locale: 'en' },
          text: '{"bada": "bing"}',
        },
        match: {
          attributes: { locale: 'en' },
          text: '{"hello": {"path": ""}}',
        },
        matchDiffLocale: {
          attributes: { locale: 'de' },
          text: '{"hello": {"path": ""}}',
        },
      },
      g: {
        noMatch: {
          text: '{"bz": {"bada": "bing"}}',
        },
        noPathMatch: {
          text: '{"en": {"bada": "bing"}}',
        },
        match: {
          text: '{"en": {"hello": {"path": ""}}}',
        },
        matchDiffLocale: {
          text: '{"bz": {"hello": {"path": ""}}}',
        },
      },
    };

    /**
     * No content blocks
     */
    const empty = newDOMContent();

    /**
     * Locale-scoped content blocks that don't match neither by locale nor
     * by path
     */
    const LSNoMatch = newDOMContent();
    LSNoMatch.insertElement(insertElements.ls.noMatch);

    /**
     * Locale-scoped content blocks that match by locale but not by path
     */
    const LSNoPathMatch = newDOMContent();
    LSNoPathMatch.insertElement(insertElements.ls.noPathMatch);

    /**
     * Locale-scoped content blocks that match by locale and path
     */
    const LSMatchSameLocale = newDOMContent();
    LSMatchSameLocale.insertElement(insertElements.ls.match);

    /**
     * Locale-scoped content blocks that match by path but not by locale
     */
    const LSMatchDiffLocale = newDOMContent();
    LSMatchDiffLocale.insertElement(insertElements.ls.matchDiffLocale);

    /**
     * Locale-scoped content blocks where path matches in both own and
     * other locales
     */
    const LSMatchSameAndDiffLocale = newDOMContent();
    LSMatchSameAndDiffLocale.insertElement(insertElements.ls.matchDiffLocale);
    LSMatchSameAndDiffLocale.insertElement(insertElements.ls.match);

    /**
     * Multiple locale-scoped content blocks that match by path.
     *
     * Normally this should not happen as this indicates duplicate
     * definitions, but it's good to test it.
     */
    const LSMatchMultiple = newDOMContent();
    LSMatchMultiple.insertElement(insertElements.ls.match);
    LSMatchMultiple.insertElement(insertElements.ls.match);

    /**
     * Locale-scoped content blocks where path matches in both own and
     * other locales, and some blocks don't match anything
     */
    const LSMixed = newDOMContent();
    LSMixed.insertElement(insertElements.ls.noMatch);
    LSMixed.insertElement(insertElements.ls.matchDiffLocale);
    LSMixed.insertElement(insertElements.ls.noPathMatch);
    LSMixed.insertElement(insertElements.ls.match);

    /**
     * General content blocks that don't match by path
     */
    const GNoMatch = newDOMContent();
    GNoMatch.insertElement(insertElements.g.noMatch);

    /**
     * General content blocks that match by locale but not by path
     */
    const GNoPathMatch = newDOMContent();
    GNoPathMatch.insertElement(insertElements.g.noPathMatch);

    /**
     * General content block that match by path and locale
     */
    const GMatchSameLocale = newDOMContent();
    GMatchSameLocale.insertElement(insertElements.g.match);

    /**
     * General content blocks that match by path but not by locale
     */
    const GMatchDiffLocale = newDOMContent();
    GMatchDiffLocale.insertElement(insertElements.g.matchDiffLocale);

    /**
     * General content blocks where path matches in both own and other
     * locales
     */
    const GMatchSameAndDiffLocale = newDOMContent();
    GMatchSameAndDiffLocale.insertElement(insertElements.g.matchDiffLocale);
    GMatchSameAndDiffLocale.insertElement(insertElements.g.match);

    /**
     * Multiple general content blocks that match by path
     */
    const GMatchMultiple = newDOMContent();
    GMatchMultiple.insertElement(insertElements.g.match);
    GMatchMultiple.insertElement(insertElements.g.match);

    /**
     * General content blocks where path matches in some blocks but doesn't
     * in other
     *
     * Normally this should not happen as this indicates duplicate
     * definitions, but it's good to test it.
     */
    const GMixed = newDOMContent();
    GMixed.insertElement(insertElements.g.noMatch);
    GMixed.insertElement(insertElements.g.matchDiffLocale);
    GMixed.insertElement(insertElements.g.noPathMatch);
    GMixed.insertElement(insertElements.g.match);

    /**
     * Mixed general and locale-scoped content blocks don't match by
     * neither path nor locale
     */
    const MNoMatch = newDOMContent();
    MNoMatch.insertElement(insertElements.g.noMatch);
    MNoMatch.insertElement(insertElements.ls.noMatch);

    /**
     * Mixed general and locale-scoped content blocks that match by locale
     * but not by path
     */
    const MNoPathMatch = newDOMContent();
    MNoPathMatch.insertElement(insertElements.g.noPathMatch);
    MNoPathMatch.insertElement(insertElements.ls.noPathMatch);

    /**
     * Mixed general and locale-scoped content blocks that match by locale
     * and path
     */
    const MMatchSameLocale = newDOMContent();
    MMatchSameLocale.insertElement(insertElements.g.match);
    MMatchSameLocale.insertElement(insertElements.ls.match);

    /**
     * Mixed general and locale-scoped content blocks that match by path
     * but not by locale
     */
    const MMatchDiffLocale = newDOMContent();
    MMatchDiffLocale.insertElement(insertElements.g.matchDiffLocale);
    MMatchDiffLocale.insertElement(insertElements.ls.matchDiffLocale);

    /**
     * Mixed general and locale-scoped content blocks where path matches in
     * both own and other locales
     */
    const MMatchSameAndDiffLocale = newDOMContent();
    MMatchSameAndDiffLocale.insertElement(insertElements.g.matchDiffLocale);
    MMatchSameAndDiffLocale.insertElement(insertElements.g.match);
    MMatchSameAndDiffLocale.insertElement(insertElements.ls.matchDiffLocale);
    MMatchSameAndDiffLocale.insertElement(insertElements.ls.match);

    /**
     * Mixed general and locale-scoped content blocks that match by path.
     *
     * Normally this should not happen as this indicates duplicate
     * definitions, but it's good to test it.
     */
    const MMatchMultiple = newDOMContent();
    MMatchMultiple.insertElement(insertElements.g.match);
    MMatchMultiple.insertElement(insertElements.g.match);
    MMatchMultiple.insertElement(insertElements.ls.match);
    MMatchMultiple.insertElement(insertElements.ls.match);

    /**
     * Mixed general and locale-scoped content blocks where path matches in
     * both own and
     * other locales, and some blocks don't match anything
     */
    const MMixed = newDOMContent();
    MMixed.insertElement(insertElements.g.noMatch);
    MMixed.insertElement(insertElements.g.matchDiffLocale);
    MMixed.insertElement(insertElements.g.noPathMatch);
    MMixed.insertElement(insertElements.g.match);
    MMixed.insertElement(insertElements.ls.noMatch);
    MMixed.insertElement(insertElements.ls.matchDiffLocale);
    MMixed.insertElement(insertElements.ls.noPathMatch);
    MMixed.insertElement(insertElements.ls.match);

    const conditions: Conditions = [
      [
        '(empty)',
        {
          locale: empty,
          general: empty,
          mixed: empty,
        },
        {
          matchByContent: {
            strict: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
            true: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
            false: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
          },
          strategy: {
            locale: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
            localeStrict: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
            general: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
            add: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with no common path nor locale',
        {
          locale: LSNoMatch,
          general: GNoMatch,
          mixed: MNoMatch,
        },
        {
          matchByContent: {
            strict: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale and path, so none
                // should match.
                locale: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                general: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                mixed: { matched: [] },
              },
            },
            true: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both locale and general blocks present, but locale block
                // doesn't match by locale, so both 'en' and 'fr' items
                // should be matched to general after failing to find matching
                // path / locale
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            false: {
              desc: 'general',
              expected: {
                locale: { matched: [] },
                // only general block present, so both 'en' and 'fr' items
                // should be appended
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // the locale block has non-matching locale, so all items go to
                // general block
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
          },
          strategy: {
            locale: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both locale and general blocks present, but locale block
                // doesn't match by locale, so both 'en' and 'fr' items
                // should be matched to general after failing to find matching
                // path / locale
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            localeStrict: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // only general block present, but general blocks are skipped,
                // so no match
                general: { matched: [] },
                // both locale and general blocks present, but locale block
                // doesn't match by locale, and general blocks are ignored, so
                // both 'en' and 'fr' items
                // be appended
                mixed: { matched: [] },
              },
            },
            general: {
              desc: 'no',
              expected: {
                // Locale blocks should be skipped (and there are none anyway)
                // So append all
                locale: { matched: [] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both locale and general blocks present, but locale blocks
                // are skipped (and don't match by locale anyway), so both
                // 'en' and 'fr' items should be matched to general
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            add: {
              desc: 'no',
              expected: {
                locale: { matched: [] },
                general: { matched: [] },
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with no common path but matching locale',
        {
          locale: LSNoPathMatch,
          general: GNoPathMatch,
          mixed: MNoPathMatch,
        },
        {
          matchByContent: {
            strict: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale and path, so none
                // should match.
                locale: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                general: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                mixed: { matched: [] },
              },
            },
            true: {
              desc: 'first same-locale (if none found then first general',
              expected: {
                // 'en' block exists, so 'en' items should match locale after
                // failing to match by path, while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist. 'en' items should
                // match 'en' as first block after failing to find 'en' block
                // by path. 'fr' matches general block after failing to find
                // a locale block
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
            false: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // 'en' block exists, so 'en' items should matched,
                // while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find locale block
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist. 'en' items should
                // match 'en' as first block after failing to find 'en' block.
                // 'fr' matches general block after failing to find a locale
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
          },
          strategy: {
            locale: {
              desc: 'first same-locale (if none found then first general',
              expected: {
                // 'en' block exists, so 'en' items should match locale after
                // failing to match by path, while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist. 'en' items should
                // match 'en' as first block after failing to find 'en' block
                // by path. 'fr' matches general block after failing to find
                // a locale block
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
            localeStrict: {
              desc: 'no',
              expected: {
                // 'en' block exists, so 'en' items should match locale after
                // failing to match by path, while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // general blocks are skipped, so no match.
                general: { matched: [] },
                // both 'en' and general blocks exist. 'en' items should
                // match 'en' as first block after failing to find 'en' block
                // by path. general blocks are skipped, so 'fr' are appended.
                mixed: {
                  matched: [{ index: 1, count: 2 }],
                },
              },
            },
            general: {
              desc: 'no',
              expected: {
                // locale blocks are skipped, so no match.
                locale: { matched: [] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find matching
                // path / locale
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist, but general blocks are
                // skipped, so all items match a general block.
                mixed: {
                  matched: [{ index: 0, count: 3 }],
                  unmatched: 0,
                },
              },
            },
            add: {
              desc: 'no',
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with common path and matching locale',
        {
          locale: LSMatchSameLocale,
          general: GMatchSameLocale,
          mixed: MMatchSameLocale,
        },
        {
          matchByContent: {
            strict: {
              desc:
                'first same-locale w/ matching path, else general /w matching path, else nothing',
              expected: {
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                locale: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                general: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                mixed: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
              },
            },
            true: {
              desc:
                'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block. Everything else should be
                // appended.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path.
                // 'fr' item should match a general block after failing to
                // match by locale and path.
                mixed: {
                  matched: [
                    { index: 1, count: 2 },
                    { index: 0, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            false: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // 'en' block exists, so 'en' items should matched,
                // while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find locale block
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist, so 'en' items should
                // match 'en' block while 'fr' matches general block,
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
          },
          strategy: {
            locale: {
              desc:
                'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block. Everything else should be
                // appended.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path.
                // 'fr' item should match a general block after failing to
                // match by locale and path.
                mixed: {
                  matched: [
                    { index: 1, count: 2 },
                    { index: 0, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            localeStrict: {
              desc: 'first same-locale (if none found then nothing)',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // general blocks are skipped
                general: { matched: [] },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path.
                // 'fr' item is appended after failing to match locale block by
                // locale and path, and since general blocks are skipped
                mixed: {
                  matched: [{ index: 1, count: 2 }],
                },
              },
            },
            general: {
              desc: 'first general (if none found then nothing)',
              expected: {
                // locale blocks are skipped
                locale: { matched: [] },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block. Everything else should be
                // appended.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item would match 'en' on the basis of locale & path, but
                // locale blocks are skipped.
                // So all items should match a general block instead
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            add: {
              desc: 'no',
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      // This one should be practically same as before
      [
        'with common path and same locale (multiple)',
        {
          locale: LSMatchMultiple,
          general: GMatchMultiple,
          mixed: MMatchMultiple,
        },
        {
          matchByContent: {
            strict: {
              desc:
                'first same-locale w/ matching path, else general /w matching path, else nothing',
              expected: {
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                locale: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                general: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
                // Only one of the 2 'en' items should match, everything else
                // should be appended
                mixed: { matched: [{ index: 2, count: 1 }], unmatched: 2 },
              },
            },
            true: {
              desc:
                'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block. Everything else should be
                // appended.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path.
                // 'fr' item should match a general block after failing to
                // match by locale and path.
                mixed: {
                  matched: [
                    { index: 2, count: 2 },
                    { index: 0, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            false: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // 'en' block exists, so 'en' items should matched,
                // while 'fr' items should be appended
                locale: { matched: [{ index: 0, count: 2 }] },
                // only general block present, so both 'en' and 'fr' items
                // should be matched to it after failing to find locale block
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // both 'en' and general blocks exist, so 'en' items should
                // match 'en' block while 'fr' matches general block,
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 2, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
          },
          strategy: {
            locale: {
              desc:
                'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path.
                // 'fr' item should match a general block after failing to
                // match by locale and path.
                mixed: {
                  matched: [
                    { index: 2, count: 2 },
                    { index: 0, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            localeStrict: {
              desc: 'first same-locale (if none found then nothing)',
              expected: {
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
                // general blocks are skipped
                general: { matched: [] },
                // One item should match 'en' on the basis of locale & path.
                // Other should match the same block on basis of locale after
                // failing to match by path. Everything else should be appended
                mixed: {
                  matched: [{ index: 2, count: 2 }],
                },
              },
            },
            general: {
              desc: 'first general (if none found then nothing)',
              expected: {
                // locale blocks are skipped
                locale: { matched: [] },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One item would match 'en' on the basis of locale & path, and
                // other should match the same block on basis of locale after
                // failing to match by path. But locale blocks are skipped, so
                // all is assigned to general block
                mixed: {
                  matched: [{ index: 0, count: 3 }],
                  unmatched: 0,
                },
              },
            },
            add: {
              desc: 'no',
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with common path but different locale',
        {
          locale: LSMatchDiffLocale,
          general: GMatchDiffLocale,
          mixed: MMatchDiffLocale,
        },
        {
          matchByContent: {
            strict: {
              desc: 'no',
              expected: {
                // There are no blocks with matching locale and path, so none
                // should match.
                locale: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                general: { matched: [] },
                // There are no blocks with matching locale and path, so none
                // should match.
                mixed: { matched: [] },
              },
            },
            true: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One 'en' item should match general block on the basis of
                // path after failing to match same-locale+same-path and
                // same-locale blocks. Other 'en' and 'fr' items should match
                // the same block after also failing to match by locale and
                // path, and so are being assigned to first general block.
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            false: {
              desc: 'first general',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // There are no blocks with matching locale, so first general
                // is matched instead.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // There are no blocks with matching locale, so first general
                // is matched instead.
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
          },
          strategy: {
            locale: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One 'en' item should match general block on the basis of
                // path after failing to match same-locale+same-path and
                // same-locale blocks. Other 'en' and 'fr' items should match
                // the same block after also failing to match by locale and
                // path, and so are being assigned to first general block.
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            localeStrict: {
              desc: 'first same-locale (if none found then nothing)',
              expected: {
                // There are no blocks with matching locale, so none should
                // match.
                locale: { matched: [] },
                // general blocks are skipped
                general: { matched: [] },
                // There are no blocks with matching locale, so none should
                // match, and general blocks are skipped
                mixed: { matched: [] },
              },
            },
            general: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // Locale blocks are skipped
                locale: { matched: [] },
                // One 'en' item should match on the basis of path after
                // failing to match same-locale+same-path and same-locale
                // blocks. Other 'en' and 'fr' items should match the same
                // block after also failing to match by path, and so are being
                // assigned to first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // One 'en' item should match general block on the basis of
                // path after failing to match same-locale+same-path and
                // same-locale blocks. Other 'en' and 'fr' items should match
                // the same block after also failing to match by locale and
                // path, and so are being assigned to first general block.
                mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
              },
            },
            add: {
              desc: 'no',
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with common path and both same and different locale',
        {
          locale: LSMatchSameAndDiffLocale,
          general: GMatchSameAndDiffLocale,
          mixed: MMatchSameAndDiffLocale,
        },
        {
          matchByContent: {
            strict: {
              desc:
                'first same-locale & same-path (if none found then nothing)',
              expected: {
                locale: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
                general: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
                mixed: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
              },
            },
            true: {
              desc:
                'first same-locale & same-path else same-locale, else first same-path general else first general',
              expected: {
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // There are no general nor 'fr' blocks, so 'fr' items should
                // be appended.
                locale: { matched: [{ index: 1, count: 2 }] },
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of general block containing the same locale after failing
                // to match same-locale+same-path.
                // Since there are no general blocks that contain 'fr' locale,
                // those items should match the first general block.
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // 'fr' items should match the first general block.
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 3, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
            false: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // 'en' items match first 'en' locale block. 'fr' items are
                // appended.
                locale: { matched: [{ index: 1, count: 2 }] },
                // There are no locale blocks, and contents are not analysed,
                // so all items match the first general block.
                general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
                // 'en' items match first 'en' locale block. 'fr' items match
                // the first general block
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 3, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
          },
          strategy: {
            locale: {
              desc:
                'first same-locale & same-path else same-locale, else first same-path general else first general',
              expected: {
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // There are no general nor 'fr' blocks, so 'fr' items should
                // be appended.
                locale: { matched: [{ index: 1, count: 2 }] },
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of general block containing the same locale after failing
                // to match same-locale+same-path.
                // Since there are no general blocks that contain 'fr' locale,
                // those items should match the first general block.
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // 'fr' items should match the first general block.
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 3, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
            localeStrict: {
              desc: 'first same-locale (if none found then nothing)',
              expected: {
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // There are no general nor 'fr' blocks, so 'fr' items should
                // be appended.
                locale: { matched: [{ index: 1, count: 2 }] },
                // general blocks are skipped
                general: { matched: [] },
                // One 'en' item should match locale block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of same-locale after failing to match same-locale+same-path.
                // 'fr' items should be appended.
                mixed: {
                  matched: [{ index: 3, count: 2 }],
                },
              },
            },
            general: {
              desc: 'first general (if none found then nothing)',
              expected: {
                // locale blocks are skipped
                locale: { matched: [] },
                // One 'en' item should match general block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of general block containing the same locale after failing
                // to match same-locale+same-path.
                // Since there are no general blocks that contain 'fr' locale,
                // those items should match the first general block.
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
                // One 'en' item should match general block on the basis of
                // same-locale+same-path. Other 'en' is matched on the basis
                // of containing same locale after failing to match
                // same-locale+same-path.
                // 'fr' items should match the first general block.
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 1, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
            },
            add: {
              desc: 'no',
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
            },
          },
        },
      ],
      [
        'with same or different path and locale (multiple)',
        {
          locale: LSMixed,
          general: GMixed,
          mixed: MMixed,
        },
        {
          matchByContent: {
            strict: {
              desc: 'first same-locale (if none found then nothing)',
              expected: {
                locale: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
                general: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
                mixed: { matched: [{ index: 7, count: 1 }], unmatched: 2 },
              },
            },
            true: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                locale: {
                  matched: [
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                },
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                  unmatched: 0,
                },
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 6, count: 1 },
                    { index: 7, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            false: {
              expected: {
                locale: { matched: [{ index: 2, count: 2 }] },
                general: {
                  matched: [{ index: 0, count: 3 }],
                  unmatched: 0,
                },
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 6, count: 2 },
                  ],
                  unmatched: 0,
                },
              },
              desc: 'first same-locale (if none found then first general)',
            },
          },
          strategy: {
            locale: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                locale: {
                  matched: [
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                },
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                  unmatched: 0,
                },
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 6, count: 1 },
                    { index: 7, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            localeStrict: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                locale: {
                  matched: [
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                },
                // general blocks are skipped
                general: { matched: [] },
                mixed: {
                  matched: [
                    { index: 6, count: 1 },
                    { index: 7, count: 1 },
                  ],
                },
              },
            },
            general: {
              desc: 'first same-locale (if none found then first general)',
              expected: {
                // locale blocks are skipped
                locale: { matched: [] },
                general: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                  unmatched: 0,
                },
                mixed: {
                  matched: [
                    { index: 0, count: 1 },
                    { index: 2, count: 1 },
                    { index: 3, count: 1 },
                  ],
                  unmatched: 0,
                },
              },
            },
            add: {
              expected: {
                // skip all matching
                locale: { matched: [] },
                // skip all matching
                general: { matched: [] },
                // skip all matching
                mixed: { matched: [] },
              },
              desc: 'no',
            },
          },
        },
      ],
    ];

    function testCondition(
      options: AnyObj,
      domContent: DOMContentGroup,
      expected: ExpectedItem[keyof ExpectedItem],
    ) {
      const { matched, prepend, append } = domContent.resolveItems(
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
        expect(matched.has(block)).toBe(Boolean(expectedBlocks.length));
        if (expectedBlocks.length) {
          const matchedItems = matched.get(block);
          expect(matchedItems).toHaveLength(count);
        }
      }
    }

    describe('matchByContent', () => {
      const matchByContentParams: [
        string,
        'false' | 'true' | 'strict',
        true | false | 'strict' | undefined,
      ][] = [
        ['false', 'false', false],
        ['true', 'true', true],
        ['strict', 'strict', 'strict'],
        ['(not set)', 'true', undefined],
      ];

      describe.each(matchByContentParams)(
        'set to [%s]',
        (desc, condKey, matchByContent) => {
          const opts = {
            ...(matchByContent !== undefined ? { matchByContent } : {}),
            strategy: 'locale',
            addPosition: 'append',
            addType: 'locale',
          };
          describe.each(conditions)(
            'using DOMContent containing blocks [%s]',
            (condDesc, instances, expects) => {
              const { expected, desc } = expects.matchByContent[condKey];
              test.each([
                ['locale-scoped', instances.locale, expected.locale],
                ['general', instances.general, expected.general],
                ['mixed', instances.mixed, expected.mixed],
              ])(
                `should match [${desc}] block against [%s] content blocks`,
                (comment, domContent, expected) => {
                  testCondition(opts, domContent, expected);
                },
              );
            },
          );
        },
      );
    });

    describe('strategy', () => {
      const strategyParams: [
        string,
        'locale' | 'localeStrict' | 'general' | 'add',
        'locale' | 'localeStrict' | 'general' | 'add' | undefined,
      ][] = [
        ['locale', 'locale', 'locale'],
        ['localeStrict', 'localeStrict', 'localeStrict'],
        ['general', 'general', 'general'],
        ['add', 'add', 'add'],
        ['(not set)', 'locale', undefined],
      ];

      describe.each(strategyParams)(
        'set to [%s]',
        (desc, condKey, strategy) => {
          const opts = {
            ...(strategy !== undefined ? { strategy } : {}),
            matchByContent: true,
            addPosition: 'append',
            addType: 'locale',
          };

          describe.each(conditions)(
            'using DOMContent containing blocks [%s]',
            (condDesc, instances, expects) => {
              const { expected, desc } = expects.strategy[condKey];

              test.each([
                ['locale-scoped', instances.locale, expected.locale],
                ['general', instances.general, expected.general],
                ['mixed', instances.mixed, expected.mixed],
              ])(
                `should match [${desc}] block against [%s] content blocks`,
                (comment, domContent, expected) => {
                  testCondition(opts, domContent, expected);
                },
              );
            },
          );
        },
      );
    });
  });
});
