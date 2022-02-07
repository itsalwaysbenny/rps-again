const playerSelection = require('./rps.js')


/*Practice test

test('properly adds two numbers', () => {
  expect(add(1, 2)).toBe(3)
})*/

test('Player Selection correctly retuns option' , () => {
  expect(playerSelection('Rock')).toBe('rock')
})

test('Player Selection correctly retuns option' , () => {
  expect(playerSelection('Paper')).toBe('paper')
})

test('Player Selection correctly retuns option' , () => {
  expect(playerSelection('Scissors')).toBe('scissors')
})

test('Player Selection correctly retuns option' , () => {
  expect(playerSelection('Cabbage')).toBe("Please select either 'Rock', 'Paper' or 'Scissors'")
})