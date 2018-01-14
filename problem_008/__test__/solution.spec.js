const inputs         = require('../inputs');
const solution       = require('../solution');
const adjacentLength = 4;
const numbers        = inputs.split('').map(Number);
const expected       = 5832;
const actual         = solution(numbers, adjacentLength);

console.assert(actual.answer === expected, 'Oops, example not passed');
