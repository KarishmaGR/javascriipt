# Project Related To Dom

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-tyheui?file=4-GuessTheNumber%2Fchaiaurcode.js,5-keyboard%2Fchaiaurcode.js)


# Solution Code

## Project 1
```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(button);

button.forEach((color) => {
  color.addEventListener('click', () => {
    body.style.backgroundColor = color.id;
  });
});

```


## Project2 Solution Code
```javascript
let Button = document.querySelector('button');
// const input = document.getElementsByTagName('button');

let result = document.getElementById('results');

Button.addEventListener('click', () => {
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Please Enter a Valid Height ${height} </span>`;
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Please Enter a Valid Height ${weight}</span>`;
  }
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  result.innerHTML = `<span>${bmi}</span>`;
});

```


## Project 3 Solution Code

```javascript
const clock = document.querySelector('#clock');

setInterval(() => {
  const Time = new Date();
  const localTime = Time.toLocaleTimeString();
  clock.innerHTML = `<span>${localTime}</span>`;
}, 1000);

```


## Project 4 Solution Code

```javascript
const form = document.querySelector('form');
const submit = document.querySelector('#subt');
const resultParse = document.querySelector('.resultParas');
let Guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let LowOrHi = document.querySelector('.lowOrHi');
let userInput = document.getElementById('guessField');
// console.log(userInput.setAttribute('id', '123'));

let randomNumber = Math.floor(Math.random() * 100 + 1);
// let previousguess = [];
let playgame = true;
let guessnum = 1;
let p = document.createElement('p');

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let val = parseInt(userInput.value);
    validateGuess(val);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage(`${guess} is Not A Number`);
  } else if (guess < 1) {
    displayMessage(`Please Enter Number greater than 1`);
  } else if (guess > 100) {
    displayMessage(`Please Enter NUmber Greate than 100`);
  } else {
    // previousguess.push(guess);
    if (guessnum === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Number Was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function displayGuess(guess) {
  userInput.value = '';
  Guesses.innerHTML += `${guess} ,`;
  guessnum++;
  remaining.innerHTML = `${11 - guessnum}`;
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed It Rigth!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Guess Number is Low `);
  } else if (guess > randomNumber) {
    displayMessage(`Guess Number is High`);
  }
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<p id="newButton">Start A New Game<p>`;
  resultParse.appendChild(p);
  playgame = false;
  startNewGame();
}

function startNewGame() {
  const newButton = document.querySelector('#newButton');
  newButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    guessnum = 1;
    previousguess = [];
    resultParse.removeChild(p);
    Guesses.innerHTML = '';
    remaining.innerHTML = `${11 - guessnum}`;
    userInput.removeAttribute('disabled');
    displayMessage('');
    playgame = true;
  });
}

```