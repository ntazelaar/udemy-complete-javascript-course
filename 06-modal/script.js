'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

const openModal = () => {
    console.log('Button clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let button of btnsOpenModal)
    button.addEventListener('click', openModal)


btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (event) => {
    console.log(event.key)

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})