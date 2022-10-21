const formElement = document.querySelector('#dino-compare');
const nameElement = document.querySelector('#name');
const dietElement = document.querySelector('#diet');
const feetElement = document.querySelector('#feet');
const inchesElement = document.querySelector('#inches');
const weightElement = document.querySelector('#weight');

formElement.addEventListener('submit', e => {
    e.preventDefault();
    formElement.style.display = 'none';
})

alert('You are not a boss dude')