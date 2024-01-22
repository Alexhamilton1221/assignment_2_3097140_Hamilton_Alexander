// test.js
const assert = require("assert");
const findNaNIndex = require("./findNANIndex");
const isArrayFactorChain = require("./isArrayFactorChain");
const countNumberOfArrays = require("./countNumberOfArrays");
const participants = require("./participants");
const winnersObject = require("./winnersObject");
const biggestLoser = require("./biggestLoser");

// Test data for findNaNIndex
const testArray1 = [2, NaN, 8, 16, 32];
const testArray2 = [2, 4, NaN, 16, 32, NaN];
const testArray3 = [2, 4, 16, 32];

assert.deepEqual(findNaNIndex(testArray1), [1]);
assert.deepEqual(findNaNIndex(testArray2), [2, 5]);
assert.deepEqual(findNaNIndex(testArray3), []);

// Test data for isArrayFactorChain
const factorChainArray1 = [2, 4, 8, 16, 32];
const factorChainArray2 = [2, 4, 8, 16, 32, 68];

assert.strictEqual(isArrayFactorChain(factorChainArray1), true);
assert.strictEqual(isArrayFactorChain(factorChainArray2), false);

// Test data for countNumberOfArrays
const arrayWithArrays1 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
const arrayWithArrays2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];

assert.strictEqual(countNumberOfArrays(arrayWithArrays1), 2);
assert.strictEqual(countNumberOfArrays(arrayWithArrays2), 3);

// Test data for participants
const matchData = [
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 },
];

assert.deepEqual(participants(matchData), [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
  "Elise",
]);

// Test data for winnersObject
const winnersObjectResult = {
  Alice: ["Bob", "Carol"],
  Bob: [],
  Carol: ["Dean"],
  Dean: ["Elise"],
  Elise: ["Bob", "Carol"],
};

assert.deepEqual(winnersObject(matchData), winnersObjectResult);

// Test data for biggestLoser
const biggestLoserResult = "Bob";
assert.strictEqual(biggestLoser(matchData), biggestLoserResult);

console.log("All tests passed successfully!");
