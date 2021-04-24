const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('mousemove', onDraggingButton);

function onDraggingButton(event) {
    textEl.style.fontSize = `${event.currentTarget.value/50}em`;
};