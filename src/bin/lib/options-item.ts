import type { I_I18nUtil } from '../../lib/i18n-util/types';
import type { IDefinition } from '../../lib/definition/types';
import type { IUsage } from '../../lib/usage/types';
import type { I_Item } from '../../lib/item/types';
import type { Cmd } from './types';
import { DefinitionArray } from '../../lib/definition';
import { ItemArray } from '../../lib/item';
import { collect } from './util';

/**
 * Apply options that allow to select and filter definition and usage items
 */
export function applyItemOptions(
  cmd: Cmd,
  options: { desc?: string } = {},
): void {
  const { desc } = options;
  const purposeMsg = desc ? ' ' + desc : '';
  cmd
    // Options that affect how and what files are parsed
    .option(
      '--as-usage',
      'Interpret positional arguments as usage files instead ' +
        'of definition files.',
    )
    .option(
      '-df --def-file <file>',
      `Definitions file${purposeMsg}. Use this flag to specify def file ` +
        'when `--usage` flag is on (repeatable)',
      collect,
      [],
    )
    .option(
      '-uf --usage-file <file>',
      `Usage file${purposeMsg}. Use this flag to specify usage file when` +
        '`--usage` flag is off (repeatable)',
      collect,
      [],
    )
    // Options that are used to filter both definition and usage items
    .option(
      '-k --key <key>',
      'Select individual keys. (repeatable)',
      collect,
      [],
    )
    .option(
      '-xk --exclude-key <key>',
      'Exclude individual keys. (repeatable)',
      collect,
      [],
    )
    // Options that are used to filter definition items
    .option(
      '-l --locale <locale>',
      'Select keys that match locale. (repeatable)',
      collect,
      [],
    )
    .option(
      '-xl --exclude-locale <locale>',
      'Exclude keys that match locale. (repeatable)',
      collect,
      [],
    )
    .option(
      '-v --value <value>',
      'Select keys that match value. (repeatable)',
      collect,
      [],
    )
    .option(
      '-xv --exclude-value <key>',
      'Exclude keys that match value. (repeatable)',
      collect,
      [],
    )
    .option(
      '-m --missing',
      'Select keys that have missing items (either items with null value or ' +
        'missing locale variants).',
    )
    .option(
      '-xm --exclude-missing',
      'Exclude keys that have missing items (either items with null value or ' +
        'missing locale variants).',
    )
    .option(
      '-n --missing-value <value>',
      'Value to be interpreted as missing value (default `null`)',
    )
    // Options that are used to filter usage and definition items given that
    // both are present.
    .option('-u --used', 'Select keys that are used in files at least one.')
    .option(
      '-xu --exclude-used',
      'Exclude keys that are used in files at least one.',
    )
    .option('--unused', 'Alias for `--exclude-used`.')
    .option(
      '-d --defined',
      'Select keys that have a value defined at least one locale.',
    )
    .option(
      '-xd --exclude-defined',
      'Exclude keys that have a value defined at least one locale.',
    )
    .option('-D --undefined', 'Alias for `--exclude-defined`.')
    .option(
      '-i --issues',
      'Select keys that have at least one issue (missing definitions or usage).',
    )
    .option(
      '-xi --exclude-issues',
      'Exclude keys that have at least one issue (missing definitions or usage).',
    );
}

export async function processItemOptions<
  T extends {
    asUsage?: boolean;
    defFile: string[];
    usageFile: string[];
    key: string[];
    excludeKey: string[];
    locale: string[];
    excludeLocale: string[];
    value: string[];
    excludeValue: string[];
    missingValue?: string;
    missing?: boolean;
    excludeMissing?: boolean;
    used?: boolean;
    excludeUsed?: boolean;
    unused?: boolean;
    defined?: boolean;
    excludeDefined?: boolean;
    undefined?: boolean;
    issues?: boolean;
    excludeIssues?: boolean;
  }
>(i18nUtil: I_I18nUtil.I18nUtil, paths: string[], options: T) {
  // Separate known options consumed by child functions from unknown
  // which may be directed to the downstream adaptors.
  const {
    asUsage,
    defFile: defFiles,
    usageFile: usageFiles,
    key,
    excludeKey,
    locale,
    excludeLocale,
    value,
    excludeValue,
    missingValue,
    missing,
    excludeMissing,
    used,
    excludeUsed,
    unused,
    defined,
    excludeDefined,
    undefined: undef,
    issues,
    excludeIssues,
    ...unknownOpts
  } = options;

  const defOptions = {
    key,
    excludeKey,
    locale,
    excludeLocale,
    value,
    excludeValue,
    missingValue,
    missing,
    excludeMissing,
  };

  const usageOptions = {
    key,
    excludeKey,
  };

  const keyOptions = {
    used,
    excludeUsed,
    unused,
    defined,
    excludeDefined,
    undefined: undef,
    issues,
    excludeIssues,
  };

  const defPaths = [...(asUsage ? [] : paths), ...defFiles];
  const usePaths = [...(asUsage ? paths : []), ...usageFiles];

  const { items: defItems } = await processDefinitionOptions(
    i18nUtil,
    defPaths,
    {
      ...defOptions,
      ...unknownOpts,
    },
  );
  const { items: useItems } = await processUsageOptions(i18nUtil, usePaths, {
    ...usageOptions,
    ...unknownOpts,
  });

  const {
    defItems: finalDefItems,
    useItems: finalUseItems,
  } = processKeyOptions(i18nUtil, defItems, useItems, {
    ...keyOptions,
    ...unknownOpts,
  });

  return {
    defItems: finalDefItems,
    useItems: finalUseItems,
    unparsed: unknownOpts,
  };
}

export function processKeyOptions<
  T extends {
    used?: boolean;
    excludeUsed?: boolean;
    unused?: boolean;
    defined?: boolean;
    excludeDefined?: boolean;
    undefined?: boolean;
    issues?: boolean;
    excludeIssues?: boolean;
  }
>(
  i18nUtil: I_I18nUtil.I18nUtil,
  defItems: IDefinition.Item[],
  useItems: IUsage.Item[],
  options: T,
) {
  const {
    used,
    excludeUsed,
    unused,
    defined,
    excludeDefined,
    undefined: undef,
    issues,
    excludeIssues,
    ...unparsed
  } = options;

  const items = { def: defItems, use: useItems };

  const stats = i18nUtil.stats(items.def, items.use, unparsed);

  // Reduce the set based on combined conditions
  if (issues || excludeIssues) {
    if (issues && excludeIssues) {
      items.def = [];
      items.use = [];
    } else {
      const pathWithIssues = stats.keysIssues.map((key) => key.path);
      const mode = issues ? 'include' : 'exclude';

      items.def = ItemArray.filterByPaths<IDefinition.Item>(
        items.def,
        pathWithIssues,
        { mode },
      ).items;

      items.use = ItemArray.filterByPaths<IUsage.Item>(
        items.use,
        pathWithIssues,
        { mode },
      ).items;
    }
  }

  // Reduce the set based on def items' conditions
  if (used || excludeUsed || unused) {
    if (used && (excludeUsed || unused)) {
      items.def = [];
    } else {
      const usedPaths = stats.definitionsUsed.map((def) => def.path);
      const mode = used ? 'include' : 'exclude';

      items.def = ItemArray.filterByPaths<IDefinition.Item>(
        items.def,
        usedPaths,
        { mode },
      ).items;
    }

    // update usage items to match remaining def items
    items.use = ItemArray.filterByPaths<IUsage.Item>(
      items.use,
      ItemArray.prop(items.def, 'path'),
      { mode: 'include' },
    ).items;
  }

  // Reduce the set based on usage items' conditions
  if (defined || excludeDefined || undef) {
    if (defined && (excludeDefined || undef)) {
      items.use = [];
    } else {
      const definedPaths = stats.usageDefined.map((def) => def.path);
      const mode = defined ? 'include' : 'exclude';

      items.use = ItemArray.filterByPaths<IUsage.Item>(
        items.use,
        definedPaths,
        { mode },
      ).items;
    }

    // update def items to match remaining usage items
    items.def = ItemArray.filterByPaths<IDefinition.Item>(
      items.def,
      ItemArray.prop(items.use, 'path'),
      { mode: 'include' },
    ).items;
  }

  return { defItems: items.def, useItems: items.use, unparsed };
}

export async function processDefinitionOptions<
  T extends {
    key: string[];
    excludeKey: string[];
    locale: string[];
    excludeLocale: string[];
    value: string[];
    excludeValue: string[];
    missingValue?: string;
    missing?: boolean;
    excludeMissing?: boolean;
  }
>(i18nUtil: I_I18nUtil.I18nUtil, paths: string[], options: T) {
  const {
    missing,
    excludeMissing,
    missingValue,
    locale,
    excludeLocale,
    key,
    excludeKey,
    value,
    excludeValue,
    ...unknownOpts
  } = options;

  const defOpts = { ...unknownOpts } as I_I18nUtil.DefinitionOptions;
  // Unless we explicitly do not want missing values, include the missing
  // values parsed from files
  if (!excludeMissing) defOpts.includeMissing = true;
  if (missingValue !== undefined) defOpts.missingValue = missingValue;

  const items = await i18nUtil.definitions(paths, defOpts);
  return filterDefinitions(i18nUtil, items, options);
}

export async function filterDefinitions<
  T extends {
    key: string[];
    excludeKey: string[];
    locale: string[];
    excludeLocale: string[];
    value: string[];
    excludeValue: string[];
    missingValue?: string;
    missing?: boolean;
    excludeMissing?: boolean;
  }
>(i18nUtil: I_I18nUtil.I18nUtil, items: I_Item.ItemArrayLike, options: T) {
  const {
    missingValue,
    missing,
    excludeMissing,
    locale,
    excludeLocale,
    key,
    excludeKey,
    value,
    excludeValue,
    ...unknownOpts
  } = options;

  let itemArr = new DefinitionArray(items as IDefinition.Item[]);

  if (missing || excludeMissing) {
    if (missing) {
      const missingItems = i18nUtil.missingItems(
        itemArr,
        missingValue !== undefined ? { missingValue } : {},
      );
      itemArr.push(...missingItems);
    }

    const mode = excludeMissing ? 'exclude' : 'include';
    itemArr = itemArr.filterMissing({ mode });
  }

  if (locale.length) {
    const locales = await i18nUtil.resolveLocales(
      itemArr.items,
      locale,
      unknownOpts,
    );
    itemArr = itemArr.filterByLocales(locales, { mode: 'include' });
  }

  if (excludeLocale.length) {
    const locales = await i18nUtil.resolveLocales(
      itemArr.items,
      excludeLocale,
      unknownOpts,
    );
    itemArr = itemArr.filterByLocales(locales, { mode: 'exclude' });
  }

  if (key.length) {
    const paths = await i18nUtil.resolveKeys(itemArr.items, key, unknownOpts);
    itemArr = itemArr.filterByPaths(paths, { mode: 'include' });
  }

  if (excludeKey.length) {
    const paths = await i18nUtil.resolveKeys(
      itemArr.items,
      excludeKey,
      unknownOpts,
    );
    itemArr = itemArr.filterByPaths(paths, { mode: 'exclude' });
  }

  if (value.length) {
    const values = await i18nUtil.resolveValues(
      itemArr.items,
      value,
      unknownOpts,
    );
    itemArr = itemArr.filterByValues(values, { mode: 'include' });
  }

  if (excludeValue.length) {
    const values = await i18nUtil.resolveValues(
      itemArr.items,
      excludeValue,
      unknownOpts,
    );
    itemArr = itemArr.filterByValues(values, { mode: 'exclude' });
  }

  return { items: itemArr.items, unparsed: unknownOpts };
}

async function processUsageOptions<
  T extends {
    key: string[];
    excludeKey: string[];
  }
>(i18nUtil: I_I18nUtil.I18nUtil, paths: string[], options: T) {
  const { key, excludeKey, ...unparsed } = options;

  const useOpts = { ...unparsed } as I_I18nUtil.UsageOptions;
  let items = new ItemArray(await i18nUtil.usage(paths, useOpts));

  if (key.length) {
    const paths = await i18nUtil.resolveKeys(items.items, key, unparsed);
    items = items.filterByPaths(paths, { mode: 'include' });
  }

  if (excludeKey.length) {
    const paths = await i18nUtil.resolveKeys(items.items, excludeKey, unparsed);
    items = items.filterByPaths(paths, { mode: 'exclude' });
  }

  return { items: items.items, unparsed };
}
