function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector(".input-number");
const createButton = document.querySelector(".create-button");
const destroyButton = document.querySelector(".destroy-button");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", handleCreateButton);
function handleCreateButton(event) {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = "";
    createBoxes(amount);
    inputNumber.value = "";
  } else {
    alert("Please, enter number from 1 to 100");
  }
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }
  boxesContainer.append(...boxes);
}

destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes(event) {
  boxesContainer.innerHTML = "";
}
