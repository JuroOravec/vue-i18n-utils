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
    resolve(inputs: any[], ...args: any[]) {
      return inputs as any[];
    }
  }

  export type ResolveOptions = AnyObj;

  export interface CtorOptions extends ResolveOptions {
    logger?: (msg: string) => void;
  }

  export abstract class PathResolver extends Resolver {
    resolve(paths: any[], options?: ResolveOptions) {
      return paths as string[];
    }
  }

  export abstract class LocaleResolver extends Resolver {
    resolve(
      locales: any[],
      items: { locale?: any }[],
      options?: ResolveOptions,
    ) {
      return locales as string[];
    }
  }

  export abstract class KeyResolver extends Resolver {
    resolve(keys: any[], items: { path?: any }[], options?: ResolveOptions) {
      return keys as string[][];
    }
  }

  export abstract class ValueResolver extends Resolver {
    resolve(values: any[], items: { value?: any }[], options?: ResolveOptions) {
      return values as any[];
    }
  }
}
