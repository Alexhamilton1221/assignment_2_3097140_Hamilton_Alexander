// countNumberOfArrays.js
// Function to return the count for the number of arrays inside a given array.

function countNumberOfArrays(arr) {
  let count = 0;
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      count++;
    }
  }
  return count;
}
