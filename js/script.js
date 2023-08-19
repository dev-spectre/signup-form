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
