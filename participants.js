// participants.js
// Function to return an array of all the player names (no player should be listed more than once).

function participants(matches) {
  const playerSet = new Set();
  for (const match of matches) {
    playerSet.add(match.winner);
    playerSet.add(match.loser);
  }
  return Array.from(playerSet);
}
