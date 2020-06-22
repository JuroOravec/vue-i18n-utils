import { ValidationError } from 'schema-utils';

import type { IValidator } from '../types';
import { Validator } from '..';

describe('Validator', () => {
  const permissiveSchema = {
    type: 'object',
    properties: {
      a: { type: 'number' },
      b: { type: 'object', properties: { c: { type: 'boolean' } } },
    },
  };
  const strictSchemaRequired = {
    type: 'object',
    properties: {
      a: { type: 'number' },
      b: {
        type: 'object',
        properties: { c: { type: 'boolean' } },
        required: ['c'],
      },
    },
    required: ['a', 'b'],
  };
  const strictSchemaNoAdd = {
    type: 'object',
    properties: {
      a: { type: 'number' },
      b: {
        type: 'object',
        properties: { c: { type: 'boolean' } },
        additionalProperties: false,
      },
    },
    additionalProperties: false,
  };

  /**
   * Tuple of:
   * - desc
   * - schema object
   * - should fail on empty object?
   * - allows property mismatch?
   */
  const schemas: [string, object, boolean, boolean][] = [
    ['strict schema (required props)', strictSchemaRequired, true, false],
    ['strict schema (no additional props)', strictSchemaNoAdd, false, false],
    ['permissive schema', permissiveSchema, false, true],
  ];

  const exactMatch = { a: 22, b: { c: true } };
  const propMismatch = { a: 22, b: { d: true } };
  const typeMismatch = { a: 22, b: { c: 33 } };

  const generators = [[Validator.name, Validator, {}]] as [
    string,
    new (...args: any[]) => IValidator.Validator,
    object,
  ][];

  describe.each(generators)(
    `common (subclass %s)`,
    (className, klass, options) => {
      test('can instantiate', () => {
        const validator = new klass();
        expect(validator).toBeTruthy();
        expect(validator.validate).toBeTruthy();
      });

      test('can pass args at instantiation', () => {
        const emptyValidator = new klass({});
        expect(emptyValidator.options).toEqual({});
        const nonemptyValidator = new klass(options);
        expect(nonemptyValidator.options).toEqual(options);
      });

      test('can pass args at validate', () => {
        const validator = new klass();
        validator.validate({}, {}, options);
      });

      test.each(schemas)(
        'validating empty object throws only on required properties (%s)',
        (desc, schema, shouldThrowOnEmpty) => {
          const validator = new klass();
          if (shouldThrowOnEmpty) {
            expect(() => validator.validate(schema, {})).toThrowError(
              ValidationError,
            );
          } else {
            validator.validate(schema, {});
          }
        },
      );

      test.each(schemas)(
        'validating exact match should pass against %s',
        (name, schema) => {
          const validator = new klass();
          validator.validate(schema, exactMatch);
        },
      );

      test.each(schemas)(
        'validating object with property mismatch throws against strict schemas (%s)',
        (desc, schema, _, allowsPropertyMismatch) => {
          const validator = new klass();
          if (allowsPropertyMismatch) {
            validator.validate(schema, propMismatch);
          } else {
            expect(() => validator.validate(schema, propMismatch)).toThrowError(
              ValidationError,
            );
          }
        },
      );

      test.each(schemas)(
        'validating object with type mismatch should fail against %s',
        (desc, schema) => {
          const validator = new klass();
          expect(() => validator.validate(schema, typeMismatch)).toThrowError(
            ValidationError,
          );
        },
      );
    },
  );

  // Note that although this is tested with the SchemaGenerator, this should be
  // applicable to each subclass
  test('args passed to validate method override those from instantiation', () => {
    const dummyName = 'Bzwurght';
    const validator = new Validator({ name: 'uno' });
    // The final config is exposed on error, so we trigger one
    try {
      validator.validate(strictSchemaRequired, {}, { name: dummyName });
    } catch (e) {
      if (!(e instanceof ValidationError)) throw e;
      expect(e.headerName).toBe(dummyName);
    }
  });
});
