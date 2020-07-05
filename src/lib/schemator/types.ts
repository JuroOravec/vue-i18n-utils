/**
 * Types for SchemaGenerator.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import { AISchemator } from './types-abstract';
import { AnyObj } from '../../types';

export * from './types-abstract';

export namespace ISchemator {
  /**
   * Schema types provided by generate-schema
   */
  export type SchemaType =
    | 'clickhouse'
    | 'bigquery'
    | 'json'
    | 'generic'
    | 'mongoose'
    | 'mysql';

  export interface SerializeOptions extends AISchemator.SerializeOptions {
    type?: SchemaType;
  }

  export type DeserializeOptions = SerializeOptions &
    AISchemator.DeserializeOptions;

  export interface GenerateOptions extends AISchemator.GenerateOptions {
    type?: SchemaType;
    title?: string;
    required?: boolean;
    additionalProperties?: boolean;
  }

  /**
   * Constructor options object
   */
  export type CtorOptions = AISchemator.CtorOptions &
    SerializeOptions &
    DeserializeOptions &
    GenerateOptions;

  export abstract class Schemator implements AISchemator.Schemator {
    options = {} as AnyObj;

    logger = {} as (msg: string) => void;

    generate = {} as (data: any, options?: GenerateOptions) => any;

    serialize = {} as (
      schema: any,
      options?: SerializeOptions,
    ) => string | Buffer;

    deserialize = {} as (schema: string, options?: DeserializeOptions) => any;
  }
}
