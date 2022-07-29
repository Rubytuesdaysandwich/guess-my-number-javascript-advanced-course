'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1; //the secret number that the game matches the guess with
let score = 20; //score data
//console.log(secretNumber);
//console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct Number!';

// document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 correct Number!';
  console.log(guess, typeof guess);

  if (!guess) {
    //if  number = 0 or no input
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    //if correct number
    //display the correct number after the person guesses right
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 correct Number!';
    //style the body backGoundColor to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increase size of number after winning with css style
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      //if number too high
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //if number too low
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
