import isEmpty from 'lodash.isempty';
import path from 'path';

import { JsonYamlFileAdaptor } from './lib/file-adaptor-json-yaml';
import { parserVue } from './lib/file-adaptor-vue';
import { I18nUtil } from './lib/i18n-util';
import { ExtractItem } from './lib/extract-item';

export default function run() {
  const i18nUtil = new I18nUtil();
  i18nUtil.addFileAdaptors([
    {
      name: 'vue-parser',
      patterns: [/\.vue$/iu],
      methods: {
        parser: parserVue,
      },
    },
    {
      name: 'json-yaml-parser',
      patterns: [/\.json$/iu, /\.ya?ml$/iu],
      methods: new JsonYamlFileAdaptor(),
      options: {
        locale: (block: ExtractItem, options: any) => {
          const filename = path.parse(block.source).name;
          if (filename.length === 2) return { [filename]: block.value };
          return block.value;
        },
      },
    },
  ]);

  const extracts = i18nUtil.extract(['temp/src/**/*.{json,yaml,yml}'], {
    // parser: { ignore: ['**/messages_TEMP/**', 'keys'] },
  });
  // Master object contains all keys that are used in any of the locales
  const master = i18nUtil.masterFromExtracts(extracts, {
    simple: true,
  });

  console.log(extracts);
  console.dir(master, { depth: null });

  if (isEmpty(master)) {
    console.log('No locales found.');
    process.exit(0);
  }

  // Schema generates schema for all unique keys defined in any locale.
  const schema = i18nUtil.schemaFromExtracts(extracts);
  console.dir(schema, { depth: null });
  // console.log(JSON.stringify(schema, null, 2));

  i18nUtil.addFileAdaptor;
  i18nUtil.addFileAdaptors;
  i18nUtil.removeFileAdaptor;
  i18nUtil.removeFileAdaptors;
  i18nUtil.effectiveOptions;
  i18nUtil.extract;
  i18nUtil.write;
  i18nUtil.patch;
  i18nUtil.patchFromExtracts;
  i18nUtil.patchFromObjects;
  i18nUtil.patchFromFiles;
  i18nUtil.locale;
  i18nUtil.localeFromExtracts;
  i18nUtil.localeFromObjects;
  i18nUtil.master;
  i18nUtil.masterFromExtracts;
  i18nUtil.masterFromObjects;
  i18nUtil.schema;
  i18nUtil.schemaFromExtracts;
  i18nUtil.schemaFromObjects;
  i18nUtil.validate;
  i18nUtil.validateFromFiles;
  i18nUtil.validateFromExtracts;
  i18nUtil.validateFromObjects;
  i18nUtil.stats; // generate master, merge and join all existing translations together
  i18nUtil.missingKeys; // => generate master with null, then look for all nulls
  i18nUtil.usage; // => 

// simple
master {
  en {
    some {
      path: "some value"
    }
  }
}

// expanded
master {
  en {
    some {
      path: [object ExtractItem<value: "some value">]
    }
  }
}

// unmerged
  master {
    en {
      some {
        path: [object ExtractItem<value: "some value">]
      }
    }
  }

// unmerged
master {
  some {
    path: [object ExtractItem<value:[
      {locale: "en", value: "some value"},
      {locale: "de", value: "etwas value"},
    ]>]
  }
}

// stats
master {
  some {
    path: [object ExtractItem<value:[
      {locale: "en", value: "some value"},
      {locale: "de", value: "etwas value"},
    ],
    usage:[
      {line: x, file: y, col: z}
      {line: x2, file: y2, col: z2}
    ]>,
    missing: ['de', 'jp']
  ]
  }
}


  /**
   * i18nUtils.patch(extracts)
   * i18nUtils.patchFromFiles(target).toFiles(paths)
   * i18nUtils.patchFromFiles(target).toExtracts(extracts)
   * i18nUtils.patchFromFiles(target).toObjects(objects)
   * <-- The extracts must have source -->
   * i18nUtils.patchFromExtracts(target).toFiles(paths)
   * i18nUtils.patchFromExtracts(target).toExtracts(extracts)
   * i18nUtils.patchFromExtracts(target).toObjects(objects)
   * <-- The objects must be expanded Master objects -->
   * i18nUtils.patchFromObjects(target).toFiles(paths)
   * i18nUtils.patchFromObjects(target).toExtracts(extracts)
   * i18nUtils.patchFromObjects(target).toObjects(objects)
   */

  // const masterSchema = schemaGen.json('Translation keys', master);
  // const objectsToWriteToFile = {
  //   ...messagesByLocales,
  //   keys: master,
  //   'keys.schema': masterSchema,
  // };

  // const objectsToWriteToFile = {
  //   ...messagesByLocales,
  //   keys: master,
  //   'keys.schema': masterSchema,
  // };

  // writeLocalesToFiles(localesDirPath, objectsToWriteToFile, {
  //   extension: '.json',
  //   format: 'json',
  // });
}
