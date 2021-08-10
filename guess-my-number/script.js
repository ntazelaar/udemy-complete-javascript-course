'use strict';

/* console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number!'

console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 20

console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = 23 */

const generateSecretNumber = () => {
    return Math.trunc(Math.random() * 20) + 1
}

let secretNumber = generateSecretNumber()
let score = 20
let highscore = 0

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // When there is no input 
    if (!guess) {
        displayMessage('⛔ No Number!')

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('😞 You lost the game!')
            document.querySelector('.score').textContent = score
        }
    }

})

document.querySelector('.again').addEventListener('click', function () {
    displayMessage('Start guessing...')

    secretNumber = generateSecretNumber()
    document.querySelector('.number').textContent = secretNumber

    score = 20
    document.querySelector('.score').textContent = score

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})