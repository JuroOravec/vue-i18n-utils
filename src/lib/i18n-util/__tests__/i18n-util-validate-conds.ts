import type { I_I18nUtil } from '../types';
import type { IDefinition } from '../../definition/types';
import { fullDefinitions, definitions } from './fixtures/definitions';
import { simpleFull, simple } from './fixtures/definition-objects';
import {
  emptySchema,
  fullSchemaLocale,
  fullSchemaMaster,
} from './fixtures/schemas';

export type ValidateCond = {
  description: string;
  definitions: IDefinition.Item[];
  validatee: any;
  options: I_I18nUtil.ValidateOptions & I_I18nUtil.SchemaOptions;
  schema: object;
  schemaDefinitions: IDefinition.Item[];
  throws: boolean;
};

export const conditions: ValidateCond[] = [
  {
    description: 'validates empty array as empty object',
    definitions: [],
    validatee: {},
    options: {},
    schema: emptySchema,
    schemaDefinitions: [],
    throws: false,
  },
  {
    description: 'throws if validation fails (empty)',
    definitions: [],
    validatee: {},
    options: {},
    schema: fullSchemaLocale,
    schemaDefinitions: definitions,
    throws: true,
  },
  {
    description: 'validates definitions (master)',
    definitions: fullDefinitions,
    validatee: simpleFull,
    options: { scope: 'master' },
    schema: fullSchemaMaster,
    schemaDefinitions: definitions,
    throws: false,
  },
  {
    description: 'throws if validation fails (master)',
    definitions: definitions,
    validatee: simple,
    options: { scope: 'master' },
    schema: fullSchemaMaster,
    schemaDefinitions: definitions,
    throws: true,
  },
];
