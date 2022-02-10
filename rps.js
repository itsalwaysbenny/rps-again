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

function playRound(playerSelection, computerSelection) {
  let computerChoice = computerSelection.toLowerCase();
  let playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerChoice) {
    return `Player chose ${playerSelection}, Computer chose ${computerSelection}, Game is a Draw`;
  } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
      return "Player chose Rock Computer chose Scissors Player Wins";
  } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
      return "Player chose Scissors Computer chose Paper Player Wins"
  } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
      return "Player chose Paper Computer chose Rock Player Wins"
  } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
    return "Player chose Scissors Computer chose Rock Computer Wins";
} else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
    return "Player chose Paper Computer chose Scissors Computer Wins"
} else if ((playerChoice === "rock") && (computerChoice === "paper")) {
    return "Player chose Rock Computer chose Paper Computer Wins"
} else {
    return "Please select either 'Rock', 'Paper' or 'Scissors'"
  }
};

//do not know how to test this
playGame = () => {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Choose Rock Paper or Scissors");
    computerSelection = computerSelect();
    console.log("Game " + i)
    console.log(playRound(playerSelection, computerSelection))
  }
}

module.exports = computerSelection
module.exports = playRound
