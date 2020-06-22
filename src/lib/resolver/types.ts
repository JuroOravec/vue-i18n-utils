/**
 * Types for PathResolver.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type glob from 'glob';
import type { Options } from 'micromatch';

import type { AIResolver } from './types-abstract';
import type { AI_Item } from '../item/types';

export * from './types-abstract';

export namespace IResolver {
  export type Resolver = AIResolver.Resolver;
  export type ResolveOptions = AIResolver.ResolveOptions;
  export type PathResolver = AIResolver.PathResolver;
  export type LocaleResolver = AIResolver.LocaleResolver;
  export type KeyResolver = AIResolver.KeyResolver;
  export type ValueResolver = AIResolver.ValueResolver;

  export abstract class ResolverBase implements AIResolver.Resolver {
    options = {} as object;
    logger = {} as (msg: string) => void;
    resolve(inputs: any[], ...args: any[]) {
      return inputs as any[];
    }
  }

  /**
   * Path resolvers
   */
  export namespace Path {
    /**
     * Path resolvers that returns the paths unchanged.
     */
    export namespace Null {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.PathResolver {
        resolve(paths: any[], options?: ResolveOptions) {
          return [] as string[];
        }
      }
    }

    /**
     * Path resolvers resolving path relative to current working directory
     */
    export namespace Cwd {
      /**
       * Options for `resolve` method
       */
      export interface ResolveOptions extends AIResolver.ResolveOptions {
        cwd?: string;
      }

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.PathResolver {
        resolve(paths: string[], options?: ResolveOptions) {
          return [] as string[];
        }
      }
    }

    /**
     * Path resolvers resolving globs relative to current working directory
     */
    export namespace Glob {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions &
        glob.IOptions &
        Cwd.ResolveOptions;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.PathResolver {
        resolve(paths: string[], options?: ResolveOptions) {
          return [] as string[];
        }
      }
    }
  }

  export namespace Locale {
    /**
     * Locale resolvers that returns locales unchanged.
     */
    export namespace Null {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.LocaleResolver {
        resolve<T extends string>(
          locales: T[],
          items: (AI_Item.Item & { locale: any })[],
          options?: ResolveOptions,
        ) {
          return [] as string[];
        }
      }
    }

    /**
     * Locale resolvers that returns locales that match glob patterns.
     */
    export namespace Glob {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions & Options;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.LocaleResolver {
        resolve(
          locales: string[],
          items: (AI_Item.Item & { locale: any })[],
          options?: ResolveOptions,
        ) {
          return locales as string[];
        }
      }
    }
  }

  export namespace Key {
    /**
     * Key resolvers that returns keys unchanged.
     */
    export namespace Null {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.KeyResolver {
        resolve<T extends string[]>(
          keys: T[],
          items: (AI_Item.Item & { path: any })[],
          options?: ResolveOptions,
        ) {
          return keys as T[];
        }
      }
    }

    /**
     * Key resolvers that returns keys that match glob patterns.
     */
    export namespace Glob {
      /**
       * Options for `resolve` method
       */
      export interface ResolveOptions
        extends AIResolver.ResolveOptions,
          Options {
        separator?: string;
      }

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.KeyResolver {
        resolve(
          keys: string[],
          items: (AI_Item.Item & { path: any })[],
          options?: ResolveOptions,
        ) {
          return [] as string[][];
        }
      }
    }
  }

  export namespace Value {
    /**
     * Value resolvers that returns values unchanged.
     */
    export namespace Null {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.ValueResolver {
        resolve<T extends any>(
          values: T[],
          items: (AI_Item.Item & { value: any })[],
          options?: ResolveOptions,
        ) {
          return values as T[];
        }
      }
    }

    /**
     * Value resolvers that returns values that match glob patterns.
     */
    export namespace Glob {
      /**
       * Options for `resolve` method
       */
      export type ResolveOptions = AIResolver.ResolveOptions & Options;

      /**
       * Constructor options object
       */
      export type CtorOptions = AIResolver.CtorOptions & ResolveOptions;

      /**
       * Path resolver interface
       */
      export abstract class Resolver extends ResolverBase
        implements AIResolver.ValueResolver {
        resolve(
          values: string[],
          items: (AI_Item.Item & { value: any })[],
          options?: ResolveOptions,
        ) {
          return values as string[];
        }
      }
    }
  }
}
