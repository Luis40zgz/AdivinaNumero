//1er paso: Seleccionar los elementos del DOM y guardar en variables
const scoreField = document.querySelector('.score')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const messageField = document.querySelector('.message')

//2do paso: Declarar variables
let score
let number
let message
let guess
const MIN_NUMBER = 1
const MAX_NUMBER = 20

document.addEventListener('DOMContentLoaded', inicializa)

checkButton.addEventListener('click', evalua)

againButton.addEventListener('click', inicializa)

function inicializa() {
  number = Math.trunc(Math.random() * MAX_NUMBER + MIN_NUMBER)
  score = 20
  message = 'Start guessing...'
  messageField.textContent = message
  numberField.textContent = '?'
  //checkButton.disabled = false
}

function evalua() {
  guess = parseInt(guessField.value)
  if (number === guess) {
    message = 'Congrats, you guess the number!!!'
    muestra(message)
    numberField.textContent = number
    if (score > parseInt(highscoreField.textContent))
      highscoreField.textContent = score
    document.body.bgcolor = 'green'
    //checkButton.disabled = true
  } else {
    message =
      number < guess
        ? 'The number is higher than your guess.'
        : 'The number is lower than your guess.'
    muestra(message)
    score--
    scoreField.textContent = score
    checkButton.disabled = true
  }
}

function muestra(message) {
  messageField.textContent = message
  //checkButton.disabled = true
}
