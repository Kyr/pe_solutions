/**
 * Problem 8.
 * Largest product in a series
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.
 * What is the value of this product?
 *
 * @see https://projecteuler.net/problem=8
 */
const measure        = require('../lib/chore/measure');
const quartiles      = require('../lib/stats/quartiles');
const resolver       = require('./solution');
const {
        lowerQuartile,
        median,
        upperQuartile,
      }              = quartiles([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const inputs         = require('./inputs');
const threshold      = Math.floor(lowerQuartile);
const numbers        = inputs.split('').map(Number);
const adjacentLength = 13;
const solution       = measure(
  () => resolver(numbers, adjacentLength, threshold),
);

console.log(`Answer:           ${solution.answer}`);
console.log(`Execution timing: ${solution.timing}`);
