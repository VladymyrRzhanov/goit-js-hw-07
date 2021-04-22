const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrementBtnClickHandler = () => { counterValue -= 1; valueEl.textContent = counterValue };
const incrementBtnClickHandler = () => { counterValue += 1; valueEl.textContent = counterValue };

decrementBtn.addEventListener('click', decrementBtnClickHandler);
incrementBtn.addEventListener('click', incrementBtnClickHandler);




