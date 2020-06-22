import type { IResolver } from './types';
import { resolverDebug } from '../util/debug';

export interface Resolver {
  constructor: typeof Resolver;
}
/**
 * Base Resolver class
 */
export abstract class Resolver implements IResolver.Resolver {
  logger: (msg: string) => void;

  constructor(public options: IResolver.ResolveOptions = {}) {
    const { logger } = options;

    const { logger: fallbackLogger } = this.constructor.defaults;

    this.logger = logger || fallbackLogger;
  }

  resolve(inputs: any[], ...args: any[]) {
    return inputs as any[];
  }

  static get defaults() {
    return {
      logger: resolverDebug,
    };
  }
}
