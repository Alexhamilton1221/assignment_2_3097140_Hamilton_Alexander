// index.js
// Main file of the library to export all functions.

// Import the individual functions from their respective modules
const findNaNIndex = require("./findNaNIndex");
const isArrayFactorChain = require("./isArrayFactorChain");
const countNumberOfArrays = require("./countNumberOfArrays");
const participants = require("./participants");
const winnersObject = require("./winnersObject");
const biggestLoser = require("./biggestLoser");

// Export all the functions
module.exports = {
  findNaNIndex,
  isArrayFactorChain,
  countNumberOfArrays,
  participants,
  winnersObject,
  biggestLoser,
};
