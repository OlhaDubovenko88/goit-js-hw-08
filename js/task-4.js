const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.passwordInput;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const formObj = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    console.log(formObj);
    loginForm.reset();
  }
}
