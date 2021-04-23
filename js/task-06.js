const inputEl = document.querySelector('#validation-input');
const valueLength = document.querySelector('[data-length="6"]');

inputEl.addEventListener('blur', isValueWrite);
function isValueWrite(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}
