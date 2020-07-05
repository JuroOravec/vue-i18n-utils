import merge from 'lodash.merge';
import validateOptions from 'schema-utils';

import type { IValidator } from './types';
import { validatorDebug } from '../util/debug';

interface Defaults {
  logger: AbstractValidator['logger'];
}

export abstract class AbstractValidator implements IValidator.Validator {
  logger: (msg: string) => void;

  constructor(public options: IValidator.CtorOptions = {}) {
    const { logger } = options;

    const { logger: fallbackLogger } = this.constructor.defaults;

    this.logger = logger || fallbackLogger;
  }

  validate(schema: any, data: any, options?: IValidator.ValidateOptions) {
    return {} as any;
  }

  static get defaults(): Defaults {
    return {
      logger: validatorDebug,
    };
  }
}

export interface AbstractValidator {
  constructor: typeof AbstractValidator;
}

export class Validator extends AbstractValidator
  implements IValidator.Validator {
  validate(schema: any, data: any, options: IValidator.ValidateOptions = {}) {
    this.logger(`Validating schema`);

    validateOptions(schema, data, merge({}, this.options, options));

    this.logger(`Done validating schema`);
  }
}
