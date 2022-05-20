const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const list = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  
  const element = document.createElement('li');

  element.classList.add('item');

  element.textContent = option;
  list.push(element);

}
ingredientsEl.append(...list);


