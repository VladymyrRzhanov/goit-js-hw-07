const inputEl = document.querySelector('[type="number"]');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesCollectionEl = document.querySelector('#boxes');

inputEl.addEventListener('input', takeAmount);
boxesCollectionEl.classList.add('gallery-boxes');

function takeAmount() {
    renderBtn.addEventListener('click', callCreateBoxesFunction );
    destroyBtn.addEventListener('click', destroyBoxes);
};

const callCreateBoxesFunction = () => createBoxes(inputEl.value);

const createBoxes = (amount) => {
    boxesCollectionEl.innerHTML = '';
    let galleryBoxesArray = [];
    for (let i = 0; i < amount; i += 1) {
        const galleryBox = document.createElement('div');
        galleryBox.classList.add('gallery-box');
        galleryBox.style.width = `${30 + i * 10}px`;
        galleryBox.style.height = `${30 + i * 10}px`;
        galleryBox.style.border = '1px solid black';
        galleryBox.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
        galleryBoxesArray.push(galleryBox);
    };
    boxesCollectionEl.append(...galleryBoxesArray);
};

const destroyBoxes = () => {
    inputEl.value = '';
    boxesCollectionEl.innerHTML = '';
    renderBtn.removeEventListener('click', callCreateBoxesFunction);
    destroyBtn.removeEventListener('click', destroyBoxes);
};