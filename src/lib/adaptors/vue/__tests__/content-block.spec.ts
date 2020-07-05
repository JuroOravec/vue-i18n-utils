import merge from 'lodash.merge';
import yaml from 'js-yaml';

import type { AnyFunc } from '../../../../types';
import { DefinitionItem } from '../../../definition';
import { HTMLContentBlock } from '../content-block-html';
import { DOMContentGroup } from '../content-group-dom';
import { VueAdaptor } from '..';
import toParams from '../../../../../test/util/to-params';

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
    const conditions: {
      description: string;
      isElement: boolean;
      isI18nTag: boolean;
      contentBlock: HTMLContentBlock;
    }[] = [
      {
        description: 'i18nNode',
        isElement: true,
        isI18nTag: true,
        contentBlock: i18nContentBlock,
      },
      {
        description: 'divNode',
        isElement: true,
        isI18nTag: false,
        contentBlock: divContentBlock,
      },
      {
        description: 'textNode',
        isElement: false,
        isI18nTag: false,
        contentBlock: textContentBlock,
      },
      {
        description: 'commentNode',
        isElement: false,
        isI18nTag: false,
        contentBlock: commentContentBlock,
      },
    ];

    describe.each(toParams(conditions))(
      'for %s',
      (desc, { isElement, isI18nTag, contentBlock }) => {
        test(`is ${isElement} for default`, () => {
          expect(contentBlock.isElement()).toBe(isElement);
        });

        test(`is ${isI18nTag} for 'i18n'`, () => {
          expect(contentBlock.isElement('i18n')).toBe(isI18nTag);
        });
      },
    );
  });

  describe('getVirtualContent', () => {
    const conditions: {
      description: string;
      json: boolean;
      yaml: boolean;
      expected: any;
      contentBlock: HTMLContentBlock;
    }[] = [
      {
        description: 'emptyNode',
        json: true,
        yaml: true,
        expected: {},
        contentBlock: emptyContentBlock,
      },
      {
        description: 'jsonNode',
        json: true,
        yaml: true,
        expected: { doug: 'dimmajson' },
        contentBlock: jsonContentBlock,
      },
      {
        description: 'yamlNode',
        json: false,
        yaml: true,
        expected: { goud: 'dimmayaml' },
        contentBlock: yamlContentBlock,
      },
    ];

    test("returns undefined if vContent doesn't exist yet it has no serializers", async () => {
      const contentBlock = newContentBlock({ serializers: undefined });
      expect(await contentBlock.getVirtualContent()).toBeUndefined();
    });

    test("returns empty object if vContent doesn't exist yet and content is falsy", async () => {
      const contentBlock = newContentBlock();
      expect(await contentBlock.getVirtualContent()).toEqual({});
    });

    test('returns the same object if vContent is accessed multiple times', async () => {
      const contentBlock = newContentBlock();

      const vContent1 = await contentBlock.getVirtualContent();
      expect(vContent1).toEqual({});

      vContent1.test = 22;

      const vContent2 = await contentBlock.getVirtualContent();
      expect(vContent2).toEqual(vContent1);
    });

    describe.each(toParams(conditions))(
      'for %s',
      (desc, { json, yaml, expected, contentBlock }) => {
        const jsonBeh = json ? 'works' : 'throws';
        const yamlbeh = yaml ? 'works' : 'throws';

        beforeEach(() => {
          contentBlock.virtualContent = undefined;
        });

        test(`${jsonBeh} if contentBlock's 'lang' attr set to 'json'`, async () => {
          contentBlock.setAttribute('lang', 'json');
          json
            ? expect(await contentBlock.getVirtualContent()).toEqual(expected)
            : await expect(() =>
                contentBlock.getVirtualContent(),
              ).rejects.toThrow();
        });

        test(`${yamlbeh} if contentBlock's 'lang' attr set to 'yaml'`, async () => {
          contentBlock.setAttribute('lang', 'yaml');
          yaml
            ? expect(await contentBlock.getVirtualContent()).toEqual(expected)
            : await expect(() =>
                contentBlock.getVirtualContent(),
              ).rejects.toThrow();
        });

        test(`'lang' attr defaults to 'json'`, async () => {
          contentBlock.removeAttribute('lang');
          json
            ? expect(await contentBlock.getVirtualContent()).toEqual(expected)
            : await expect(() =>
                contentBlock.getVirtualContent(),
              ).rejects.toThrow();
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

    const langConditions: {
      description: string;
      lang: string | undefined;
      serializer: AnyFunc<any, string>;
    }[] = [
      { description: 'json', lang: 'json', serializer: JSON.stringify },
      { description: 'yaml', lang: 'yaml', serializer: yaml.safeDump },
      { description: 'undefined', lang: undefined, serializer: JSON.stringify },
    ];

    const localeConditions: {
      description: string;
      locale: keyof typeof definitionsObj | undefined;
    }[] = [
      { description: 'en', locale: 'en' },
      { description: 'undefined', locale: undefined },
    ];

    test('returns empty object on empty definitions array', async () => {
      const contentBlock = newContentBlock();
      const content = await contentBlock.serializeItems([]);

      expect(JSON.parse(content)).toEqual({});
    });

    test('throws if multiple items define the same key', async () => {
      const contentBlock = newContentBlock();

      await expect(async () =>
        contentBlock.serializeItems(definitionsWithConflicts),
      ).rejects.toThrow();
    });

    describe('missing values', () => {
      test('are not included by defualt', async () => {
        const contentBlock = newContentBlock();
        const content = await contentBlock.serializeItems(
          definitionsWithMissing,
        );

        expect(JSON.parse(content)).toEqual(definitionsWithMissingNoNullObj);
      });

      test(`are included if 'includeMissing' is truthy`, async () => {
        const contentBlock = newContentBlock();
        const content = await contentBlock.serializeItems(
          definitionsWithMissing,
          {
            includeMissing: true,
          },
        );

        expect(JSON.parse(content)).toEqual(definitionsWithMissingObj);
      });

      test(`can be specified by 'missingValue'`, async () => {
        const contentBlock = newContentBlock();
        const content = await contentBlock.serializeItems(
          definitionsWithMissing,
          {
            includeMissing: false,
            missingValue: 22,
          },
        );

        expect(JSON.parse(content)).toEqual(definitionsWithMissingNo22Obj);
      });
    });

    describe.each(toParams(langConditions))(
      'with attr lang=%s',
      (desc, { lang, serializer }) => {
        test(`returns items serialized to ${lang ?? 'json'}`, async () => {
          const contentBlock = newContentBlock({
            attributes: {
              ...(lang ? { lang } : {}),
            },
          });

          const content = await contentBlock.serializeItems(definitions);
          const expected = await serializer(definitionsObj);

          expect(content).toBe(expected);
        });
      },
    );

    describe.each(toParams(localeConditions))(
      'with attr locale=%s',
      (desc, { locale }) => {
        const expectedDesc = locale ? 'locale-scoped portion of' : 'all';

        test(`returns ${expectedDesc} data from items`, async () => {
          const contentBlock = newContentBlock({
            attributes: {
              ...(locale ? { locale } : {}),
            },
          });

          const content = await contentBlock.serializeItems(definitions);
          const expected = locale ? definitionsObj[locale] : definitionsObj;

          expect(JSON.parse(content)).toEqual(expected);
        });
      },
    );
  });
});
