


const inputValidation = document.querySelector('#validation-input');
const inputLength = document.querySelector('input[data-length]');




inputValidation.addEventListener('blur', () => {
    if (inputLength.value.length === Number(inputLength.dataset.length)) {
        inputValidation.classList.remove('invalid')
        inputValidation.classList.add('valid')
    } else {
        inputValidation.classList.remove('valid')
        inputValidation.classList.add('invalid')
    }
});
