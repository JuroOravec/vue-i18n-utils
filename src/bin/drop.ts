import { Command, CommandOptions } from 'commander';
import flatten from 'lodash.flatten';

import type { IDefinition } from '../lib/definition/types';
import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { DefinitionArray, DefinitionItem } from '../lib/definition';
import { ItemArray } from '../lib/item';
import { loadFromCli } from './lib/load-from-cli';
import { collect } from './lib/util';
import { processVariadicArgs } from './lib/variadic-args';
import { applyOptions } from './lib/options';
import { applyGeneralOptions } from './lib/options-general';
import { applyItemOptions } from './lib/options-item';
import { applyAuxFilesOptions } from './lib/options-aux-files';

export function createDropCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('drop <path...>')
    .version(version)
    .description('Remove keys from files.')
    .option(
      '-r --remove <key> [locale]',
      'Remove single key. Optionally specify locale. (repeatable)',
      collect,
      [],
    )
    .allowUnknownOption()
    .action(
      loadFromCli(
        {
          program,
          auxFiles: true,
          customArg: {
            flags: ['-r', '--remove'],
            cmdName: 'drop',
            requiredArgCount: 1,
            optionalArgCount: 1,
          },
        },
        ({
          i18nUtil,
          defItems,
          unknownOpts,
          customArgs: removeArgs,
          auxDefItems: dropDefItems,
          auxUseItems: dropUseItems,
        }) => {
          // If items came from usage file, they contain info only on the keys,
          // so we copy that item to each locale
          const locales = ItemArray.uniqProp(
            [...defItems, ...dropDefItems],
            'locale',
          );
          const dropDefsFromUsage = flatten(
            locales.map((locale) =>
              dropUseItems.map(
                ({ path, value }) =>
                  new DefinitionItem({ locale, path, value }),
              ),
            ),
          );
          const dropDefsFromFiles = [...dropDefsFromUsage, ...dropDefItems];

          // To faithfully resolve values passed from command line using various
          // resolvers, we pass parsed items without the items dropped as specified
          // by other files. This way the resolved items can be aware of all changes
          // except the items from cli.
          // To achieve that we subtract the items from files first.
          const subtractDefs = DefinitionArray.difference(
            defItems,
            dropDefsFromFiles,
            { hashType: 'localeToken' },
          );

          // Resolve string values from cli and process these args into definitions
          const resolvedArgResults = processVariadicArgs(
            subtractDefs.items,
            removeArgs,
            {
              resolvers: [
                (items, keys) => i18nUtil.resolveKeys(items, keys, unknownOpts),
                (items, lcls) =>
                  i18nUtil.resolveLocales(items, lcls, unknownOpts),
              ],
            },
          ) as [string[][], string[]][];
          const dropDefsFromCli = [] as IDefinition.Item[];
          for (const [
            removePaths = [],
            addLocales = locales,
          ] of resolvedArgResults) {
            for (const path of removePaths) {
              for (const locale of addLocales) {
                dropDefsFromCli.push(new DefinitionItem({ path, locale }));
              }
            }
          }

          i18nUtil
            .dropFrom(defItems, { hashType: 'localeToken' })
            .loadFromItems([...dropDefsFromFiles, ...dropDefsFromCli]);
        },
      ),
    );

  applyOptions(cmd, [
    [applyGeneralOptions],
    [applyItemOptions],
    [
      applyAuxFilesOptions,
      { desc: 'for locales & keys to be removed from the target files' },
    ],
  ]);

  cmd.on('--help', () => {
    console.log('');
    console.log('Notes:');
    console.log('  Positional args:');
    console.log(
      '    If importing usage files as positional args (or using the ' +
        '`--usage-file`\n' +
        '    flag), these files are used solely for filtering and do not ' +
        'otherwise impact\n' +
        '    which keys are dropped.',
    );
    console.log('  Options:');
    console.log(
      '    Any extra options specified as `--opt-name value`, ' +
        '`--no-opt-name` or\n' +
        '    `--yes-opt-name` are passed along as ' +
        '`optName: value|false|true`.',
    );
    console.log('  Importing keys:');
    console.log(
      '    If importing keys to drop from definition files, keys are removed ' +
        'based on\n' +
        '    locales and keys.\n' +
        '    If importing key to drop from usage files, keys are removed from ' +
        'all locales\n' +
        '    and with null value.',
    );
  });
  return cmd;
}

if (require.main === module) {
  createDropCmd().parse(process.argv);
}
