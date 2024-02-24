'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

*/

// VARIABLES

const message = document.querySelector('.message');
let score = 20;
let highScore = 0;
let randomNum = Math.trunc(Math.random() * 20) + 1;
let checkBtn = document.querySelector('.check');

//FUNCTIONS

const displayMessage = function (msg) {
  message.textContent = msg;
};

const displayRandomNum = function () {
  document.querySelector('.number').textContent = randomNum;
};

const disabledBtnCheck = function () {
  checkBtn.disabled = true;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumValue = Number(document.querySelector('.guess').value);

  if (guessNumValue !== 0 && guessNumValue !== randomNum) {
    guessNumValue > randomNum
      ? displayMessage('📈 Too high!')
      : displayMessage('📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      displayMessage('💥 You lost the game!');
      disabledBtnCheck();
    }
  } else if (guessNumValue === randomNum) {
    displayMessage('🎉 Correct Number!');
    displayRandomNum();
    disabledBtnCheck();

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    displayMessage('⛔️ No number');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  checkBtn.disabled = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
