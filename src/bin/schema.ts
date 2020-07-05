import { promises as fsp } from 'fs';
import { Command, CommandOptions } from 'commander';

import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { loadFromCli } from './lib/load-from-cli';
import { applyOptions } from './lib/options';
import { applyItemOptions } from './lib/options-item';
import { applyGeneralOptions } from './lib/options-general';
import { applyOutputOptions } from './lib/options-output';

export function createSchemaCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('schema <path...>')
    .version(version)
    .description('Create schema from keys.')
    .option(
      '-s --scope <locale | master>',
      'Schema scope. If `locale`, schema describes only keys. If `master`, ' +
        'schema describes an object of keys under multiple locales. Default: ' +
        'locale',
      'locale',
    )
    .allowUnknownOption(true)
    .action(
      loadFromCli(
        { program, args: ['output'] },
        async ({ i18nUtil, defItems, useItems, opts, unknownOpts }) => {
          const { output } = opts;

          const items = [...defItems, ...useItems];

          const schema = await i18nUtil.schema(items, unknownOpts);
          const schemaSer = await i18nUtil.schemator.serialize(
            schema,
            unknownOpts,
          );

          await fsp.writeFile(output, schemaSer);
        },
      ),
    );

  applyOptions(cmd, [
    [applyGeneralOptions],
    [applyItemOptions, { desc: 'to generate schema' }],
    [
      applyOutputOptions,
      {
        desc: 'Output file where schema is written.',
        required: true,
      },
    ],
  ]);

  cmd.on('--help', () => {
    console.log('');
    console.log('Notes:');
    console.log('  Positional args:');
    console.log(
      '    If importing usage files as positional args (or using the ' +
        '`--usage-file`\n' +
        '    flag), these files are used solely for filtering.',
    );
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
  createSchemaCmd().parse(process.argv);
}
