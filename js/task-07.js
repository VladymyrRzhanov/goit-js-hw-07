const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('mousemove', onDraggingButton);
console.log()
function onDraggingButton(event) {
    textEl.style.fontSize = `${event.currentTarget.value/50}em`;

    console.log(event.currentTarget.value);
}