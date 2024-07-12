function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
colorButton.addEventListener("click", handleColor);
function handleColor(event) {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}
