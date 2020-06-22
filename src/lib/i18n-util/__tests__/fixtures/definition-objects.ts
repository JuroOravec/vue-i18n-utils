import { DefinitionArray } from '../../../definition';
import { definitions } from './definitions';

export const simple = {
  ja: {
    message: {
      hi: 'hello',
    },
  },
  de: {
    message: {
      hello: 'something',
    },
  },
  en: {
    message: {
      hi: 'hello',
      hello: 'Hello i18n in SFC!',
    },
  },
};

export const simpleFull = {
  ja: {
    message: {
      hi: 'hello',
      hello: 'something',
    },
  },
  de: {
    message: {
      hello: 'something',
      hi: 'hello',
    },
  },
  en: {
    message: {
      hi: 'hello',
      hello: 'Hello i18n in SFC!',
    },
  },
};

export const simpleMissing = {
  ja: {
    message: {
      hi: 'hello',
      hello: null,
    },
  },
  de: {
    message: {
      hi: null,
      hello: 'something',
    },
  },
  en: {
    message: {
      hi: 'hello',
      hello: 'Hello i18n in SFC!',
    },
  },
};

export const simpleMerged = {
  message: {
    hello: new DefinitionArray(['something', 'Hello i18n in SFC!'] as any),
    hi: new DefinitionArray(['hello', 'hello'] as any),
  },
};

export const expanded = {
  ja: {
    message: {
      hi: definitions[0],
    },
  },
  de: {
    message: {
      hello: definitions[1],
    },
  },
  en: {
    message: {
      hi: definitions[2],
      hello: definitions[3],
    },
  },
};

export const expandedMerged = {
  message: {
    hello: new DefinitionArray([definitions[1], definitions[3]]),
    hi: new DefinitionArray([definitions[0], definitions[2]]),
  },
};
