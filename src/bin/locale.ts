import { Command, CommandOptions } from 'commander';

import type { Cmd } from './lib/types';
import { cliDebug } from '../lib/util/debug';
import { version } from '../lib/util/package-info';
import { collect } from './lib/util';
import { loadFromCli } from './lib/load-from-cli';
import { applyOptions } from './lib/options';
import { applyGeneralOptions } from './lib/options-general';
import { applyItemOptions } from './lib/options-item';

export function createLocaleCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('locale <path...>')
    .version(version)
    .description('Add, remove or clear values of keys that match locales.')
    .option(
      '-a --add <locale>',
      'Add new locale to existing keys. (repeatable)',
      collect,
      [],
    )
    .option(
      '-r --remove <locale>',
      'Remove keys that match locale. (repeatable)',
      collect,
      [],
    )
    .option(
      '-C --clear <locale>',
      'Reset values of keys that match locale. (repeatable)',
      collect,
      [],
    )
    .action(
      loadFromCli(
        { program, args: ['add', 'clear', 'remove'] },
        ({ i18nUtil, defItems, opts, unknownOpts }) => {
          const { add, clear, remove } = opts;

          if (add.length) {
            cliDebug(`Adding locales: ${add}`);
            i18nUtil.addLocales(defItems, add, unknownOpts);
          }

          if (clear.length) {
            cliDebug(`Clearing locales: ${clear}`);
            i18nUtil.clearLocales(defItems, clear, unknownOpts);
          }

          if (remove.length) {
            cliDebug(`Removing locales: ${remove}`);
            i18nUtil.removeLocales(defItems, remove, unknownOpts);
          }
        },
      ),
    );

  applyOptions(cmd, [[applyGeneralOptions], [applyItemOptions]]);

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
  createLocaleCmd().parse(process.argv);
}
