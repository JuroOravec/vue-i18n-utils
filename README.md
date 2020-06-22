# i18n-util

---

Translation (i18n) file management.

Supports:

- read / write:
  - single-source or compartmentalized files
  - locale-scoped or multi-locale files
- add/remove/update keys / values / locales across multiple files
- import - apply updates from single file to across multiple files
- export - combine data from across multiple files to single output
- creating schemas from selected keys
- validation - against duplicates, missing value, unused values, or schemas
- extensible - works with json / yaml / vue-i18n and can be extended

## Usage

```txt
Usage: npx i18n-util [options] [command]

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  drop [options] <path...>      Remove keys from files.
  patch [options] <path...>     Add keys to files.
  list [options] <path...>      Display keys defined or used in files.
  export [options] <path...>    Export keys defined or used in files.
  locale [options] <path...>    Add, remove or clear values of keys that match locales.
  schema [options] <path...>    Create schema from keys. Any extra options specified as `--opt-name value`, `--no-opt-name` or `--yes-opt-name` are passed along as `optName:
                                value|false|true`.
  validate [options] <path...>  Validate keys against schema from file or schema generated from parsing other files. Any extra options specified as `--opt-name value`,
                                `--no-opt-name` or `--yes-opt-name` are passed along as `optName: value|false|true`.
  help [command]                display help for command
```

Each command accepts following filtering options:

```txt
  -k --key <key>                 Select individual keys. (repeatable) (default: [])
  -xk --exclude-key <key>        Exclude individual keys. (repeatable) (default: [])
  -l --locale <locale>           Select keys that match locale. (repeatable) (default: [])
  -xl --exclude-locale <locale>  Exclude keys that match locale. (repeatable) (default: [])
  -v --value <value>             Select keys that match value. (repeatable) (default: [])
  -xv --exclude-value <key>      Exclude keys that match value. (repeatable) (default: [])
  -m --missing                   Select keys that have missing items (either items with null value or missing locale variants).
  -xm --exclude-missing          Exclude keys that have missing items (either items with null value or missing locale variants).
  -n --missing-value <value>     Value to be interpreted as missing value (default `null`)
  -u --used                      Select keys that are used in files at least one.
  -xu --exclude-used             Exclude keys that are used in files at least one.
  --unused                       Alias for `--exclude-used`.
  -d --defined                   Select keys that have a value defined at least one locale.
  -xd --exclude-defined          Exclude keys that have a value defined at least one locale.
  -D --undefined                 Alias for `--exclude-defined`.
  -i --issues                    Select keys that have at least one issue (missing definitions or usage).
  -xi --exclude-issues           Exclude keys that have at least one issue (missing definitions or usage).
```

And general options:

```txt
  -V, --version                  output the version number
  --debug                        Print debug messages to stdout
  --verbose                      Print cli messages to stdout
  -c --config <config>           Path to I18nUtil config
  --as-usage                     Interpret positional arguments as usage files instead of definition files.
  -df --def-file <file>          Definitions file. Use this flag to specify def file when `--usage` flag is on (repeatable) (default: [])
  -uf --usage-file <file>        Usage file. Use this flag to specify usage file when`--usage` flag is off (repeatable) (default: [])
```

**Full documentation coming soon.**

## 📝 License

Copyright © 2020 [Juro Oravec](https://github.com/JuroOravec).

This project is [MIT](https://tldrlegal.com/license/mit-license) licensed.
