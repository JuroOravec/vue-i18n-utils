/**
 * Abstract types for Resolver.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import type { AnyObj } from '../../types';

export namespace AIResolver {
  /**
   * Resolver interface
   */
  export abstract class Resolver {
    options = {} as object;

    logger = {} as (msg: string) => void;

    resolve = {} as (inputs: any[], ...args: any[]) => any[] | Promise<any[]>;
  }

  export type ResolveOptions = AnyObj;

  export interface CtorOptions extends ResolveOptions {
    logger?: (msg: string) => void;
  }

  export abstract class PathResolver extends Resolver {
    resolve = {} as (
      paths: any[],
      options?: ResolveOptions,
    ) => string[] | Promise<string[]>;
  }

  export abstract class LocaleResolver extends Resolver {
    resolve = {} as (
      locales: any[],
      items: (any & { locale?: any })[],
      options?: ResolveOptions,
    ) => string[] | Promise<string[]>;
  }

  export abstract class KeyResolver extends Resolver {
    resolve = {} as (
      keys: any[],
      items: (any & { path?: any })[],
      options?: ResolveOptions,
    ) => string[][] | Promise<string[][]>;
  }

  export abstract class ValueResolver extends Resolver {
    resolve = {} as (
      values: any[],
      items: ({ value?: any } & any)[],
      options?: ResolveOptions,
    ) => any[] | Promise<any[]>;
  }
}
