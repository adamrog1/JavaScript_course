'use strict';

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector('.player--1');
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnReset = document.querySelector('.btn--new');
const currentPointsEl0 = document.querySelector(`#current--0`);
const currentPointsEl1 = document.querySelector(`#current--1`);
const totalPointsEl0 = document.querySelector(`#score--0`);
const totalPointsEl1 = document.querySelector(`#score--1`);
const diceEl = document.querySelector('.dice');

let currentPlayer = 0;
let totalScore = [0, 0];
let currentScore = 0;
let playing = true;

const newGame = function () {
  currentPlayer = 0;
  totalScore = [0, 0];
  currentScore = 0;
  playing = true;
  currentPointsEl0.textContent = 0;
  currentPointsEl1.textContent = 0;
  totalPointsEl0.textContent = 0;
  totalPointsEl1.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

newGame();

const changePlayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//action for clickin roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    let randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomDiceRoll}.png`;
    if (randomDiceRoll !== 1) {
      currentScore += randomDiceRoll;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
      console.log(currentPlayer);
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    totalScore[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      totalScore[currentPlayer];
    if (totalScore[currentPlayer] >= 100) {
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player-active');
      playing = false;
    } else changePlayer();
    console.log(totalScore);
  }
});

btnReset.addEventListener('click', newGame);
