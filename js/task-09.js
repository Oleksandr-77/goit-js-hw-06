function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

function changeButtonColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  console.log(colorEl.textContent = color);
  
}

buttonColorEl.addEventListener('click', changeButtonColor);
