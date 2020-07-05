/**
 * Abstract types for Schemator.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import type { AnyObj } from '../../types';

export namespace AISchemator {
  export interface GenerateOptions extends AnyObj {
    scope?: 'locale' | 'master';
  }

  export type SerializeOptions = AnyObj;
  export type DeserializeOptions = AnyObj;

  export interface CtorOptions
    extends GenerateOptions,
      SerializeOptions,
      DeserializeOptions {
    logger?: (msg: string) => void;
  }

  export abstract class Schemator {
    options = {} as AnyObj;

    logger = {} as (msg: string) => void;

    generate = {} as (
      data: any,
      options?: GenerateOptions,
    ) => any | Promise<any>;

    serialize = {} as (
      schema: any,
      options?: SerializeOptions,
    ) => string | Buffer | Promise<string | Buffer>;

    deserialize = {} as (
      schema: string,
      options?: DeserializeOptions,
    ) => any | Promise<any>;
  }
}
