import type { I_I18nUtil } from '../../lib/i18n-util/types';
import type { Cmd } from './types';
import { processItemOptions } from './options-item';
import { collect } from './util';

export async function processAuxFilesOptions<
  T extends {
    auxDefFile: string[];
    auxUsageFile: string[];
  }
>(i18nUtil: I_I18nUtil.I18nUtil, paths: string[], options: T) {
  const {
    auxDefFile: auxDefFiles,
    auxUsageFile: auxUsageFiles,
    ...opts
  } = options;

  // Parse all provided files to generate a schema that will be used to
  // validate the items.
  const { defItems, useItems, unparsed } = await processItemOptions(
    i18nUtil,
    paths,
    {
      ...(opts as any),
      defFile: auxDefFiles,
      usageFile: auxUsageFiles,
    },
  );
  return { defItems, useItems, unparsed };
}

/**
 * Apply options that allow to provide def and usage files that should be used
 * for something else than being the target of the command.
 */
export function applyAuxFilesOptions(
  cmd: Cmd,
  options: { desc?: string } = {},
): void {
  const { desc } = options;
  const purposeMsg = desc ? ' ' + desc : '';
  cmd
    .option(
      '-adf --aux-def-file <file>',
      `Definitions file parsed${purposeMsg}. ` + '(repeatable)',
      collect,
      [],
    )
    .option(
      '-auf --aux-usage-file <file>',
      `Usage file parsed${purposeMsg}. (repeatable)`,
      collect,
      [],
    );
}
