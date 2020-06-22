/**
 * Abstract types for Validator.
 *
 * These types have limited resolution and do not include any types that could
 * cause circular reference.
 *
 * These types should be used by interfaces of other components to avoid
 * circular imports.
 */

import type { AnyObj } from '../../types';

export namespace AIValidator {
  export type ValidateOptions = AnyObj;

  export interface CtorOptions extends ValidateOptions {
    logger?: (msg: string) => void;
  }

  export abstract class Validator {
    options = {} as AnyObj;
    logger = {} as (msg: string) => void;
    validate(schema: any, data: any, options?: ValidateOptions) {
      return {} as any;
    }
  }
}
