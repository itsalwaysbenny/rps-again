/*
function for a practice test
function add(a, b) {
  return a + b;
} */

function computerSelect() {
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

let computerSelection
let playerSelection
let playerScore = 0;
let computerScore = 0;
let totalScore = playerScore + computerScore;


function playRound(playerSelection, computerSelection) {
  let computerChoice = computerSelection.toLowerCase();
  let playerChoice = playerSelection.toLowerCase();
  let computerWin = `Player chose ${playerSelection},
  Computer chose ${computerSelection}, Computer Wins.
  Player Score: ${playerScore} Computer Score: ${computerScore}`
  let playerWin = `Player chose ${playerSelection},
  Computer chose ${computerSelection}, Player Wins.
  Player Score: ${playerScore} Computer Score: ${computerScore}`
  if (playerChoice === computerChoice) {
    return `Player chose ${playerSelection},
      Computer chose ${computerSelection}, Game is a Draw.
       Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
      playerScore++
      return playerWin;
  } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
      playerScore++
      return playerWin;
  } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
      playerScore++
      return playerWin;
  } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
      computerScore++
      return computerWin;
  } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
      computerScore++
      return computerWin;
  } else if ((playerChoice === "rock") && (computerChoice === "paper")) {
      computerScore++
      return computerWin;
  } else {
    return "Please select either 'Rock', 'Paper' or 'Scissors'"
  }
};

//do not know how to test this
playGame = () => {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Choose Rock Paper or Scissors");
    computerSelection = computerSelect();
    console.log("Game " + (i + 1))
    console.log(playRound(playerSelection, computerSelection))
  }
}

resetScores = () => {
  playerScore = 0;
  computerScore = 0;
}

module.exports = computerSelection
module.exports = playRound
