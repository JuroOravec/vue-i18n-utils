import { DOMContentGroup } from '../content-group-dom';
import { VueAdaptor } from '..';

export const addTypeConditions: {
  description: string;
  addType: 'locale' | 'general' | 'custom';
  expected: { localeKey: string; itemCount: number }[];
}[] = [
  {
    description: 'locale code if locale-scoped',
    addType: 'locale',
    expected: [
      { localeKey: 'en', itemCount: 2 },
      { localeKey: 'fr', itemCount: 1 },
    ],
  },
  {
    description: "per items' sourceScope if custom",
    addType: 'custom',
    expected: [
      { localeKey: 'en', itemCount: 1 },
      { localeKey: '*', itemCount: 1 },
      { localeKey: 'fr', itemCount: 1 },
    ],
  },
  {
    description: "'*' if multiple locales combined",
    addType: 'general',
    expected: [{ localeKey: '*', itemCount: 3 }],
  },
];

export const positionConditions: {
  description: string;
  addPosition: 'prepend' | 'append' | undefined;
  expectedAs: 'prepend' | 'append';
}[] = [
  {
    description: 'puts unmatched items to "prepend" category if "prepend"',
    addPosition: 'prepend',
    expectedAs: 'prepend',
  },
  {
    description: 'puts unmatched items to "append" category if "append"',
    addPosition: 'append',
    expectedAs: 'append',
  },
  {
    description: 'puts unmatched items to "append" category if undefined',
    addPosition: undefined,
    expectedAs: 'append',
  },
];

export const matchByContentConditions: {
  description: string;
  matchByContent: true | false | 'strict' | undefined;
  keyExpected: 'false' | 'true' | 'strict';
}[] = [
  {
    description: 'false',
    matchByContent: false,
    keyExpected: 'false',
  },
  {
    description: 'true',
    matchByContent: true,
    keyExpected: 'true',
  },
  {
    description: 'strict',
    matchByContent: 'strict',
    keyExpected: 'strict',
  },
  {
    description: '(not set)',
    matchByContent: undefined,
    keyExpected: 'true',
  },
];

export const strategyConditions: {
  description: string;
  strategy: 'locale' | 'localeStrict' | 'general' | 'add' | undefined;
  keyExpected: 'locale' | 'localeStrict' | 'general' | 'add';
}[] = [
  {
    description: 'locale',
    strategy: 'locale',
    keyExpected: 'locale',
  },
  {
    description: 'localeStrict',
    strategy: 'localeStrict',
    keyExpected: 'localeStrict',
  },
  {
    description: 'general',
    strategy: 'general',
    keyExpected: 'general',
  },
  {
    description: 'add',
    strategy: 'add',
    keyExpected: 'add',
  },
  {
    description: '(not set)',
    strategy: undefined,
    keyExpected: 'locale',
  },
];

export interface ExpectedEntry {
  index: number;
  count: number;
}

export interface Expected {
  matched: ExpectedEntry[];
  unmatched?: number;
}

export type ExpectedGroups = {
  locale: Expected;
  general: Expected;
  mixed: Expected;
};

export type CondItem = {
  /**
   * Description of the expected result
   */
  desc: string;
  /**
   * Group of indices of expected ContentBlock of
   * DOMContent.contentBlocks that are expected to be matched in
   * particular cases.
   */
  expected: ExpectedGroups;
};

export type Conditions = {
  /**
   * Test case condition description
   */
  description: string;
  /**
   * DOMContent instances
   */
  instances: { [key in 'locale' | 'general' | 'mixed']: DOMContentGroup };
  /**
   * Info on expected results for varying `matchByContent` option
   */
  matchByContent: { [key in 'false' | 'true' | 'strict']: CondItem };
  /**
   * Info on expected results for varying `strategy` option
   */
  strategy: {
    [key in 'locale' | 'localeStrict' | 'general' | 'add']: CondItem;
  };
}[];

const insertElements = {
  ls: {
    noMatch: {
      attributes: { locale: 'bz' },
      text: '{"bada": "bing"}',
    },
    noPathMatch: {
      attributes: { locale: 'en' },
      text: '{"bada": "bing"}',
    },
    match: {
      attributes: { locale: 'en' },
      text: '{"hello": {"path": ""}}',
    },
    matchDiffLocale: {
      attributes: { locale: 'de' },
      text: '{"hello": {"path": ""}}',
    },
  },
  g: {
    noMatch: {
      text: '{"bz": {"bada": "bing"}}',
    },
    noPathMatch: {
      text: '{"en": {"bada": "bing"}}',
    },
    match: {
      text: '{"en": {"hello": {"path": ""}}}',
    },
    matchDiffLocale: {
      text: '{"bz": {"hello": {"path": ""}}}',
    },
  },
};

/**
 * Create DOMContent instance with options commonly used in these tests
 */
function newDOMContent() {
  return new DOMContentGroup({
    serializers: VueAdaptor.defaults.serializers,
  });
}

/**
 * No content blocks
 */
const empty = newDOMContent();

/**
 * Locale-scoped content blocks that don't match neither by locale nor
 * by path
 */
const LSNoMatch = newDOMContent();
LSNoMatch.insertElement(insertElements.ls.noMatch);

/**
 * Locale-scoped content blocks that match by locale but not by path
 */
const LSNoPathMatch = newDOMContent();
LSNoPathMatch.insertElement(insertElements.ls.noPathMatch);

/**
 * Locale-scoped content blocks that match by locale and path
 */
const LSMatchSameLocale = newDOMContent();
LSMatchSameLocale.insertElement(insertElements.ls.match);

/**
 * Locale-scoped content blocks that match by path but not by locale
 */
const LSMatchDiffLocale = newDOMContent();
LSMatchDiffLocale.insertElement(insertElements.ls.matchDiffLocale);

/**
 * Locale-scoped content blocks where path matches in both own and
 * other locales
 */
const LSMatchSameAndDiffLocale = newDOMContent();
LSMatchSameAndDiffLocale.insertElement(insertElements.ls.matchDiffLocale);
LSMatchSameAndDiffLocale.insertElement(insertElements.ls.match);

/**
 * Multiple locale-scoped content blocks that match by path.
 *
 * Normally this should not happen as this indicates duplicate
 * definitions, but it's good to test it.
 */
const LSMatchMultiple = newDOMContent();
LSMatchMultiple.insertElement(insertElements.ls.match);
LSMatchMultiple.insertElement(insertElements.ls.match);

/**
 * Locale-scoped content blocks where path matches in both own and
 * other locales, and some blocks don't match anything
 */
const LSMixed = newDOMContent();
LSMixed.insertElement(insertElements.ls.noMatch);
LSMixed.insertElement(insertElements.ls.matchDiffLocale);
LSMixed.insertElement(insertElements.ls.noPathMatch);
LSMixed.insertElement(insertElements.ls.match);

/**
 * General content blocks that don't match by path
 */
const GNoMatch = newDOMContent();
GNoMatch.insertElement(insertElements.g.noMatch);

/**
 * General content blocks that match by locale but not by path
 */
const GNoPathMatch = newDOMContent();
GNoPathMatch.insertElement(insertElements.g.noPathMatch);

/**
 * General content block that match by path and locale
 */
const GMatchSameLocale = newDOMContent();
GMatchSameLocale.insertElement(insertElements.g.match);

/**
 * General content blocks that match by path but not by locale
 */
const GMatchDiffLocale = newDOMContent();
GMatchDiffLocale.insertElement(insertElements.g.matchDiffLocale);

/**
 * General content blocks where path matches in both own and other
 * locales
 */
const GMatchSameAndDiffLocale = newDOMContent();
GMatchSameAndDiffLocale.insertElement(insertElements.g.matchDiffLocale);
GMatchSameAndDiffLocale.insertElement(insertElements.g.match);

/**
 * Multiple general content blocks that match by path
 */
const GMatchMultiple = newDOMContent();
GMatchMultiple.insertElement(insertElements.g.match);
GMatchMultiple.insertElement(insertElements.g.match);

/**
 * General content blocks where path matches in some blocks but doesn't
 * in other
 *
 * Normally this should not happen as this indicates duplicate
 * definitions, but it's good to test it.
 */
const GMixed = newDOMContent();
GMixed.insertElement(insertElements.g.noMatch);
GMixed.insertElement(insertElements.g.matchDiffLocale);
GMixed.insertElement(insertElements.g.noPathMatch);
GMixed.insertElement(insertElements.g.match);

/**
 * Mixed general and locale-scoped content blocks don't match by
 * neither path nor locale
 */
const MNoMatch = newDOMContent();
MNoMatch.insertElement(insertElements.g.noMatch);
MNoMatch.insertElement(insertElements.ls.noMatch);

/**
 * Mixed general and locale-scoped content blocks that match by locale
 * but not by path
 */
const MNoPathMatch = newDOMContent();
MNoPathMatch.insertElement(insertElements.g.noPathMatch);
MNoPathMatch.insertElement(insertElements.ls.noPathMatch);

/**
 * Mixed general and locale-scoped content blocks that match by locale
 * and path
 */
const MMatchSameLocale = newDOMContent();
MMatchSameLocale.insertElement(insertElements.g.match);
MMatchSameLocale.insertElement(insertElements.ls.match);

/**
 * Mixed general and locale-scoped content blocks that match by path
 * but not by locale
 */
const MMatchDiffLocale = newDOMContent();
MMatchDiffLocale.insertElement(insertElements.g.matchDiffLocale);
MMatchDiffLocale.insertElement(insertElements.ls.matchDiffLocale);

/**
 * Mixed general and locale-scoped content blocks where path matches in
 * both own and other locales
 */
const MMatchSameAndDiffLocale = newDOMContent();
MMatchSameAndDiffLocale.insertElement(insertElements.g.matchDiffLocale);
MMatchSameAndDiffLocale.insertElement(insertElements.g.match);
MMatchSameAndDiffLocale.insertElement(insertElements.ls.matchDiffLocale);
MMatchSameAndDiffLocale.insertElement(insertElements.ls.match);

/**
 * Mixed general and locale-scoped content blocks that match by path.
 *
 * Normally this should not happen as this indicates duplicate
 * definitions, but it's good to test it.
 */
const MMatchMultiple = newDOMContent();
MMatchMultiple.insertElement(insertElements.g.match);
MMatchMultiple.insertElement(insertElements.g.match);
MMatchMultiple.insertElement(insertElements.ls.match);
MMatchMultiple.insertElement(insertElements.ls.match);

/**
 * Mixed general and locale-scoped content blocks where path matches in
 * both own and
 * other locales, and some blocks don't match anything
 */
const MMixed = newDOMContent();
MMixed.insertElement(insertElements.g.noMatch);
MMixed.insertElement(insertElements.g.matchDiffLocale);
MMixed.insertElement(insertElements.g.noPathMatch);
MMixed.insertElement(insertElements.g.match);
MMixed.insertElement(insertElements.ls.noMatch);
MMixed.insertElement(insertElements.ls.matchDiffLocale);
MMixed.insertElement(insertElements.ls.noPathMatch);
MMixed.insertElement(insertElements.ls.match);

export const conditions: Conditions = [
  {
    description: '(empty)',
    instances: {
      locale: empty,
      general: empty,
      mixed: empty,
    },
    matchByContent: {
      strict: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
      true: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
      false: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
    },
    strategy: {
      locale: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
      localeStrict: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
      general: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
      add: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with no common path nor locale',
    instances: {
      locale: LSNoMatch,
      general: GNoMatch,
      mixed: MNoMatch,
    },
    matchByContent: {
      strict: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale and path, so none
          // should match.
          locale: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          general: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          mixed: { matched: [] },
        },
      },
      true: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both locale and general blocks present, but locale block
          // doesn't match by locale, so both 'en' and 'fr' items
          // should be matched to general after failing to find matching
          // path / locale
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      false: {
        desc: 'general',
        expected: {
          locale: { matched: [] },
          // only general block present, so both 'en' and 'fr' items
          // should be appended
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // the locale block has non-matching locale, so all items go to
          // general block
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
    },
    strategy: {
      locale: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both locale and general blocks present, but locale block
          // doesn't match by locale, so both 'en' and 'fr' items
          // should be matched to general after failing to find matching
          // path / locale
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      localeStrict: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // only general block present, but general blocks are skipped,
          // so no match
          general: { matched: [] },
          // both locale and general blocks present, but locale block
          // doesn't match by locale, and general blocks are ignored, so
          // both 'en' and 'fr' items
          // be appended
          mixed: { matched: [] },
        },
      },
      general: {
        desc: 'no',
        expected: {
          // Locale blocks should be skipped (and there are none anyway)
          // So append all
          locale: { matched: [] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both locale and general blocks present, but locale blocks
          // are skipped (and don't match by locale anyway), so both
          // 'en' and 'fr' items should be matched to general
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      add: {
        desc: 'no',
        expected: {
          locale: { matched: [] },
          general: { matched: [] },
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with no common path but matching locale',
    instances: {
      locale: LSNoPathMatch,
      general: GNoPathMatch,
      mixed: MNoPathMatch,
    },
    matchByContent: {
      strict: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale and path, so none
          // should match.
          locale: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          general: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          mixed: { matched: [] },
        },
      },
      true: {
        desc: 'first same-locale (if none found then first general',
        expected: {
          // 'en' block exists, so 'en' items should match locale after
          // failing to match by path, while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist. 'en' items should
          // match 'en' as first block after failing to find 'en' block
          // by path. 'fr' matches general block after failing to find
          // a locale block
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
      false: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // 'en' block exists, so 'en' items should matched,
          // while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find locale block
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist. 'en' items should
          // match 'en' as first block after failing to find 'en' block.
          // 'fr' matches general block after failing to find a locale
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
    },
    strategy: {
      locale: {
        desc: 'first same-locale (if none found then first general',
        expected: {
          // 'en' block exists, so 'en' items should match locale after
          // failing to match by path, while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist. 'en' items should
          // match 'en' as first block after failing to find 'en' block
          // by path. 'fr' matches general block after failing to find
          // a locale block
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
      localeStrict: {
        desc: 'no',
        expected: {
          // 'en' block exists, so 'en' items should match locale after
          // failing to match by path, while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // general blocks are skipped, so no match.
          general: { matched: [] },
          // both 'en' and general blocks exist. 'en' items should
          // match 'en' as first block after failing to find 'en' block
          // by path. general blocks are skipped, so 'fr' are appended.
          mixed: {
            matched: [{ index: 1, count: 2 }],
          },
        },
      },
      general: {
        desc: 'no',
        expected: {
          // locale blocks are skipped, so no match.
          locale: { matched: [] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find matching
          // path / locale
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist, but general blocks are
          // skipped, so all items match a general block.
          mixed: {
            matched: [{ index: 0, count: 3 }],
            unmatched: 0,
          },
        },
      },
      add: {
        desc: 'no',
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with common path and matching locale',
    instances: {
      locale: LSMatchSameLocale,
      general: GMatchSameLocale,
      mixed: MMatchSameLocale,
    },
    matchByContent: {
      strict: {
        desc:
          'first same-locale w/ matching path, else general /w matching path, else nothing',
        expected: {
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          locale: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          general: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          mixed: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
        },
      },
      true: {
        desc:
          'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block. Everything else should be
          // appended.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path.
          // 'fr' item should match a general block after failing to
          // match by locale and path.
          mixed: {
            matched: [
              { index: 1, count: 2 },
              { index: 0, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      false: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // 'en' block exists, so 'en' items should matched,
          // while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find locale block
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist, so 'en' items should
          // match 'en' block while 'fr' matches general block,
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
    },
    strategy: {
      locale: {
        desc:
          'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block. Everything else should be
          // appended.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path.
          // 'fr' item should match a general block after failing to
          // match by locale and path.
          mixed: {
            matched: [
              { index: 1, count: 2 },
              { index: 0, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      localeStrict: {
        desc: 'first same-locale (if none found then nothing)',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // general blocks are skipped
          general: { matched: [] },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path.
          // 'fr' item is appended after failing to match locale block by
          // locale and path, and since general blocks are skipped
          mixed: {
            matched: [{ index: 1, count: 2 }],
          },
        },
      },
      general: {
        desc: 'first general (if none found then nothing)',
        expected: {
          // locale blocks are skipped
          locale: { matched: [] },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block. Everything else should be
          // appended.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item would match 'en' on the basis of locale & path, but
          // locale blocks are skipped.
          // So all items should match a general block instead
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      add: {
        desc: 'no',
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
      },
    },
  },
  // This one should be practically same as before
  {
    description: 'with common path and same locale (multiple)',
    instances: {
      locale: LSMatchMultiple,
      general: GMatchMultiple,
      mixed: MMatchMultiple,
    },
    matchByContent: {
      strict: {
        desc:
          'first same-locale w/ matching path, else general /w matching path, else nothing',
        expected: {
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          locale: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          general: { matched: [{ index: 0, count: 1 }], unmatched: 2 },
          // Only one of the 2 'en' items should match, everything else
          // should be appended
          mixed: { matched: [{ index: 2, count: 1 }], unmatched: 2 },
        },
      },
      true: {
        desc:
          'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block. Everything else should be
          // appended.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path.
          // 'fr' item should match a general block after failing to
          // match by locale and path.
          mixed: {
            matched: [
              { index: 2, count: 2 },
              { index: 0, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      false: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // 'en' block exists, so 'en' items should matched,
          // while 'fr' items should be appended
          locale: { matched: [{ index: 0, count: 2 }] },
          // only general block present, so both 'en' and 'fr' items
          // should be matched to it after failing to find locale block
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // both 'en' and general blocks exist, so 'en' items should
          // match 'en' block while 'fr' matches general block,
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 2, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
    },
    strategy: {
      locale: {
        desc:
          'first same-locale w/ matching path, else first same-locale, else first general /w matching path, else first general, else none',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path.
          // 'fr' item should match a general block after failing to
          // match by locale and path.
          mixed: {
            matched: [
              { index: 2, count: 2 },
              { index: 0, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      localeStrict: {
        desc: 'first same-locale (if none found then nothing)',
        expected: {
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          locale: { matched: [{ index: 0, count: 2 }], unmatched: 1 },
          // general blocks are skipped
          general: { matched: [] },
          // One item should match 'en' on the basis of locale & path.
          // Other should match the same block on basis of locale after
          // failing to match by path. Everything else should be appended
          mixed: {
            matched: [{ index: 2, count: 2 }],
          },
        },
      },
      general: {
        desc: 'first general (if none found then nothing)',
        expected: {
          // locale blocks are skipped
          locale: { matched: [] },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One item would match 'en' on the basis of locale & path, and
          // other should match the same block on basis of locale after
          // failing to match by path. But locale blocks are skipped, so
          // all is assigned to general block
          mixed: {
            matched: [{ index: 0, count: 3 }],
            unmatched: 0,
          },
        },
      },
      add: {
        desc: 'no',
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with common path but different locale',
    instances: {
      locale: LSMatchDiffLocale,
      general: GMatchDiffLocale,
      mixed: MMatchDiffLocale,
    },
    matchByContent: {
      strict: {
        desc: 'no',
        expected: {
          // There are no blocks with matching locale and path, so none
          // should match.
          locale: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          general: { matched: [] },
          // There are no blocks with matching locale and path, so none
          // should match.
          mixed: { matched: [] },
        },
      },
      true: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One 'en' item should match general block on the basis of
          // path after failing to match same-locale+same-path and
          // same-locale blocks. Other 'en' and 'fr' items should match
          // the same block after also failing to match by locale and
          // path, and so are being assigned to first general block.
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      false: {
        desc: 'first general',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // There are no blocks with matching locale, so first general
          // is matched instead.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // There are no blocks with matching locale, so first general
          // is matched instead.
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
    },
    strategy: {
      locale: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One 'en' item should match general block on the basis of
          // path after failing to match same-locale+same-path and
          // same-locale blocks. Other 'en' and 'fr' items should match
          // the same block after also failing to match by locale and
          // path, and so are being assigned to first general block.
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      localeStrict: {
        desc: 'first same-locale (if none found then nothing)',
        expected: {
          // There are no blocks with matching locale, so none should
          // match.
          locale: { matched: [] },
          // general blocks are skipped
          general: { matched: [] },
          // There are no blocks with matching locale, so none should
          // match, and general blocks are skipped
          mixed: { matched: [] },
        },
      },
      general: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // Locale blocks are skipped
          locale: { matched: [] },
          // One 'en' item should match on the basis of path after
          // failing to match same-locale+same-path and same-locale
          // blocks. Other 'en' and 'fr' items should match the same
          // block after also failing to match by path, and so are being
          // assigned to first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // One 'en' item should match general block on the basis of
          // path after failing to match same-locale+same-path and
          // same-locale blocks. Other 'en' and 'fr' items should match
          // the same block after also failing to match by locale and
          // path, and so are being assigned to first general block.
          mixed: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
        },
      },
      add: {
        desc: 'no',
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with common path and both same and different locale',
    instances: {
      locale: LSMatchSameAndDiffLocale,
      general: GMatchSameAndDiffLocale,
      mixed: MMatchSameAndDiffLocale,
    },
    matchByContent: {
      strict: {
        desc: 'first same-locale & same-path (if none found then nothing)',
        expected: {
          locale: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
          general: { matched: [{ index: 1, count: 1 }], unmatched: 2 },
          mixed: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
        },
      },
      true: {
        desc:
          'first same-locale & same-path else same-locale, else first same-path general else first general',
        expected: {
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // There are no general nor 'fr' blocks, so 'fr' items should
          // be appended.
          locale: { matched: [{ index: 1, count: 2 }] },
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of general block containing the same locale after failing
          // to match same-locale+same-path.
          // Since there are no general blocks that contain 'fr' locale,
          // those items should match the first general block.
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // 'fr' items should match the first general block.
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 3, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
      false: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // 'en' items match first 'en' locale block. 'fr' items are
          // appended.
          locale: { matched: [{ index: 1, count: 2 }] },
          // There are no locale blocks, and contents are not analysed,
          // so all items match the first general block.
          general: { matched: [{ index: 0, count: 3 }], unmatched: 0 },
          // 'en' items match first 'en' locale block. 'fr' items match
          // the first general block
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 3, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
    },
    strategy: {
      locale: {
        desc:
          'first same-locale & same-path else same-locale, else first same-path general else first general',
        expected: {
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // There are no general nor 'fr' blocks, so 'fr' items should
          // be appended.
          locale: { matched: [{ index: 1, count: 2 }] },
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of general block containing the same locale after failing
          // to match same-locale+same-path.
          // Since there are no general blocks that contain 'fr' locale,
          // those items should match the first general block.
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // 'fr' items should match the first general block.
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 3, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
      localeStrict: {
        desc: 'first same-locale (if none found then nothing)',
        expected: {
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // There are no general nor 'fr' blocks, so 'fr' items should
          // be appended.
          locale: { matched: [{ index: 1, count: 2 }] },
          // general blocks are skipped
          general: { matched: [] },
          // One 'en' item should match locale block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of same-locale after failing to match same-locale+same-path.
          // 'fr' items should be appended.
          mixed: {
            matched: [{ index: 3, count: 2 }],
          },
        },
      },
      general: {
        desc: 'first general (if none found then nothing)',
        expected: {
          // locale blocks are skipped
          locale: { matched: [] },
          // One 'en' item should match general block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of general block containing the same locale after failing
          // to match same-locale+same-path.
          // Since there are no general blocks that contain 'fr' locale,
          // those items should match the first general block.
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
          // One 'en' item should match general block on the basis of
          // same-locale+same-path. Other 'en' is matched on the basis
          // of containing same locale after failing to match
          // same-locale+same-path.
          // 'fr' items should match the first general block.
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 1, count: 2 },
            ],
            unmatched: 0,
          },
        },
      },
      add: {
        desc: 'no',
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
      },
    },
  },
  {
    description: 'with same or different path and locale (multiple)',
    instances: {
      locale: LSMixed,
      general: GMixed,
      mixed: MMixed,
    },
    matchByContent: {
      strict: {
        desc: 'first same-locale (if none found then nothing)',
        expected: {
          locale: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
          general: { matched: [{ index: 3, count: 1 }], unmatched: 2 },
          mixed: { matched: [{ index: 7, count: 1 }], unmatched: 2 },
        },
      },
      true: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          locale: {
            matched: [
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
          },
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
            unmatched: 0,
          },
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 6, count: 1 },
              { index: 7, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      false: {
        expected: {
          locale: { matched: [{ index: 2, count: 2 }] },
          general: {
            matched: [{ index: 0, count: 3 }],
            unmatched: 0,
          },
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 6, count: 2 },
            ],
            unmatched: 0,
          },
        },
        desc: 'first same-locale (if none found then first general)',
      },
    },
    strategy: {
      locale: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          locale: {
            matched: [
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
          },
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
            unmatched: 0,
          },
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 6, count: 1 },
              { index: 7, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      localeStrict: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          locale: {
            matched: [
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
          },
          // general blocks are skipped
          general: { matched: [] },
          mixed: {
            matched: [
              { index: 6, count: 1 },
              { index: 7, count: 1 },
            ],
          },
        },
      },
      general: {
        desc: 'first same-locale (if none found then first general)',
        expected: {
          // locale blocks are skipped
          locale: { matched: [] },
          general: {
            matched: [
              { index: 0, count: 1 },
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
            unmatched: 0,
          },
          mixed: {
            matched: [
              { index: 0, count: 1 },
              { index: 2, count: 1 },
              { index: 3, count: 1 },
            ],
            unmatched: 0,
          },
        },
      },
      add: {
        expected: {
          // skip all matching
          locale: { matched: [] },
          // skip all matching
          general: { matched: [] },
          // skip all matching
          mixed: { matched: [] },
        },
        desc: 'no',
      },
    },
  },
];
