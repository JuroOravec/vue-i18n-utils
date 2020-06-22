import chunk from 'lodash.chunk';
import cloneDeep from 'lodash.clonedeep';
const cliWidth = require('cli-width');

type Table = string[][] & {
  options: {
    head: (string | undefined)[];
    chars: { [key: string]: string };
    colWidths: (number | undefined)[];
  };
};

export function borderLen(
  table: Table,
  side: 'left' | 'right' | 'top' | 'bottom' | 'horizontal' | 'vertical',
  cellCount = 0,
) {
  const relChars: {
    [key: string]: { [key: string]: (n: number) => number };
  } = {
    left: {
      'top-left': () => 1,
      left: (n) => n,
      'bottom-left': () => 1,
      'left-mid': (n) => (n > 0 ? n - 1 : 0),
    },
    right: {
      'top-right': () => 1,
      right: (n) => n,
      'bottom-right': () => 1,
      'right-mid': (n) => (n > 0 ? n - 1 : 0),
    },
    top: {
      'top-left': () => 1,
      'top-right': () => 1,
      top: (n) => n,
      'top-mid': (n) => (n > 0 ? n - 1 : 0),
    },
    bottom: {
      'bottom-left': () => 1,
      'bottom-right': () => 1,
      bottom: (n) => n,
      'bottom-mid': (n) => (n > 0 ? n - 1 : 0),
    },
    horizontal: {
      left: () => 1,
      right: () => 1,
      middle: (n) => n - 1,
    },
    vertical: {
      top: () => 1,
      bottom: () => 1,
      mid: (n) => n - 1,
    },
  };
  return Object.entries(relChars[side]).reduce(
    (sum, [charId, cellCountDepLen]) =>
      sum + table.options.chars[charId].length * cellCountDepLen(cellCount),
    0,
  );
}

export function paddingLen(table: any, cellCount = 0) {
  const relChars: {
    [key: string]: { [key: string]: (n: number) => number };
  } = {
    horizontal: {
      'padding-left': (n) => n,
      'padding-right': (n) => n,
    },
  };
  return Object.entries(relChars.horizontal).reduce(
    (sum, [paddingId, cellCountDepLen]) =>
      sum + (table.options.style[paddingId] || 0) * cellCountDepLen(cellCount),
    0,
  );
}

export function calcColWidths(
  table: Table,
  options: {
    min?: (number | null | undefined)[];
    max?: (number | null | undefined)[];
  } = {},
) {
  const { min = [], max = [] } = options;
  const cli = cliWidth() as number;

  const maxColWidths = [table.options.head || [], ...table].reduce(
    (widths, row) => {
      row.forEach((cell, i) => {
        const strVal = cell === undefined ? '' : cell;
        for (const val of strVal.split('\n')) {
          if (widths[i] === undefined || val.toString().length > widths[i]) {
            widths[i] = val.toString().length;
          }
        }
      });
      return widths;
    },
    [] as number[],
  );
  const normMinWidths = maxColWidths.map((_, i) =>
    typeof min[i] === 'number' ? min[i]! : 1,
  );
  const normMaxWidths = maxColWidths.map((maxVal, i) =>
    typeof max[i] === 'number' ? Math.min(max[i]!, maxVal) : maxVal,
  );

  let upperBound = Math.max(...normMaxWidths);
  let lowerBound = Math.max(Math.min(...normMinWidths), 1);

  const toggle = (() => {
    let c = 0;
    const toggleItems = [
      {
        normalizer: Math.floor,
        comparator: (val: number) => val <= cli,
        truthyUpdator: (val: number) => (lowerBound = val),
        falsyUpdator: (val: number) => (upperBound = val),
      },
      {
        normalizer: Math.ceil,
        comparator: (val: number) => val >= cli,
        truthyUpdator: (val: number) => (upperBound = val),
        falsyUpdator: (val: number) => (lowerBound = val),
      },
    ];
    return () => toggleItems[c++ % toggleItems.length];
  })();

  let staleCount = 0;
  while (lowerBound !== upperBound) {
    const { normalizer, comparator, truthyUpdator, falsyUpdator } = toggle();
    const guess = normalizer((upperBound + lowerBound) / 2);
    const res =
      // Sum cols, taking into consideration the max lengths cols can achieve
      normMaxWidths.reduce((sum, val) => sum + (val < guess ? val : guess), 0) +
      paddingLen(table, normMaxWidths.length) +
      borderLen(table, 'horizontal', normMaxWidths.length);

    if (comparator(res)) truthyUpdator(guess);
    else falsyUpdator(guess);

    // Terminate loop if it won't converge on single value
    if (upperBound - lowerBound < 2) staleCount++;
    if (staleCount > 2) upperBound = lowerBound;
  }

  const cellPadding = paddingLen(table, 1);
  return normMaxWidths.map(
    (val) => cellPadding + (val < lowerBound ? val : lowerBound),
  );
}

export function breakWords(table: Table) {
  const cellPadding = paddingLen(table, 1);
  const formattedTable = table.map((row) =>
    row.map((cell, i) => {
      const cellWidth = table.options.colWidths[i];
      if (cellWidth === undefined || cell === undefined) return cell;
      const effectiveCellWidth = cellWidth ? cellWidth - cellPadding : 0;
      const words = cell.toString().split(/\s+/gi);
      let splitWordsCell = cell;
      for (const word of words) {
        if (word.length <= effectiveCellWidth) continue;
        splitWordsCell = splitWordsCell.replace(
          word,
          chunk(word, effectiveCellWidth)
            .map((strArr) => strArr.join(''))
            .join('\n'),
        );
      }
      return splitWordsCell;
    }),
  ) as Table;
  formattedTable.options = cloneDeep(table.options);
  return formattedTable;
}
