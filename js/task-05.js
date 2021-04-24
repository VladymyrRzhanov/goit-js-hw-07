const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputValue);

const initialValue = outputEl.textContent;
function inputValue(event) {
    if (event.currentTarget.value === '') {
       return outputEl.textContent = initialValue;
   };
   return outputEl.textContent = event.currentTarget.value;
};

