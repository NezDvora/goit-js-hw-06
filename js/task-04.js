const counterVal = document.querySelector('#value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let countVal = 0;

incrementBtn.addEventListener('click', () => {
    countVal += 1;
counterVal.textContent = countVal;
});

decrementBtn.addEventListener('click', () => {
    countVal -= 1;
    counterVal.textContent = countVal;
});