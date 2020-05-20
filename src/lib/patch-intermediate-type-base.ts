/**
 * Base types, or the abstraction of interfaces. These types have limited
 * resolution and do not include any types that could cause circular reference.
 *
 * These types should be used by interfaces of other classes.
 */

import type { ExtractItem } from './extract-item';
import type { DeepObject } from './walk';

export interface IPatchIntermediateBase {
  i18nUtil: any;
  sourceExtracts: ExtractItem[];

  toTargetsByExtracts: (extracts: ExtractItem[], options: any) => any;

  toTargetsByObjects: (objects: DeepObject[], options: any) => any;

  toTargetsByFiles: (paths: any[], options: any) => any;
}
