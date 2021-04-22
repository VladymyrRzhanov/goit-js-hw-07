const categoriesEl = document.querySelector('#categories')
const categoryListEl = categoriesEl.children;
console.log(`В списке ${categoryListEl.length} категории.`);

const makeOutput = [...categoryListEl].forEach(category => {
    const categoriesNameEl = category.querySelector('h2');
    console.log(`Категория: ${categoriesNameEl.textContent}`);
    const categoryListItemEl= category.querySelectorAll('li');
    console.log(`Количество элементов: ${categoryListItemEl.length}`)
})
