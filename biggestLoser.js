// biggestLoser.js
// Function to return the loser name with the biggest tally of loser_points.

// Function definition
function biggestLoser(matches) {
  const loserPointsTally = {};
  for (const match of matches) {
    loserPointsTally[match.loser] =
      (loserPointsTally[match.loser] || 0) + match.loser_points;
    loserPointsTally[match.winner] =
      (loserPointsTally[match.winner] || 0) - match.loser_points;
  }

  // Find the player with the largest tally of loser_points
  let maxLoser = "";
  let maxPoints = 0;
  for (const player in loserPointsTally) {
    if (loserPointsTally[player] > maxPoints) {
      maxPoints = loserPointsTally[player];
      maxLoser = player;
    }
  }

  return maxLoser;
}
