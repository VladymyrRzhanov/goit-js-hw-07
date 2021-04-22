const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    const ingredientsDomEl = document.querySelector('#ingredients')
    ingredientsDomEl.appendChild(ingredientEl)
})