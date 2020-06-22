import merge from 'lodash.merge';
import yaml from 'js-yaml';

import type { AnyFunc } from '../../../../types';
import { DefinitionItem } from '../../../definition';
import { HTMLContentBlock } from '../content-block-html';
import { DOMContentGroup } from '../content-group-dom';
import { VueAdaptor } from '..';

describe('HTMLContentBlock', () => {
  const domContent = new DOMContentGroup();

  const i18nNode = domContent.dom.window.document.createElement('i18n');
  const divNode = domContent.dom.window.document.createElement('div');
  const textNode = domContent.dom.window.document.createTextNode('some text');
  const commentNode = domContent.dom.window.document.createComment(
    'some comment',
  );

  function newContentBlock(
    opts: Partial<ConstructorParameters<typeof HTMLContentBlock>[0]> = {},
  ) {
    return new HTMLContentBlock({
      node: i18nNode.cloneNode(),
      content: '',
      serializers: VueAdaptor.defaults.serializers,
      ...opts,
    });
  }

  const i18nContentBlock = new HTMLContentBlock({ node: i18nNode });
  const divContentBlock = new HTMLContentBlock({ node: divNode });
  const textContentBlock = new HTMLContentBlock({ node: textNode });
  const commentContentBlock = new HTMLContentBlock({ node: commentNode });

  const emptyContentBlock = newContentBlock();
  const jsonContentBlock = newContentBlock({
    content: '{"doug": "dimmajson"}',
  });
  const yamlContentBlock = newContentBlock({
    content: 'goud: dimmayaml',
  });

  describe('isElement', () => {
    /**
     * Test parameters of [name, expected, block]
     */
    const isElementContentBlocks = [
      ['i18nNode', true, true, i18nContentBlock],
      ['divNode', true, false, divContentBlock],
      ['textNode', false, false, textContentBlock],
      ['commentNode', false, false, commentContentBlock],
    ] as [string, boolean, boolean, HTMLContentBlock][];

    describe.each(isElementContentBlocks)(
      'for %s',
      (name, expectedIsEl, expectedIsI18nEl, contentBlock) => {
        test(`is ${expectedIsEl} for default`, () => {
          expect(contentBlock.isElement()).toBe(expectedIsEl);
        });

        test(`is ${expectedIsI18nEl} for 'i18n'`, () => {
          expect(contentBlock.isElement('i18n')).toBe(expectedIsI18nEl);
        });
      },
    );
  });

  describe('getVirtualContent', () => {
    type VirContentBlockParam = [
      string,
      { json: boolean; yaml: boolean; expected: any },
      HTMLContentBlock,
    ];
    /**
     * Test parameters of [name, expected, contentBlock]
     */
    const getVirtualContentBlocks: VirContentBlockParam[] = [
      [
        'emptyNode',
        { json: true, yaml: true, expected: {} },
        emptyContentBlock,
      ],
      [
        'jsonNode',
        { json: true, yaml: true, expected: { doug: 'dimmajson' } },
        jsonContentBlock,
      ],
      [
        'yamlNode',
        { json: false, yaml: true, expected: { goud: 'dimmayaml' } },
        yamlContentBlock,
      ],
    ];

    test("returns undefined if vContent doesn't exist yet it has no serializers", () => {
      const contentBlock = newContentBlock({ serializers: undefined });
      expect(contentBlock.getVirtualContent()).toBeUndefined();
    });

    test("returns empty object if vContent doesn't exist yet and content is falsy", () => {
      const contentBlock = newContentBlock();
      expect(contentBlock.getVirtualContent()).toEqual({});
    });

    test('returns the same object if vContent is accessed multiple times', () => {
      const contentBlock = newContentBlock();
      const vContent1 = contentBlock.getVirtualContent();
      expect(vContent1).toEqual({});
      vContent1.test = 22;
      const vContent2 = contentBlock.getVirtualContent();
      expect(vContent2).toEqual(vContent1);
    });

    describe.each(getVirtualContentBlocks)(
      'for %s',
      (name, { json, yaml, expected }, contentBlock) => {
        const jsonBeh = json ? 'works' : 'throws';
        const yamlbeh = yaml ? 'works' : 'throws';

        beforeEach(() => {
          contentBlock.virtualContent = undefined;
        });

        test(`${jsonBeh} if contentBlock's 'lang' attr set to 'json'`, () => {
          contentBlock.setAttribute('lang', 'json');
          if (json) {
            expect(contentBlock.getVirtualContent()).toEqual(expected);
          } else {
            expect(() => contentBlock.getVirtualContent()).toThrow();
          }
        });

        test(`${yamlbeh} if contentBlock's 'lang' attr set to 'yaml'`, () => {
          contentBlock.setAttribute('lang', 'yaml');
          if (yaml) {
            expect(contentBlock.getVirtualContent()).toEqual(expected);
          } else {
            expect(() => contentBlock.getVirtualContent()).toThrow();
          }
        });

        test(`'lang' attr defaults to 'json'`, () => {
          contentBlock.removeAttribute('lang');
          if (json) {
            expect(contentBlock.getVirtualContent()).toEqual(expected);
          } else {
            expect(() => contentBlock.getVirtualContent()).toThrow();
          }
        });
      },
    );
  });

  describe('serializeItems', () => {
    const definitions = [
      new DefinitionItem({
        value: 'hello',
        path: ['hello', 'path'],
        locale: 'en',
      }),
      new DefinitionItem({
        value: 'baboon',
        path: ['other', 'path'],
        locale: 'en',
      }),
      new DefinitionItem({
        value: 'bonjour',
        path: ['some', 'path'],
        locale: 'fr',
      }),
    ];
    const definitionsWithConflicts = [
      ...definitions,
      new DefinitionItem({
        value: 'zoomering',
        path: ['hello', 'path'],
        locale: 'en',
      }),
    ];
    const definitionsWithMissing = [
      ...definitions,
      // Default missing value
      new DefinitionItem({ value: null, path: ['foolf'], locale: 'fr' }),
      // Value that we'll use as a custom missing value
      new DefinitionItem({ value: 22, path: ['floof'], locale: 'fr' }),
    ];

    const definitionsObj = {
      en: { hello: { path: 'hello' }, other: { path: 'baboon' } },
      fr: { some: { path: 'bonjour' } },
    };
    const definitionsWithMissingObj = merge({}, definitionsObj, {
      fr: { floof: 22, foolf: null },
    });
    const definitionsWithMissingNoNullObj = merge({}, definitionsObj, {
      fr: { floof: 22 },
    });
    const definitionsWithMissingNo22Obj = merge({}, definitionsObj, {
      fr: { foolf: null },
    });

    const langs = [
      ['json', JSON.stringify],
      ['yaml', yaml.safeDump],
      [undefined, JSON.stringify],
    ] as [string, AnyFunc<any, string>][];
    const locales = [['en'], [undefined]] as ['en' | 'fr' | undefined][];

    test('returns empty object on empty definitions array', () => {
      const contentBlock = newContentBlock();
      const content = contentBlock.serializeItems([]);
      expect(JSON.parse(content)).toEqual({});
    });

    test('throws if multiple items define the same key', () => {
      const contentBlock = newContentBlock();
      expect(() =>
        contentBlock.serializeItems(definitionsWithConflicts),
      ).toThrow();
    });

    describe('missing values', () => {
      test('are not included by defualt', () => {
        const contentBlock = newContentBlock();
        const content = contentBlock.serializeItems(definitionsWithMissing);
        expect(JSON.parse(content)).toEqual(definitionsWithMissingNoNullObj);
      });

      test(`are included if 'includeMissing' is truthy`, () => {
        const contentBlock = newContentBlock();
        const content = contentBlock.serializeItems(definitionsWithMissing, {
          includeMissing: true,
        });
        expect(JSON.parse(content)).toEqual(definitionsWithMissingObj);
      });

      test(`can be specified by 'missingValue'`, () => {
        const contentBlock = newContentBlock();
        const content = contentBlock.serializeItems(definitionsWithMissing, {
          includeMissing: false,
          missingValue: 22,
        });
        expect(JSON.parse(content)).toEqual(definitionsWithMissingNo22Obj);
      });
    });

    describe.each(langs)('with attr lang=%s', (lang, serializer) => {
      test(`returns items serialized to ${lang ?? 'json'}`, () => {
        const contentBlock = newContentBlock({
          attributes: {
            ...(lang ? { lang } : {}),
          },
        });
        const content = contentBlock.serializeItems(definitions);
        const expected = serializer(definitionsObj);
        expect(content).toBe(expected);
      });
    });

    describe.each(locales)('with attr locale=%s', (locale) => {
      const expectedDesc = locale ? 'locale-scoped portion of' : 'all';
      test(`returns ${expectedDesc} data from items`, () => {
        const contentBlock = newContentBlock({
          attributes: {
            ...(locale ? { locale } : {}),
          },
        });
        const content = contentBlock.serializeItems(definitions);
        const expected = locale ? definitionsObj[locale] : definitionsObj;
        expect(JSON.parse(content)).toEqual(expected);
      });
    });
  });
});
