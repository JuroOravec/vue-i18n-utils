import { UsageItem } from '../../../usage';
import { filterMap } from '../../../util/array';

/**
 * Usage items that have no overlap with the used DefinitionItems
 */
export const usageNoMatch = [
  new UsageItem({ line: 10, path: ['message', 'a'] }),
  new UsageItem({ line: 19, path: ['message', 'b'] }),
  new UsageItem({ line: 58, path: ['message', 'c'] }),
  new UsageItem({ line: 87, path: ['message', 'c'] }),
  new UsageItem({ line: 101, path: ['message', 'd'] }),
  new UsageItem({ line: 102, path: ['message', 'e'] }),
  new UsageItem({ line: 103, path: ['message', 'd'] }),
].map((i) => i.copy({ source: require.resolve('./usage-match-diff.vue') }));

/**
 * Usage items that have overlap with the used DefinitionItems
 */
export const usageMatch = [
  new UsageItem({ line: 10, path: ['message', 'hello'] }),
  new UsageItem({ line: 19, path: ['message', 'hi'] }),
  new UsageItem({ line: 58, path: ['message', 'hello'] }),
  new UsageItem({ line: 87, path: ['message', 'hi'] }),
].map((i) => i.copy({ source: require.resolve('./usage-match-same.vue') }));

/**
 * Some of the usage items that have overlap with the used DefinitionItems.
 * All items are contained within the used DefinitionItems.
 */
export const usageMatchSubset = filterMap(
  usageMatch,
  (i) => i.path[0] === 'message' && i.path[1] === 'hi',
  (i) => i.copy({ source: require.resolve('./usage-match-same-subset.vue') }),
);

/**
 * All of the usage items that have overlap with the used DefinitionItems,
 * plus some more, so not all items are contained within the used
 * DefinitionItems.
 */
export const usageMatchSuperset = [...usageNoMatch, ...usageMatch];

/**
 * Usage items that have some overlap with the used DefinitionItems,
 * and some of the items don't.
 */
export const usageSomeMatch = [...usageNoMatch, ...usageMatchSubset];
