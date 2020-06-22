import path from 'path';
import fs from 'fs';
import theDebug from 'debug';

import type { Config, Cmd } from './types';
import { debug, cliDebug } from '../../lib/util/debug';
import { GlobKeyResolver } from '../../lib/resolver/key';
import { EvalGlobValueResolver } from '../../lib/resolver/value';

export const processGeneralOptions = function processFn<
  T extends {
    debug?: boolean;
    verbose?: boolean;
    config?: string;
  }
>(options: T) {
  const { debug: debugOpt, verbose, config: configOpt, ...unparsed } = options;
  cliDebug.enabled = Boolean(verbose);
  if (!debug.enabled && debugOpt) {
    theDebug.enable(`${debug.namespace}:*`);
  }

  const cwd = process.cwd();
  const defaultConfigPath = path.resolve(cwd, 'i18n.config.js');
  const configPath = configOpt
    ? path.resolve(cwd, configOpt)
    : fs.existsSync(defaultConfigPath)
    ? defaultConfigPath
    : null;
  const userConfig: Config = configPath ? require(configPath) : {};
  const config = {
    keyResolver: new GlobKeyResolver(userConfig.keyResolverOptions),
    valueResolver: new EvalGlobValueResolver(userConfig.valueResolverOptions),
    ...userConfig,
  };

  if (configPath) {
    // Import following properties if we are given string instead of
    // instances / objects;
    const importableProperties = [
      'adaptors',
      'schemator',
      'validator',
      'keyResolver',
      'localeResolver',
      'pathResolver',
      'valueResolver',
    ] as (keyof Config)[];
    // Add config's directory to searched paths
    const resolvePaths = [
      ...(require.resolve.paths('') || []),
      path.dirname(configPath),
    ];
    for (const prop of importableProperties) {
      const propVal = config[prop];
      if (typeof propVal !== 'string') continue;
      const importPath = require.resolve(propVal, { paths: resolvePaths });
      config[prop] = require(importPath);
    }
  }
  return { config, unparsed };
};

export function applyGeneralOptions(cmd: Cmd) {
  cmd
    .option('--debug', 'Print debug messages to stdout')
    .option('--verbose', 'Print cli messages to stdout')
    .option('-c --config <config>', 'Path to I18nUtil config');
}
