import { Command, CommandOptions } from 'commander';
import flatten from 'lodash.flatten';

import type { I_I18nUtil } from '../lib/i18n-util/types';
import type { IDefinition } from '../lib/definition/types';
import type { Cmd } from './lib/types';
import { version } from '../lib/util/package-info';
import { DefinitionArray, DefinitionItem } from '../lib/definition';
import { ItemArray } from '../lib/item';
import { collect } from './lib/util';
import { loadFromCli } from './lib/load-from-cli';
import { processVariadicArgs } from './lib/variadic-args';
import { applyGeneralOptions } from './lib/options-general';
import { applyOptions } from './lib/options';
import { applyItemOptions } from './lib/options-item';
import { applyAuxFilesOptions } from './lib/options-aux-files';

export function createPatchCmd(program?: Cmd, options: CommandOptions = {}) {
  const createCmd = (s: string) =>
    program ? program.command(s, options) : new Command(s);
  const cmd = createCmd('patch <path...>')
    .version(version)
    .description('Add keys to files.')
    .option(
      '-a --add <key> <value> [locale]',
      'Add single key. Optionally specify locale. (repeatable)',
      collect,
      [],
    )
    .option(
      '-s --sink <path>',
      "Path to 'sink' file. All unmatched definitions are written to this " +
        'file. Unmatched definitions are ignored if sink is not provided.',
    )
    .allowUnknownOption()
    .action(
      loadFromCli(
        {
          program,
          auxFiles: true,
          args: ['sink'],
          customArg: {
            flags: ['-a', '--add'],
            cmdName: 'patch',
            requiredArgCount: 2,
            optionalArgCount: 1,
          },
        },
        ({
          i18nUtil,
          defItems,
          opts,
          unknownOpts,
          customArgs: addArgs,
          auxDefItems: patchDefItems,
          auxUseItems: patchUseItems,
        }) => {
          const { sink } = opts;
          const addUnmatched = Boolean(sink);

          // If items came from usage file, they contain info only on the keys, (value
          // is missing / null value) so we copy that item to each locale.
          const locales = ItemArray.uniqProp(
            [...defItems, ...patchDefItems],
            'locale',
          );
          const patchDefItemsFromUsage = flatten(
            locales.map((locale) =>
              patchUseItems.map(
                ({ path, value }) =>
                  new DefinitionItem({
                    locale,
                    path,
                    value,
                  }) as IDefinition.Item,
              ),
            ),
          );
          // Join items from def and use files, and keep values from def files.
          // This is part of the set of values that we will patch to targets.
          const patcherItemsFromFiles = DefinitionArray.updateBy(
            patchDefItemsFromUsage,
            patchDefItems,
            {
              hashType: 'localeToken',
              addUnmatched: true,
              updater: (oldItem, newItem) => newItem,
            },
          ).items;

          const updateOpts: I_I18nUtil.PatchToOptions<IDefinition.Item> = {
            hashType: 'localeToken',
            updater: 'value',
            addUnmatched,
            sink,
            itemFactory: (key, items) => {
              const {
                locale,
                path,
                value,
                source,
              } = items[0] as IDefinition.Item;
              return new DefinitionItem({ locale, path, value, source });
            },
          };

          // To faithfully resolve values passed from command line using various
          // resolvers, we pass parsed items - including items that were added in
          // this function from other files - to them. This way the resolved items
          // can be aware of all items except the items from cli.
          // To achieve that we merge items from files first.
          const mergedDefs = DefinitionArray.update(
            defItems,
            patcherItemsFromFiles.items,
            updateOpts,
          ).items;

          // Resolve string values from cli and process these args into definitions
          const resolvedArgResults = processVariadicArgs(
            mergedDefs.items,
            addArgs,
            {
              resolvers: [
                (items, keys) => i18nUtil.resolveKeys(items, keys, unknownOpts),
                (items, vals) =>
                  i18nUtil.resolveValues(items, vals, unknownOpts),
                (items, lcls) =>
                  i18nUtil.resolveLocales(items, lcls, unknownOpts),
              ],
            },
          ) as [string[][], any[], string[]][];
          const patcherItemsFromCli = [] as IDefinition.Item[];
          for (const [
            addPaths,
            [value],
            addLocales = locales,
          ] of resolvedArgResults) {
            for (const path of addPaths) {
              for (const locale of addLocales) {
                patcherItemsFromCli.push(
                  new DefinitionItem({ path, value, locale }),
                );
              }
            }
          }

          // Lastly we merge the items from cli to the merged items from files.
          const patcherItems = DefinitionArray.update(
            patcherItemsFromFiles,
            patcherItemsFromCli,
            updateOpts,
          ).items;

          // We use `patchTo` to autofill the `source` prop if `sink` arg given.
          i18nUtil.patchTo(defItems, updateOpts).loadFromItems(patcherItems);
        },
      ),
    );

  applyOptions(cmd, [
    [applyGeneralOptions],
    [applyItemOptions],
    [
      applyAuxFilesOptions,
      {
        desc: 'for locales, keys and values to be applied to the patched files',
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
        '    flag), these files are used solely for filtering and do not ' +
        'otherwise impact\n' +
        '    which keys are patched nor their value.',
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
      '    If importing keys from definition files, values are set based on ' +
        'locales and\n' +
        '    keys.\n' +
        '    If importing from usage files, keys are patched to all locales ' +
        'and with null\n' +
        '    value.',
    );
  });

  return cmd;
}

if (require.main === module) {
  createPatchCmd().parse(process.argv);
}
