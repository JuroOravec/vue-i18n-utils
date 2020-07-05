import { Command, CommandOptions } from 'commander';

import type { IDefinition } from '../lib/definition/types';
import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { I18nItemArray } from '../lib/adaptors/i18n';
import { loadFromCli } from './lib/load-from-cli';
import { applyOptions } from './lib/options';
import { applyGeneralOptions } from './lib/options-general';
import { applyItemOptions } from './lib/options-item';
import { applyOutputOptions } from './lib/options-output';

export function createExportCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('export <path...>')
    .version(version)
    .description('Export keys defined or used in files.')
    .option(
      '-e --expand',
      'If set, exported data has values replaced with objects with additional ' +
        'metadata. Such files can be used in other commands as any other ' +
        `definition files. By default, output file must end with '.i18n.json',` +
        ` '.i18n.yaml' or 'i18n.yml'`,
    )
    .option(
      '-a --array',
      'If set, the data is exported as array instead of nested object. Takes' +
        `priority over '--join' flag`,
    )
    .option(
      '-j --join',
      'If set, the exported data is not scoped by locales. Instead, each value' +
        'is replaced with an array of values defined across all locales for ' +
        'that particular key.',
    )
    .allowUnknownOption()
    .action(
      loadFromCli(
        { program, args: ['output', 'expand', 'array', 'join'] },
        async ({ i18nUtil, defItems, useItems, opts, unknownOpts }) => {
          const { output, expand, array: asArray, join: merge } = opts;

          const simple = !expand;

          const items = I18nItemArray.exportItems(
            [...defItems, ...useItems],
            output,
          );

          await i18nUtil.write(items as IDefinition.Item[], {
            ...unknownOpts,
            simple,
            asArray,
            merge,
          });
        },
      ),
    );

  applyOptions(cmd, [
    [applyGeneralOptions],
    [applyItemOptions],
    [
      applyOutputOptions,
      {
        desc: 'Output file where keys are written.',
        required: true,
      },
    ],
  ]);

  cmd.on('--help', () => {
    console.log('');
    console.log('Notes:');
    console.log('  Options:');
    console.log(
      '    Any extra options specified as `--opt-name value`, ' +
        '`--no-opt-name` or\n' +
        '    `--yes-opt-name` are passed along as ' +
        '`optName: value|false|true`.',
    );
  });

  return cmd;
}

if (require.main === module) {
  createExportCmd().parse(process.argv);
}
