'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //the secret number that the game matches the guess with
let score = 20; //score data
let highScore = 0; //highScore data
//console.log(secretNumber);
//console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 correct Number!';

// document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 correct Number!';
  console.log(guess, typeof guess);

  if (!guess) {
    //if  number = 0 or no input
    document.querySelector('.message').textContent = '⛔ No number!';
    //---------win
  } else if (guess === secretNumber) {
    //if correct number
    //display the correct number after the person guesses right
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 correct Number!';
    //style the body backGoundColor to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increase size of number after winning with css style
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //---------number to high
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
    //---------number to low
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
//-----------RESET THE GAME

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //assign the 20 to the score variable
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reset the secret number
  //console.log(secretNumber);
  document.querySelector('.score').textContent = score; //set score to 20
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  //restore css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
