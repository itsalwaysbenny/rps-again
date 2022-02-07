const playerSelection = require('./rps.js')
const computerSelection = require('./rps.js')


/*Practice test

test('properly adds two numbers', () => {
  expect(add(1, 2)).toBe(3)
})*/

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

//Computer Selection Tests

