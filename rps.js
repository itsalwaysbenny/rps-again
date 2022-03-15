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

//let computerSelection
//let playerSelection
let playerScore = 0;
let computerScore = 0;


//Function when played in console
/*function playRound(playerSelection, computerSelection) {
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
};*/


//Function for button clicks
//Add event listeners first

const rock = document.querySelector("#rock");
rock.addEventListener("click", playOneRound);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playOneRound);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playOneRound);  

const scoresDiv = document.querySelector("#scores");

const selections = document.querySelector("#selections");

//create functions for each player selection

function playOneRound() {
  let compPick = computerSelect()
  let computerSelection = compPick.toLowerCase();
  let playerSelection = this.id;
  let selectionReport = `Player Chose ${playerSelection}, Computer Chose ${computerSelection}.`
  if (playerScore === 5 || computerScore === 5) {
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
     selections.textContent = "We have a winner! Restart the Game"
  } else {
      if (computerSelection === playerSelection) {
          selections.textContent = selectionReport + " Game Drawn!"
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          selections.textContent = selectionReport + " Player Won!"
          playerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          selections.textContent = selectionReport + " Player Won!"
          playerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          selections.textContent = selectionReport + " Player Won!"
          playerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          selections.textContent = selectionReport + " Computer Won!"
          computerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          selections.textContent = selectionReport + " Computer Won!"
          computerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          selections.textContent = selectionReport + " Computer Won!"
          computerScore++;
          scoresDiv.textContent = `Player Score: ${playerScore}.
          Computer Score: ${computerScore}`
      } else {
          console.log("ERROR!");
    }
  }
};

//do not know how to test this
/*playGame = () => {
  for (i = 0; i < 5; i++) {
    playerSelection = prompt("Choose Rock Paper or Scissors");
    computerSelection = computerSelect();
    console.log("Game " + (i + 1))
    console.log(playRound(playerSelection, computerSelection))
  }
}*/

const reset = document.querySelector("#reset");
reset.addEventListener("click", resetScores);

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  selections.textContent = "First to 5 Wins. Make a selection"
  scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
}

module.exports = computerSelection
module.exports = playRound
