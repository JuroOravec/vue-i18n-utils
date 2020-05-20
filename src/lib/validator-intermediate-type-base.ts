/**
 * Base types, or the abstraction of interfaces. These types have limited
 * resolution and do not include any types that could cause circular reference.
 *
 * These types should be used by interfaces.
 */

import type { AnyObj } from '../types';
import type { ExtractItem } from './extract-item';
import type { DeepObject } from './walk';

/**
 * Base of the ValidatorIntermediate interface
 */
export interface IValidatorIntermediateBase {
  data: any;
  i18nUtil: any;

  againstSchema(schema: any, options: AnyObj): any;

  againstSchemaFromObjects(objects: DeepObject[], options: AnyObj): any;

  againstSchemaFromExtracts(extracts: ExtractItem[], options: AnyObj): any;

  againstSchemaFromFiles(globs: any[], options: AnyObj): any;
}
