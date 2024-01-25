// winnersObject.js
// Function to return an object which lists each participant and a list of who they've beaten.

function winnersObject(matches) {
  const winnersObj = {};
  for (const match of matches) {
    if (!winnersObj[match.winner]) {
      winnersObj[match.winner] = [];
    }
    winnersObj[match.winner].push(match.loser);
  }
  return winnersObj;
}
