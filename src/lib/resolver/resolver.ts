import type { IResolver } from './types';
import { resolverDebug } from '../util/debug';

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

  resolve(inputs: any[], ...args: any[]): any[] | Promise<any[]> {
    return inputs;
  }

  static get defaults() {
    return {
      logger: resolverDebug,
    };
  }
}

export interface Resolver {
  constructor: typeof Resolver;
}
