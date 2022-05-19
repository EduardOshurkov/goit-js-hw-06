const textOutputEl = document.querySelector('#name-output');
const placeholderEl = document.querySelector('#name-input');


const onOutputChange = (event) => {
    event.currentTarget.value === ""
    ? textOutputEl.textContent = "Anonymous"
    : textOutputEl.textContent = event.currentTarget.value
}

placeholderEl.addEventListener("input", onOutputChange)