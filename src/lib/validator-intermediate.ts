import merge from 'lodash.merge';

import type {
  IValidatorIntermediate,
  IValidatorIntermediateOptions as Options,
  PTPB,
  PTP,
  TPB,
  TP,
} from './validator-intermediate-type';
import type { AnyObj, DefaultProps, AsObject } from '../types';
import type { ExtractItem } from './extract-item';
import type { DeepObject } from './walk';

export class ValidatorIntermediate<
  Params extends PTPB = PTP,
  T extends TPB = Params extends infer X ? DefaultProps<AsObject<X>, TP> : never
> implements IValidatorIntermediate<T> {
  constructor(
    public i18nUtil: T['i18nUtil'],
    public data: any,
    public options: Options<T>,
  ) {}

  againstSchema(schema: any, options: Options<T> = {}) {
    const { schema: schemaOpts } = this.effectiveOptions(options);
    return this.i18nUtil.validator.validate(this.data, schema, schemaOpts);
  }

  againstSchemaFromObjects(objects: DeepObject[], options: Options<T> = {}) {
    const {
      schema: schemaOpts,
      validator: validatorOpts,
    } = this.effectiveOptions(options);
    const schema = this.i18nUtil.schemaFromObjects(objects, schemaOpts);
    return this.i18nUtil.validator.validate(this.data, schema, validatorOpts);
  }

  againstSchemaFromExtracts(extracts: ExtractItem[], options: Options<T> = {}) {
    const {
      schema: schemaOpts,
      validator: validatorOpts,
    } = this.effectiveOptions(options);
    const schema = this.i18nUtil.schemaFromExtracts(extracts, schemaOpts);
    return this.i18nUtil.validator.validate(this.data, schema, validatorOpts);
  }

  againstSchemaFromFiles(globs: string[], options: Options<T> = {}) {
    const {
      schema: schemaOpts,
      validator: validatorOpts,
    } = this.effectiveOptions(options);
    const schema = this.i18nUtil.schema(globs, schemaOpts);
    return this.i18nUtil.validator.validate(this.data, schema, validatorOpts);
  }

  effectiveOptions<
    O extends AnyObj & {
      schema?: T['schemaGenOptions'];
      validator?: T['validatorOptions'];
    }
  >(options: O = {} as O) {
    return merge({ schema: {}, validator: {} }, this.options, options);
  }
}
