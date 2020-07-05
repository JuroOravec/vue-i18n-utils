import schemaGen from 'generate-schema';
import merge from 'lodash.merge';

import { ISchemator } from './types';
import { schematorDebug } from '../util/debug';
import { deepWalk } from '../util/walk';

interface Defaults {
  logger: AbstractSchemator['logger'];
}

export abstract class AbstractSchemator implements ISchemator.Schemator {
  logger: (msg: string) => void;

  constructor(public options: ISchemator.CtorOptions = {}) {
    const { logger } = options;

    const { logger: fallbackLogger } = this.constructor.defaults;

    this.logger = logger || fallbackLogger;
  }

  generate(data: any, options?: ISchemator.GenerateOptions): any {
    return {};
  }
  serialize(
    schema: any,
    options?: ISchemator.SerializeOptions,
  ): string | Buffer {
    return '';
  }
  deserialize(schema: string, options?: ISchemator.DeserializeOptions): any {
    return {};
  }

  static get defaults(): Defaults {
    return {
      logger: schematorDebug,
    };
  }
}

export class Schemator extends AbstractSchemator
  implements ISchemator.Schemator {
  /**
   * Create a schema that describes the provided data.
   */
  generate(data: any, options: ISchemator.GenerateOptions = {}) {
    const { type, title, required, additionalProperties, scope } = merge(
      {},
      Schemator.defaults,
      this.options,
      options,
    );
    this.logger(`Generating '${type}' schema titled '${title}'`);

    const acceptsTitle = Schemator.titledTypes.includes(type);
    const schemaGenFn = schemaGen[type];
    const schemaDirty = acceptsTitle
      ? schemaGenFn(title, data)
      : schemaGenFn(data);

    // Remove `$schema` property added by generate-schema as schema-utils
    // cannot read that. Items are reassigned instead of deleted to avoid
    // deletion perf penalty.
    const schema =
      type === 'json'
        ? Object.entries(schemaDirty).reduce((agg, [key, val]) => {
            if (key !== '$schema') agg[key] = val;
            return agg;
          }, {} as any)
        : schemaDirty;

    // Ensure that all properties on the schema are set as required.
    if (required || additionalProperties) {
      deepWalk(
        {
          onBranch: ({ value }) => {
            // Both `required` and `additionalProperties` relate only to
            // objects (entities with properties)
            if (!value.properties) return value;
            value.required = required
              ? [...(value.required ?? []), ...Object.keys(value.properties)]
              : [];
            value.additionalProperties = Boolean(additionalProperties);
            return value;
          },
        },
        // The walking function doesn't process the root, so wrap it to apply
        // 'required' and 'additionalProperties' properties
        { root: schema },
      );
    }

    let scopedSchema = schema;

    if (type === 'json') {
      if (scope === 'master') {
        // Move the schema properties one level deeper and set the top level to
        // accept any string (which would be the locale)
        const { properties, required, ...masterSchema } = schema;
        const { title, ...subschema } = schema;

        masterSchema.patternProperties = {
          '^.*$': subschema,
        };

        Object.assign(masterSchema, {
          type: 'object',
          // Even if `additionalProperties` === true, we set the top level to
          // allow only locale names. Deeper levels can then accept
          // additional props as set
          additionalProperties: false,
        });

        scopedSchema = masterSchema;
      } else {
        scopedSchema = schema;
      }
    }

    this.logger(`Done generating schema`);
    return scopedSchema;
  }

  /**
   * Create a schema that describes the provided data, and ensure the result is
   * serialized.
   */
  serialize(schema: any, options: ISchemator.SerializeOptions = {}) {
    this.logger(`Serializing schema`);

    const { type } = merge({}, Schemator.defaults, this.options, options);

    const res = Schemator.stringTypes.includes(type)
      ? (schema as string)
      : JSON.stringify(schema, null, 2);

    this.logger(`Done serializing schema`);
    return res;
  }

  /**
   * The opposite of serialize. Convert schema from string to usable form.
   */
  deserialize(
    serializedSchema: string,
    options: ISchemator.SerializeOptions = {},
  ) {
    this.logger(`Deserializing schema`);

    const { type } = merge({}, Schemator.defaults, this.options, options);
    const res = Schemator.stringTypes.includes(type)
      ? serializedSchema
      : JSON.parse(serializedSchema);

    this.logger(`Done deserializing schema`);

    return res;
  }

  static get titledTypes() {
    const types: ISchemator.SchemaType[] = ['mysql', 'json', 'clickhouse'];
    return types;
  }

  static get stringTypes() {
    const types: ISchemator.SchemaType[] = ['mysql', 'clickhouse'];
    return types;
  }

  static get defaults(): Required<ISchemator.CtorOptions> {
    return {
      ...super.defaults,
      type: 'json',
      title: 'Translation File Schema',
      scope: 'locale',
      required: true,
      additionalProperties: false,
    };
  }
}

export interface AbstractSchemator {
  constructor: typeof AbstractSchemator;
}
