function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBackground = document.querySelector("body");

const changeColor = document.querySelector('.change-color');

const textColor = document.querySelector('.color');

changeColor.addEventListener("click", () => {

  const randomColor = getRandomHexColor();

  changeBackground.style.backgroundColor = randomColor;
  
  textColor.textContent = randomColor;

});