import yaml from 'js-yaml';

import type { AnyObj } from '../../../types';
import type { ICollection } from '../types';
import { Collection, MethodCollection, SerializerCollection } from '..';

describe('Collection', () => {
  const collection = {
    json: {
      patterns: [/json/iu],
      methods: {
        parser: (data: string, opts: AnyObj) => JSON.parse(data, opts.reviver),
        writer: (data: any, opts: AnyObj) =>
          JSON.stringify(data, opts.replacer, opts.space),
      },
    },
    yaml: {
      patterns: [/ya?ml/iu],
      methods: {
        parser: (data: string, opts: AnyObj) => yaml.safeLoad(data, opts),
        writer: (data: any, opts: AnyObj) => yaml.safeDump(data, opts),
      },
    },
  };

  type Implementation = [
    string,
    new (...args: any[]) => ICollection.Collection,
    AnyObj,
  ];
  const implementations: Implementation[] = [
    [Collection.name, Collection, { collection }],
    [MethodCollection.name, MethodCollection, { collection }],
    [SerializerCollection.name, SerializerCollection, { collection }],
  ];

  describe.each(implementations)(
    `common (subclass %s)`,
    (className, klass, options) => {
      test('can instantiate', () => {
        const collectionInst = new klass();
        expect(collectionInst).toBeTruthy();
        expect(collectionInst.collection).toBeTruthy();
      });

      test('can pass args at instantiation', () => {
        const collectionInst = new klass();
        expect(collectionInst.collection.keys()).not.toEqual([]);
        const nonemptyCollectionInst = new klass(options);
        const setItemNames = Array.from(
          nonemptyCollectionInst.collection.keys(),
        );
        expect(setItemNames).toEqual(Object.keys(options.collection));
      });

      test('can add item', () => {
        const collectionInst = new klass();
        expect(collectionInst.has('json')).toBe(false);
        collectionInst.add({ name: 'json', ...collection.json });
        expect(collectionInst.has('json')).toBe(true);
      });

      test('cannot add same item multiple times', () => {
        const collectionInst = new klass();
        expect(collectionInst.has('json')).toBe(false);
        collectionInst.add({ name: 'json', ...collection.json });
        expect(collectionInst.has('json')).toBe(true);
        expect(() =>
          collectionInst.add({ name: 'json', ...collection.json }),
        ).toThrow();
      });

      test('can delete item', () => {
        const collectionInst = new klass(options);
        expect(collectionInst.has('json')).toBe(true);
        collectionInst.delete('json');
        expect(collectionInst.has('json')).toBe(false);
      });

      test('cannot delete same item multiple times', () => {
        const collectionInst = new klass(options);
        expect(collectionInst.has('json')).toBe(true);
        collectionInst.delete('json');
        expect(collectionInst.has('json')).toBe(false);
        expect(() => collectionInst.delete('json')).toThrow();
      });

      test('get returns object item exists', () => {
        const collectionInst = new klass(options);
        expect(collectionInst.get('json')).toEqual(options.collection.json);
      });

      test('get returns undefined if item does not exist', () => {
        const collectionInst = new klass();
        expect(collectionInst.get('json')).toBeUndefined();
      });

      test('has returns false if item exists', () => {
        const collectionInst = new klass();
        expect(collectionInst.has('json')).toBe(false);
      });

      test('has returns true if item exists', () => {
        const collectionInst = new klass(options);
        expect(collectionInst.has('json')).toBe(true);
      });

      test('has returns false if item exists', () => {
        const collectionInst = new klass();
        expect(collectionInst.has('json')).toBe(false);
      });

      test('resolve returns item that matches regexp', () => {
        const collectionInst = new klass(options);
        expect(collectionInst.resolve('some.json')).toEqual({
          name: 'json',
          ...options.collection.json,
        });
        expect(collectionInst.resolve('many words but yaml also here')).toEqual(
          {
            name: 'yaml',
            ...options.collection.yaml,
          },
        );
      });

      test('resolve returns undefined if no item matches regexp', () => {
        const emptyCollectionInst = new klass();
        expect(emptyCollectionInst.resolve('some.json')).toBeUndefined();
        const collectionInst = new klass(options);
        expect(collectionInst.resolve('this matches nothing')).toBeUndefined();
      });

      test('validate passes if an item contains a prop', () => {
        const collectionInst = new klass(options);
        expect(() => collectionInst.validate('json', 'methods')).not.toThrow();
      });

      test("validate throws if an item doesn't exist", () => {
        const collectionInst = new klass(options);
        expect(() => collectionInst.validate('nonsense', 'methods')).toThrow();
      });

      test("validate throws if an item doesn't contain a prop", () => {
        const collectionInst = new klass(options);
        expect(() => collectionInst.validate('json', 'nonsense')).toThrow();
      });
    },
  );

  describe('MethodCollection', () => {
    test('validateMethod passes if an item contains a method', () => {
      const collectionInst = new MethodCollection({ collection });
      expect(() =>
        collectionInst.validateMethod('json', 'parser'),
      ).not.toThrow();
    });

    test("validateMethod throws if an item doesn't exist", () => {
      const emptyCollectionInst = new MethodCollection();
      expect(() =>
        emptyCollectionInst.validate('nonsense', 'methods'),
      ).toThrow();
    });

    test("validate throws if an item doesn't contain a prop", () => {
      const collectionInst = new MethodCollection({ collection });
      expect(() => collectionInst.validate('json', 'nonsense')).toThrow();
    });
  });
});
