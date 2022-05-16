const refs = {
    buttonDecrementNumber: document.querySelector("button[data-action = 'decrement']"),
    buttonIncrementNumber: document.querySelector("button[data-action = 'increment']"),
    valueNumber: document.querySelector('#value'),
};

let counterNumber = 0;


refs.buttonDecrementNumber.addEventListener('click', () => {
    counterNumber -= 1;
    refs.valueNumber.textContent = `${counterNumber}`;
});


refs.buttonIncrementNumber.addEventListener('click', () => {
    counterNumber += 1;
    refs.valueNumber.textContent = `${counterNumber}`;
});