const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const option = ingredients[i];
  
  const list = document.createElement('li');

  list.classList.add('item');
  list.textContent = option;

  ingredientsEl.append(list);
}



// const elements = [];

// const makeIngradientsList = () => {
// const ingredientsEl = document.querySelector('#ingredients');
//   console.log(ingredientsEl);
  
//   // const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const option = ingredients[i];
  
//   const list = document.createElement('li');

//   list.classList.add('item');
//   list.textContent = option;


//   ingredientsEl.append(list);

//   return ingredientsEl;
// }
//   console.log(makeIngradientsList(ingredientsEl));
// }









