/**
 * Base types, or the abstraction of interfaces. These types have limited
 * resolution and do not include any types that could cause circular reference.
 *
 * These types should be used by interfaces.
 */

import type { AnyObj } from '../types';
import type { IFileAdaptorCollection } from './file-adaptor-type';
import type { ExtractItem } from './extract-item';
import type { DeepObject } from './walk';
import type { IValidator } from './validator';
import type { IPathResolver } from './path-resolver';
import type { ISchemaGenerator } from './schema-generator';

export interface I_I18nUtilBase {
  adaptors: IFileAdaptorCollection;
  schemaGenerator: ISchemaGenerator;
  validator: IValidator;
  pathResolver: IPathResolver;
  options: any;

  addFileAdaptor(params: AnyObj): any | void;

  addFileAdaptors(paramsList: AnyObj[]): any | void;

  removeFileAdaptor(name: any): any | void;

  removeFileAdaptors(names: any[]): any | void;

  extract(paths: any[], options: AnyObj): ExtractItem[];

  write(writeEntries: any[], options: AnyObj): any | void;

  patch(extracts: ExtractItem[], options: AnyObj): any | void;

  patchFromFiles(paths: any[], options: AnyObj): any | void;

  patchFromExtracts(extracts: ExtractItem[], options: AnyObj): any | void;

  patchFromObjects(objects: DeepObject[], options: AnyObj): any | void;

  master(paths: any[], options: AnyObj): AnyObj;

  masterFromExtracts(extracts: ExtractItem[], options: AnyObj): AnyObj;

  masterFromObjects(objects: DeepObject[], options: AnyObj): AnyObj;

  locale(globs: any[], locale: string, options: AnyObj): AnyObj;

  localeFromExtracts(
    extracts: ExtractItem[],
    locale: string,
    options: AnyObj,
  ): AnyObj;

  localeFromObjects(
    objects: DeepObject[],
    locale: string,
    options: AnyObj,
  ): AnyObj;

  schema(globs: any[], options: AnyObj): AnyObj;

  schemaFromExtracts(extracts: ExtractItem[], options: AnyObj): AnyObj;

  schemaFromObjects(objects: DeepObject[], options: AnyObj): AnyObj;

  validate(data: AnyObj[], schema: AnyObj, options: AnyObj): any | void;

  validateFromFiles(paths: any[], options: AnyObj): any | void;

  validateFromExtracts(extracts: ExtractItem[], options: AnyObj): any | void;

  validateFromObjects(objects: DeepObject[], options: AnyObj): any | void;
}
