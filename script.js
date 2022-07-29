'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //score data
console.log(secretNumber);
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct Number!';
document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 correct Number!';
  console.log(guess, typeof guess);

  if (!guess) {
    //if no number
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    //if correct number
    document.querySelector('.message').textContent = '🎉 correct Number!';
  } else if (guess > secretNumber) {
    //if number too high
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    //if number too low
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
