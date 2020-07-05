import fromPairs from 'lodash.frompairs';

import type { UnwrapPromise } from '../../types';
import type { I_I18nUtil } from '../../lib/i18n-util/types';
import type { IDefinition } from '../../lib/definition/types';
import type { IUsage } from '../../lib/usage/types';
import type { Cmd } from './types';
import { I18nUtil } from '../../lib/i18n-util';
import { parseUnknownArgs } from './options';
import { findMap } from '../../lib/util/array';
import { parseVariadicArg } from './variadic-args';
import { splitObject, intersectionObject } from './util';
import { processItemOptions } from './options-item';
import { processGeneralOptions } from './options-general';
import { processAuxFilesOptions } from './options-aux-files';

export function loadFromCli<A extends string, R extends any>(
  options: {
    program?: Cmd;
    args?: A[];
    customArg?: Omit<
      Parameters<typeof parseVariadicArg>[3] & { flags: string[] },
      'cmd' | 'option'
    >;
    auxFiles?: boolean;
  } = {},
  callback: (options: {
    opts: { [key: string]: any };
    unknownOpts: { [key: string]: any };
    customArgs: string[][];
    i18nUtil: I_I18nUtil.I18nUtil;
    defItems: IDefinition.Item[];
    useItems: IUsage.Item[];
    auxDefItems: IDefinition.Item[];
    auxUseItems: IUsage.Item[];
  }) => R extends Promise<any> ? Promise<UnwrapPromise<R>> : R,
) {
  return async function (posArgs: string[], cmd: Cmd) {
    const {
      program = cmd,
      args: knownArgs = [],
      customArg,
      auxFiles,
    } = options;
    const [knownOpts, otherOpts] = splitObject(cmd.opts(), knownArgs);

    // Since commander supports only single value per option, we parse the args
    // once more and separate out positional args from option args
    const { remainArgs, parsedArgs: customArgs } = customArg
      ? parseVariadicArg(program, posArgs, customArg.flags, {
          ...customArg,
          cmd,
          option: findMap(customArg.flags, (flag) => cmd._findOption(flag)),
        })
      : { remainArgs: posArgs, parsedArgs: [] };

    const { known: paths, unknown } = parseUnknownArgs(remainArgs);
    const { config, unparsed: nonGenOpts } = processGeneralOptions(otherOpts);
    const i18nUtil = new I18nUtil(config);

    // Get items as specified by positional args. These are the items targetted
    // by the command.
    const {
      defItems,
      useItems,
      unparsed: nonItemOpts,
    } = await processItemOptions(i18nUtil, paths, nonGenOpts as any);

    // Some commands allow to specify additional def / use files whose values
    // help to prepare conditions under which the target items will be changed.
    const {
      defItems: auxDefItems,
      useItems: auxUseItems,
      unparsed: nonAuxOpts,
    } = auxFiles
      ? await processAuxFilesOptions(i18nUtil, [], nonGenOpts as any)
      : { defItems: [], useItems: [], unparsed: {} };

    // Since user may specify custom components (DI) in the config, we pass
    // all remaining options along so it can reach those components.
    const unknownOpts = {
      ...intersectionObject(otherOpts, nonItemOpts, nonAuxOpts),
      ...fromPairs(unknown),
    };

    return callback({
      opts: knownOpts,
      unknownOpts,
      customArgs,
      i18nUtil,
      defItems,
      useItems,
      auxDefItems,
      auxUseItems,
    });
  };
}
