const textOutputEl = document.querySelector('#name-output');
const placeholderEl = document.querySelector('#name-input');


placeholderEl.addEventListener("input", onOutputChange)

function onOutputChange(event) {
    if (placeholderEl.textContent = "") {
        textOutputEl.textContent = "Anonymous"
    } else {
        textOutputEl.textContent = event.currentTarget.value;
    }
}