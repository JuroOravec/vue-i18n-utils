import { program } from 'commander';

import type { I_I18nUtil } from '../../lib/i18n-util/types';
import type { IResolver } from '../../lib/resolver/types';

export type Cmd = typeof program;

export interface Config extends I_I18nUtil.CtorOptions {
  keyResolver?: IResolver.KeyResolver;
  keyResolverOptions?: IResolver.ResolveOptions;
  valueResolver?: IResolver.ValueResolver;
  valueResolverOptions?: IResolver.ResolveOptions;
}
