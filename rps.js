/*
function for a practice test
function add(a, b) {
  return a + b;
} */

function computerSelection() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "Scissors";
  } else {
    return "Error!";
  };
};

module.exports = computerSelection

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
