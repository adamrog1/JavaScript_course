'use strict';

let highscore = 0;
let score, randomNumber;
let won = false;
function startNewGame() {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = randomNumber;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  displayMessage('Start guessing...');
  won = false;
}

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

startNewGame();

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.guess').value);
  if (score != 0 && !won) {
    //when number is not 0 or below or higher than 20
    if (guessingNumber > 20 || guessingNumber <= 0) {
      displayMessage('Wrong number');
      //when you won
    } else if (guessingNumber === randomNumber) {
      displayMessage("That's correct number!");
      if (score > highscore) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector(`body`).style.backgroundColor = '#60b347';
      document.querySelector(`.number`).style.wiidth = '30rem';
      document.querySelector('.number').textContent = randomNumber;
      won = true;
      //when guess too low
    } else if (guessingNumber != randomNumber) {
      displayMessage(guessingNumber > randomNumber ? 'Too high!' : 'Too low');
      if (score == 1) {
        displayMessage('You lost!');
      }
      score--;
      document.querySelector(`.score`).textContent = score;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  startNewGame();
});
