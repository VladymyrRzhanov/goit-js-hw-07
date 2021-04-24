const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsDomEl = document.querySelector('#ingredients');

const ingredientsEl = ingredients.map(ingredient => {

  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

ingredientsDomEl.append(...ingredientsEl);