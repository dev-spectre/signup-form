const confirmPassword = document.querySelector("#confirm-password");
confirmPassword.addEventListener("input", () => {
  const password = document.querySelector("#password");
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity("");
  }
});

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  const error = input.nextElementSibling;
  if (!error?.hasAttribute("aria-hidden")) return;
  input.addEventListener("input", () => {
    error.setAttribute(
      "aria-hidden",
      !(!input.checkValidity() && input.value.length)
      );
    });
});