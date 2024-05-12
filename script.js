'use strict';
//increase tries score
const decScore = function () {
  let a = Number(document.querySelector('.score').textContent);
  a++;
  document.querySelector('.score').textContent = a;
};
//function for dc
const docQueSel = function (target, message) {
  document.querySelector(target).textContent = message;
};
//Initializing endgame condition
let cond = false;
//generation number
let secretNumber = Math.floor(Math.random() * 20) + 1;
//When we click Check!

const checker = function () {
  const guess = Number(document.querySelector('.guess').value);

  //checks if number is already guessed
  if (cond === true) {
    docQueSel('.message', 'Game has ended!');
    document.querySelector('body').style.backgroundColor = '#EE4B2B';
    //when there is no input
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!  ';
    //when input is less than range
  } else if (guess < 1) {
    document.querySelector('.message').textContent =
      'Number should be above 1!';
    //when input is greater than range
  } else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Number should be less than 20!';
    //when input is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉Too Low!';
    decScore();
    //when input is too high
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈Too high!';
    decScore();
    //when input is correct
  } else if (guess === secretNumber) {
    decScore();
    document.querySelector('.message').textContent =
      '🎉 Congrats! you got it right';
    document.querySelector('.number').textContent = secretNumber;
    cond = true;
    //changing css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //for the highscore
    if (
      Number(document.querySelector('.score').textContent) <=
        Number(document.querySelector('.highscore').textContent) &&
      Number(document.querySelector('.highscore').textContent) !== 0
    ) {
      document.querySelector('.highscore').textContent = Number(
        document.querySelector('.score').textContent
      );
    } else if (Number(document.querySelector('.highscore').textContent) === 0) {
      document.querySelector('.highscore').textContent = Number(
        document.querySelector('.score').textContent
      );
    }
  }
};
document.querySelector('body').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checker();
  }
});
document.querySelector('.check').addEventListener('click', checker);
//When we click on Again! button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 0;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  cond = false;
});
