import validateOptions from 'schema-utils';

import type { AnyObj } from '../types';
import debug from './debug';

export type ValidateOptions = NonNullable<
  Parameters<typeof validateOptions>[2]
>;

export interface IValidator {
  validate: (data: any, schema: any, options?: AnyObj) => any;
}

/**
 * Constructor options object
 */
export interface IValidatorCtorOptions extends ValidateOptions {}

export class Validator implements IValidator {
  constructor(public options: IValidatorCtorOptions = {}) {}

  validate(data: any, schema: any, options: ValidateOptions = {}) {
    debug(`[schema-gen] Validating schema`);
    validateOptions(schema, data, options);
    debug(`[schema-gen] Done validating schema`);
  }
}
