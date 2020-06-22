const Table = require('cli-table3');
import { Command, CommandOptions } from 'commander';

import type { Cmd } from './lib/types';
import { calcColWidths, breakWords } from './lib/table';
import { loadFromCli } from './lib/load-from-cli';
import { version } from '../lib/util/package-info';
import { applyGeneralOptions } from './lib/options-general';
import { applyItemOptions } from './lib/options-item';
import { applyOptions } from './lib/options';

export function createListCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('list <path...>')
    .version(version)
    .description('Display keys defined or used in files.')
    .allowUnknownOption()
    .action(
      loadFromCli(
        { program },
        ({ i18nUtil, defItems, useItems, unknownOpts }) => {
          const stats = i18nUtil.stats(defItems, useItems, unknownOpts);
          const table = new Table({
            head: [
              'Key',
              'Locales',
              'Missing Locales',
              'Duplicates',
              'Used Times',
              'Defined in',
              'Used in',
            ],
            style: { head: [] },
            wordWrap: true,
          });

          table.push(
            ...stats.keys.map((key) => [
              key.path.join('.'),
              key.localesUsed.join(', '),
              key.localesMissing.join(', '),
              [...key.definitionsDuplicates.entries()]
                .map(([k, v]) => `${k}(${v.length})`)
                .join(', '),
              key.usage.length.toString(),
              key.definitionsFiles.join('\n'),
              key.usageFiles.join('\n'),
            ]),
          );
          table.options.colWidths = calcColWidths(table, {
            min: [5, 5, 5, 5, 1, 10, 10],
            max: [null, 10, 10, 12, 5],
          });

          const formattedTable = breakWords(table);
          console.log(formattedTable.toString());
        },
      ),
    );

  applyOptions(cmd, [[applyGeneralOptions], [applyItemOptions]]);

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
  createListCmd().parse(process.argv);
}
