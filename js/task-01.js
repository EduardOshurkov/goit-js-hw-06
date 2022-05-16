

const categoriesEl = document.querySelector('#categories');
const numberOfCategories = categoriesEl.children;
console.log('Number of categories: ' + numberOfCategories.length);

const listCategories = document.querySelectorAll('.item');
for (const list of listCategories) {
    const nameEl = list.querySelector('h2');
    console.log(`Category: ` + nameEl.textContent);
    const total = list.querySelectorAll('li');
    console.log(`Elements: ` + total.length);
};





