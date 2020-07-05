/**
 * Types for Validator.
 *
 * These types are more concrete compared to the abstract types.
 *
 * These types should be used by classes / concretions in this or other
 * components.
 */

import type validateOptions from 'schema-utils';
import type { AIValidator } from './types-abstract';

export * from './types-abstract';

export namespace IValidator {
  export type ValidateOptions = AIValidator.ValidateOptions &
    NonNullable<Parameters<typeof validateOptions>[2]>;

  /**
   * Constructor options object
   */
  export type CtorOptions = ValidateOptions & AIValidator.CtorOptions;

  export abstract class Validator implements AIValidator.Validator {
    options = {} as CtorOptions;

    logger = {} as (msg: string) => void;

    validate = {} as (schema: any, data: any, options?: ValidateOptions) => any;
  }
}
