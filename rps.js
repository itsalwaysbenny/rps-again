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
rock.addEventListener("click", playerChoseRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", playerChosePaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", playerChoseScissors);

const scoresDiv = document.querySelector("#scores");

const selections = document.querySelector("#selections");

//create functions for each player selection

function playerChoseRock() {
  let computerSelection = computerSelect();
  let playerSelection = "Rock";
  let selectionReport = `Player Chose ${playerSelection}, Computer Chose ${computerSelection}.`
  if (computerSelection === "Rock") {
    selections.textContent = selectionReport + " Game Drawn!"
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Scissors") {
    selections.textContent = selectionReport + " Player Won!"
    playerScore++;
      /*if (playerScore === 5) {
        alert("Player Wins the Match")
      }*/
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Paper") {
    selections.textContent = selectionReport + " Computer Won!"
    computerScore++;
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else {
    console.log("ERROR!");
  }
};

function playerChosePaper() {
  let computerSelection = computerSelect();
  let playerSelection = "Paper";
  if (computerSelection === "Paper") {
    selections.textContent = selectionReport + " Game Drawn!"
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Rock") {
    selections.textContent = selectionReport + " Player Won!"
    playerScore++;
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Scissors") {
    selections.textContent = selectionReport + " Computer Won!"
    computerScore++;
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else {
    console.log("ERROR!");
  }
};

function playerChoseScissors() {
  let computerSelection = computerSelect();
  let playerSelection = "Scissors";
  let selectionReport = `Player Chose ${playerSelection}, Computer Chose ${computerSelection}.`
  if (computerSelection === "Scissors") {
    selections.textContent = selectionReport + " Game Drawn!"
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Paper") {
    selections.textContent = selectionReport + " Player Won!"
    playerScore++;
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else if (computerSelection === "Rock") {
    selections.textContent = `Player Chose ${playerSelection}, Computer Chose ${computerSelection}.
      Computer Won!`
    computerScore++;
    scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
  } else {
    console.log("ERROR!");
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
  selections.textContent = "Make a Selection"
  scoresDiv.textContent = `Player Score: ${playerScore}.
     Computer Score: ${computerScore}`
}

module.exports = computerSelection
module.exports = playRound
