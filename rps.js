/*
function for a practice test
function add(a, b) {
  return a + b;
} */

function playerSelection(selection) {
  let playerChoice = selection.toLowerCase();
  if (playerChoice === "rock") {
    return playerChoice;
  } else if (playerChoice === "paper") {
    return playerChoice;
  } else if (playerChoice === "scissors") {
    return playerChoice;
  } else {
    return "Please select either 'Rock', 'Paper' or 'Scissors'";
  }
};

module.exports = playerSelection