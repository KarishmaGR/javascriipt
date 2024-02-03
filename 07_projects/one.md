#Project Related To Dom

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