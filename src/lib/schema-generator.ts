const schemaGen = require('generate-schema');

import type { AnyObj } from '../types';
import debug from './debug';
import merge from 'lodash.merge';

/**
 * Schema types provided by generate-schema
 */
export type SchemaType =
  | 'clickhouse'
  | 'bigquery'
  | 'json'
  | 'generic'
  | 'mongoose'
  | 'mysql';

export interface GenerateOption {
  type?: SchemaType;
  title?: string;
}

export interface ISchemaGenerator {
  generate: (data: any, options?: AnyObj) => any;
}

/**
 * Constructor options object
 */
export interface ISchemaGeneratorCtorOptions extends GenerateOption {}

export class SchemaGenerator implements ISchemaGenerator {
  constructor(public options: ISchemaGeneratorCtorOptions = {}) {}

  generate(data: any, options: GenerateOption = {}) {
    const { type, title } = merge(
      {},
      SchemaGenerator.defaults,
      this.options,
      options,
    );

    const acceptsTitle = SchemaGenerator.typesWithTitle.includes(type);
    const schemaGenFn = schemaGen[type];
    debug(`[schema-gen] Generating '${type}' schema titled '${title}'`);
    const schema = acceptsTitle ? schemaGenFn(title, data) : schemaGenFn(data);
    debug(`[schema-gen] Done generating schema`);
    return schema;
  }

  static get typesWithTitle() {
    return ['mysql', 'json', 'clickhouse'];
  }

  static get defaults() {
    return {
      type: 'json' as SchemaType,
      title: 'Translation File Schema',
    } as Required<ISchemaGeneratorCtorOptions>;
  }
}
