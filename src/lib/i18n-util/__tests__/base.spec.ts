import { readdirSync } from 'fs';

import type { I_I18nUtil } from '../types';
import { Base } from '../base';
import { I18nUtil, LoadedI18nUtil } from '..';

describe('I18nUtilBase', () => {
  const params = [
    [Base.name, Base],
    [I18nUtil.name, I18nUtil],
    [LoadedI18nUtil.name, LoadedI18nUtil],
  ] as [string, new (...args: any[]) => I_I18nUtil.Base][];

  describe.each(params)('%s', (name, klass) => {
    test('initializes', () => {
      new klass();
    });

    test('adds adaptor', () => {
      const utilBase = new klass();
      const parser = (paths: string[]) => [];
      utilBase.addAdaptor({
        name: 'name',
        patterns: [/.*/],
        options: { some: 'option1' },
        methods: {
          parser,
        },
      });
      const adaptor = utilBase.adaptors.get('name')!;
      expect(adaptor!).toBeDefined();
      expect(adaptor!.methods.parser).toBeDefined();
      expect(adaptor!.methods.parser).toBe(parser);
    });

    test('adds adaptors', () => {
      const utilBase = new klass();
      const parser1 = (paths: string[]) => [];
      const parser2 = (paths: string[]) => [];

      const adaptors = [
        {
          name: 'name1',
          patterns: [/.*/],
          options: { some: 'option1' },
          methods: { parser: parser1 },
        },
        {
          name: 'name2',
          patterns: [/.*/],
          options: { some: 'option2' },
          methods: { parser: parser2 },
        },
      ];
      utilBase.addAdaptors(adaptors);

      adaptors.map(({ name, methods }) => {
        const adaptor = utilBase.adaptors.get(name);
        expect(adaptor!).toBeDefined();
        expect(adaptor!.methods.parser).toBeDefined();
        expect(adaptor!.methods.parser).toBe(methods.parser);
      });
    });

    test('remove adaptor', () => {
      const utilBase = new klass();
      const parser = (paths: string[]) => [];
      const adaptor = {
        name: 'name',
        patterns: [/.*/],
        options: { some: 'option1' },
        methods: {
          parser,
        },
      };

      utilBase.addAdaptor(adaptor);
      const adaptorAdded = utilBase.adaptors.get(adaptor.name);
      expect(adaptorAdded!).toBeDefined();
      expect(adaptorAdded!.methods.parser).toBeDefined();
      expect(adaptorAdded!.methods.parser).toBe(parser);

      utilBase.removeAdaptor(adaptor.name);
      const adaptorRemove = utilBase.adaptors.get(adaptor.name);
      expect(adaptorRemove).toBeUndefined();
    });

    test('remove adaptors', () => {
      const utilBase = new klass();
      const parser1 = (paths: string[]) => [];
      const parser2 = (paths: string[]) => [];
      const adaptors = [
        {
          name: 'name1',
          patterns: [/.*/],
          options: { some: 'option1' },
          methods: { parser: parser1 },
        },
        {
          name: 'name2',
          patterns: [/.*/],
          options: { some: 'option2' },
          methods: { parser: parser2 },
        },
      ];

      utilBase.addAdaptors(adaptors);
      adaptors.map(({ name, methods }) => {
        const adaptor = utilBase.adaptors.get(name);
        expect(adaptor!).toBeDefined();
        expect(adaptor!.methods.parser).toBeDefined();
        expect(adaptor!.methods.parser).toBe(methods.parser);
      });

      utilBase.removeAdaptors(adaptors.map((a) => a.name));
      adaptors.map(({ name, methods }) => {
        const adaptor = utilBase.adaptors.get(name);
        expect(adaptor).toBeUndefined();
      });
    });

    test('resolvePaths (empty)', async () => {
      const utilBase = new klass();
      const resolved = await utilBase.resolvePaths([]);

      expect(resolved).toBeDefined();
      expect(Array.isArray(resolved)).toBeTruthy();
      expect(resolved).toHaveLength(0);
    });

    test('resolvePaths', async () => {
      const utilBase = new klass();
      const resolved = await utilBase.resolvePaths([
        'src/lib/i18n-util/__tests__/fixtures/**',
      ]);

      expect(resolved).toBeDefined();
      expect(Array.isArray(resolved)).toBeTruthy();
      expect(resolved).toHaveLength(
        readdirSync('src/lib/i18n-util/__tests__/fixtures/').length,
      );
    });
  });
});
