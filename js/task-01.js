

const categoriesEl = document.querySelector('#categories');
const listCategories = document.querySelectorAll('.item');



const numberOfCategories = categoriesEl.children;
console.log('Number of categories: ' + numberOfCategories.length);

for (const element of listCategories) {
    console.log(`Category: ` + element.firstElementChild.textContent);
    console.log(`Elements: ` + element.lastElementChild.children.length);
};








