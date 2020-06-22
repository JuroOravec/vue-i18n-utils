import debugPkg from 'debug';

import { name as packageName } from './package-info';

export const debug = debugPkg(packageName);
export const cliDebug = debug.extend('cli');

export const adaptorDebug = debug.extend('adaptor');
export const jyDebug = adaptorDebug.extend('json-yaml');
export const vueDebug = adaptorDebug.extend('vue');

export const resolverDebug = debug.extend('resolver');
export const pathResolverDebug = resolverDebug.extend('path');
export const localeResolverDebug = resolverDebug.extend('locale');
export const keyResolverDebug = resolverDebug.extend('key');
export const valueResolverDebug = resolverDebug.extend('value');

export const nullPathResolverDebug = pathResolverDebug.extend('null');
export const cwdPathResolverDebug = pathResolverDebug.extend('cwd');
export const globPathResolverDebug = pathResolverDebug.extend('glob');

export const nullLocaleResolverDebug = localeResolverDebug.extend('null');
export const globLocaleResolverDebug = localeResolverDebug.extend('glob');

export const nullKeyResolverDebug = keyResolverDebug.extend('null');
export const globKeyResolverDebug = keyResolverDebug.extend('glob');

export const nullValueResolverDebug = valueResolverDebug.extend('null');
export const globValueResolverDebug = valueResolverDebug.extend('glob');

export const schematorDebug = debug.extend('schemator');

export const validatorDebug = debug.extend('validator');
