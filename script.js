'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //the secret number that the game matches the guess with
let score = 20; //score data
let highScore = 0; //highScore data

//functions area------------
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//end functions-------------

//console.log(secretNumber);
//console.log(document.querySelector('.message').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉 correct Number!';
  console.log(guess, typeof guess);

  if (!guess) {
    //if  number = 0 or no input
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    //------if the number is correct
  } else if (guess === secretNumber) {
    //if correct number
    //display the correct number after the person guesses right
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = '🎉 correct Number!';
    displayMessage('🎉 correct Number!');
    //style the body backGroundColor to green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increase size of number after winning with css style
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //unified the two conditions together makes the code less and decrease chance of bugs
  else if (guess !== secretNumber) {
    if (score > 1) {
      // if guess not equal to secret number it will tell the user if to high or too low
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      //ternary operator allows us to use one line to compare if its to high or low.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //if number too high
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//     //---------number to low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       //if number too low
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//});
//-----------RESET THE GAME

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //assign the 20 to the score variable
  secretNumber = Math.trunc(Math.random() * 20) + 1; //reset the secret number
  //console.log(secretNumber);
  document.querySelector('.score').textContent = score; //set score to 20
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMessage('start guessing...');
  //restore css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
