function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  colorEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
}

const changeBackgroundColor = () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = refs.bodyEl.style.backgroundColor;

}

refs.buttonEl.addEventListener("click",changeBackgroundColor)
