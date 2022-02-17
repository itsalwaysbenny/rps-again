const { TestWatcher } = require('jest')
const playRound = require('./rps.js')
const computerSelection = require('./rps.js')


/*Practice test

test('properly adds two numbers', () => {
  expect(add(1, 2)).toBe(3)
})*/


/*Had to delete the tests because it was not testing what I wanted
It was testing the selection but that is now built into the playGame Function
//Player Selection Tests
test('Player Selection correctly returns option' , () => {
  expect(playerSelection('rock')).toBe('rock')
})

test('Player Selection correctly returns option' , () => {
  expect(playerSelection('paper')).toBe('paper')
})

test('Player Selection correctly returns option' , () => {
  expect(playerSelection('scissors')).toBe('scissors')
})

test('Player Selection correctly returns option' , () => {
  expect(playerSelection('Cabbage')).toBe("Please select either 'Rock', 'Paper' or 'Scissors'")
})

*/

//playGame Tests
//Don't know enough about tests to be able to compare the values
// Think I've bodged it a bit

test("Game is a draw when player selection and computer selection are the same" , () => {
  expect(playRound("Rock", "Rock")).toBe("Game is a Draw")
})

//Player winner tests
test("Player Rock beats Computer Scissors" , () => {
  expect(playRound("Rock", "Scissors")).toBe("Player chose Rock Computer chose Scissors Player Wins")
})
test("Player Scissors beats Computer Paper" , () => {
  expect(playRound("Scissors", "Paper")).toBe("Player chose Scissors Computer chose Paper Player Wins")
})
test("Player Paper beats Computer Rock" , () => {
  expect(playRound("Paper", "Rock")).toBe("Player chose Paper Computer chose Rock Player Wins")
})

//Computer Winner Tests
test("Computer Rock beats Player Scissors" , () => {
  expect(playRound("Scissors", "Rock")).toBe("Player chose Scissors Computer chose Rock Computer Wins")
})
test("Computer Scissors beats Player Paper" , () => {
  expect(playRound("Paper", "Scissors")).toBe("Player chose Paper Computer chose Scissors Computer Wins")
})
test("Computer Paper beats Player Rock" , () => {
  expect(playRound("Rock", "Paper")).toBe("Player chose Rock Computer chose Paper Computer Wins")
})

//playGame test
//do not know how to test this
/*
test("Game stops after five rounds" , () => {
  expect(playGame(5)).toBe("Game Over")
})*/