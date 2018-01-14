const productReducer = require('./lib/productReducer');

/**
 *
 * @param {number[]} numbers
 * @param adjacentLength
 * @param threshold
 * @return {{filteredChunksLength: number, answer: number}}
 */
module.exports = function (numbers, adjacentLength, threshold = 1) {
  const chunks = numbers.map(
    (number, index, numbers) => numbers.slice(index, index + adjacentLength),
  );

  const significantChunks = chunks
    .filter(chunk => !chunk.some(number => number < threshold))
    .filter(chunk => chunk.length === adjacentLength);

  const products = significantChunks.map(
    chunk => chunk.reduce(productReducer, 1),
  );

  const answer = Math.max(...products);

  return {
    filteredChunksLength: significantChunks.length,
    answer,
  };
};