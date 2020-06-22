const genSchema = require('generate-schema');

import type { ISchemator } from '../types';
import { Schemator } from '..';

describe('Schemator', () => {
  type GeneratorParam = [
    string,
    new (...args: any[]) => ISchemator.Schemator,
    object,
  ];
  const generators: GeneratorParam[] = [
    [Schemator.name, Schemator, { title: 'some', type: 'json' }],
  ];

  function getExpectedJson(title: string, obj: object) {
    const expected = genSchema.json(title, obj);
    delete expected['$schema'];
    return expected;
  }

  describe.each(generators)(
    `common (subclass %s)`,
    (className, klass, options) => {
      test('can instantiate', () => {
        const schemaGen = new klass();
        expect(schemaGen).toBeTruthy();
        expect(schemaGen.generate).toBeTruthy();
      });

      test('can pass args at instantiation', () => {
        const emptySchemaGen = new klass({});
        expect(emptySchemaGen.options).toEqual({});
        const nonemptySchemaGen = new klass(options);
        expect(nonemptySchemaGen.options).toEqual(options);
      });

      test('can pass args at generate', () => {
        const schemaGen = new klass();
        schemaGen.generate({}, options);
      });

      test("generated schema doesn't contain the `$schema` property", () => {
        const schemaGen = new klass();
        const schema = schemaGen.generate({});
        expect(schema).toBeTruthy();
        expect(schema['$schema']).toBeUndefined();
      });

      test('passing empty object returns basic object schema', () => {
        const schemaGen = new klass();
        const schema = schemaGen.generate(
          {},
          { required: false, additionalProperties: false },
        );
        expect(schema).toBeTruthy();

        const expected = getExpectedJson('Translation File Schema', {});
        expect(schema).toEqual(expected);
      });
    },
  );

  // Note that although this is tested with the Schemator, this should be
  // applicable to each subclass
  test('args passed to generate method override those from instantiation', () => {
    const dummyObj = { a: { b: { wow: 'cool' } }, e: 'indeed' };
    const schemaGen = new Schemator({ title: 'bonjour', type: 'mysql' });
    const schema = schemaGen.generate(dummyObj, {
      type: 'json',
      required: false,
    });
    const expectedSchema = getExpectedJson('bonjour', dummyObj);
    expect(schema).toBeTruthy();
    expect(schema).toEqual(expectedSchema);
  });

  describe('SchemaGenerator', () => {
    const dummyObj = { a: { b: { wow: 'cool' } }, e: 'indeed' };
    const dummyTitle = 'bonjour';
    const schemaTypes = [
      ['clickhouse'],
      ['bigquery'],
      ['json'],
      ['generic'],
      ['mongoose'],
      ['mysql'],
    ] as [ISchemator.SchemaType][];

    const getExpectedSchema = (
      obj: object,
      schemaType: ISchemator.SchemaType,
      title: string,
    ) => {
      const schema = Schemator.titledTypes.includes(schemaType)
        ? genSchema[schemaType](title, obj)
        : genSchema[schemaType](obj);
      delete schema['$schema'];
      return schema;
    };

    test.each(schemaTypes)(
      'supports %s schema (options.type)',
      (schemaType) => {
        const schemaGen = new Schemator({
          title: dummyTitle,
          type: schemaType,
        });
        const schema = schemaGen.generate(dummyObj, {
          type: schemaType,
          required: false,
        });
        const expectedSchema = getExpectedSchema(
          dummyObj,
          schemaType,
          dummyTitle,
        );
        expect(schema).toBeTruthy();
        expect(schema).toEqual(expectedSchema);
      },
    );

    test('defaults to json schema', () => {
      const schemaGen = new Schemator();
      const schema = schemaGen.generate(dummyObj);
      const jsonSchema = schemaGen.generate(dummyObj, {
        type: 'json',
      });
      expect(schema).toBeTruthy();
      expect(schema).toEqual(jsonSchema);
    });

    test('accepts title (options.title)', () => {
      const schemaGen = new Schemator({
        title: dummyTitle,
      });
      const schema = schemaGen.generate(dummyObj);
      expect(schema.title).toBeTruthy();
      expect(schema.title).toEqual(dummyTitle);
    });

    test('sets JSON schema properties as required if options.required', () => {
      const schemaGen = new Schemator({
        title: dummyTitle,
        required: true,
      });
      const schema = schemaGen.generate(dummyObj);
      expect(schema.required).toBeTruthy();
      expect(schema.required).toEqual(Object.keys(schema.properties));
    });

    test('does not set JSON schema properties as required if not options.required', () => {
      const schemaGen = new Schemator({
        title: dummyTitle,
        required: false,
      });
      const schema = schemaGen.generate(dummyObj);
      expect(schema.required).toBeUndefined();
      expect(schema.required).not.toEqual(Object.keys(schema.properties));
    });

    test('sets JSON schema properties as required by default', () => {
      const schemaGen = new Schemator({
        title: dummyTitle,
      });
      const schema = schemaGen.generate(dummyObj);
      const requiredSchema = schemaGen.generate(dummyObj, { required: true });
      expect(schema).toBeDefined();
      expect(schema).toEqual(requiredSchema);
    });

    test('sets JSON schema to allow additional properties if options.additionalProperties', () => {
      const schemaGen = new Schemator({
        additionalProperties: true,
      });
      const schema = schemaGen.generate(dummyObj);
      expect(schema.additionalProperties).toBeDefined();
      expect(schema.additionalProperties).toBe(true);
    });

    test('sets JSON schema to disallow additional properties if not options.additionalProperties', () => {
      const schemaGen = new Schemator({
        additionalProperties: false,
      });
      const schema = schemaGen.generate(dummyObj);
      expect(schema.additionalProperties).toBeDefined();
      expect(schema.additionalProperties).toBe(false);
    });

    test('sets JSON schema to disallow additional properties by default', () => {
      const schemaGen = new Schemator();
      const schema = schemaGen.generate(dummyObj);
      expect(schema.additionalProperties).toBeDefined();
      expect(schema.additionalProperties).toBe(false);
    });
  });
});
