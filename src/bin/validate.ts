import { promises as fsp } from 'fs';
import { Command, CommandOptions } from 'commander';

import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { collect } from './lib/util';
import { loadFromCli } from './lib/load-from-cli';
import { applyOptions } from './lib/options';
import { applyItemOptions } from './lib/options-item';
import { applyGeneralOptions } from './lib/options-general';
import { applyAuxFilesOptions } from './lib/options-aux-files';
import { pMap } from '../lib/util/array';

export function createValidateCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('validate <path...>')
    .version(version)
    .description(
      'Validate keys against schema from file or schema generated from ' +
        'parsing other files.',
    )
    .option(
      '-f --file <file>',
      'Schema file to validate against. (repeatable)',
      collect,
      [],
    )
    .allowUnknownOption(true)
    .action(
      loadFromCli(
        { program, auxFiles: true, args: ['file'] },
        async ({
          i18nUtil,
          defItems,
          useItems,
          opts,
          unknownOpts,
          auxDefItems: schemaDefItems,
          auxUseItems: schemaUseItems,
        }) => {
          const { file: schemaFiles } = opts;
          const items = [...defItems, ...useItems];

          // First validate against already-existing schemas, so that if any of them
          // fails, we don't have to waste time by constructing schema by parsing
          // (possibly many) other files.
          await pMap(schemaFiles as string[], async (schemaFile) => {
            const schemaContent = await fsp.readFile(schemaFile, 'utf-8');
            const schema = await i18nUtil.schemator.deserialize(
              schemaContent,
              unknownOpts,
            );

            await i18nUtil.validate(items, schema, unknownOpts);
          });

          // Parse all provided files to generate a schema that will be used to
          // validate the items.
          const schema = await i18nUtil.schema(
            [...schemaDefItems, ...schemaUseItems],
            unknownOpts,
          );

          await i18nUtil.validate(items, schema, unknownOpts);
        },
      ),
    );

  applyOptions(cmd, [
    [applyGeneralOptions],
    [applyItemOptions, { desc: 'to be validated' }],
    [applyAuxFilesOptions, { desc: 'to generate schema to validate against' }],
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
  createValidateCmd().parse(process.argv);
}
