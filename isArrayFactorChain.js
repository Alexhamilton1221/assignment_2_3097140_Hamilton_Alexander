// isArrayFactorChain.js
// Function to check if an array is a factor chain or not.

function isArrayFactorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false;
    }
  }
  return true;
}
