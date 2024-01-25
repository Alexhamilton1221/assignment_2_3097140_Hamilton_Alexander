// findNaNIndex.js
// Function to find all the indexes where NaN is found in a given array of numbers and NaN.

function findNaNIndex(arr) {
  const nanIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      nanIndexes.push(i);
    }
  }
  return nanIndexes;
}
