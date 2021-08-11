'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const buttonNew = document.querySelector('.btn--new')
const buttonRoll = document.querySelector('.btn--roll')
const buttonHold = document.querySelector('.btn--hold')

// Starting conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
    // 1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1

    // 2. Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${diceNumber}.png`

    // 3. Check for rolled 1: if true, switch to next player
    if (diceNumber !== 1) {
        // Add dice to current score
        currentScore += diceNumber
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})