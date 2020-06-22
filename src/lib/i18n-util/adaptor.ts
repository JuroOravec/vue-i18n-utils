import type { ICollection } from '../collection/types';
import type { IAdaptorCollection } from '../collection/types';
import { MethodCollection } from '../collection';
import { JsonYamlAdaptor } from '../adaptors/json-yaml';
import { VueAdaptor } from '../adaptors/vue';
import { I18nAdaptor } from '../adaptors/i18n';

/**
 * Subclass identical to `MethodCollection`, except the typing uses
 * `IAdaptorCollection` instead, which is for holding groups of functions
 * used as adaptors for interacting with various files.
 */
export class AdaptorCollection
  extends (MethodCollection as IAdaptorCollection.Class)
  implements IAdaptorCollection.Collection {
  constructor(options: ICollection.CtorOptions = {}) {
    const defaultCollection = {
      i18n: {
        methods: new I18nAdaptor(),
        patterns: [/\.i18n\.(?:json|ya?ml)$/iu],
      },
      'json-yaml': {
        methods: new JsonYamlAdaptor(),
        patterns: [/\.(?:json|ya?ml)$/iu],
      },
      vue: {
        methods: new VueAdaptor(),
        patterns: [/\.vue$/iu],
      },
    };
    super({
      collection: defaultCollection as any,
      ...options,
    });
  }
}
