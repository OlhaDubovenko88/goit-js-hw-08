const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);
function handleInput(event) {
  const nameInputTrimed = event.currentTarget.value.trim();
  if (nameInputTrimed === "") {
    return (nameOutput.textContent = "Anonymous");
  } else {
    return (nameOutput.textContent = nameInputTrimed);
  }
}
