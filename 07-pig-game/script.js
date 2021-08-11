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

let scores
let currentScore
let activePlayer
let playing

// Set starting conditions
const init = () => {
    // 1. Set scores to 0
    scores = [0, 0]
    currentScore = 0

    score0El.textContent = scores[0]
    score1El.textContent = scores[1]

    current0El.textContent = 0
    current1El.textContent = 0

    // 3. Stop showing winning player
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')

    // 2. Reset active player

    activePlayer = 0
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')

    // 3. Hide dice
    diceEl.classList.add('hidden')

    // 4. Reset playing state
    playing = true
}

init()

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
    if (playing) {
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
            switchPlayer()
        }
    }
})

buttonHold.addEventListener('click', () => {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            // Switch to the next player
            switchPlayer()
        }
    }
})


buttonNew.addEventListener('click', init)

