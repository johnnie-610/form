document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='tel'], input[type='password']"
  );
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const submitBtn = document.querySelector("input[type='submit']");

  function validateForm() {
    let allFilled = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    const passwordsMatch = password.value === confirm.value;

    if (password.value !== confirm.value) {
      confirm.setCustomValidity("Passwords don't match");
    } else {
      confirm.setCustomValidity("");
    }

    if (allFilled && passwordsMatch) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }

  // Initial validation
  validateForm();

  inputs.forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  // Move the form submission handling to the submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!submitBtn.disabled) {
      form.submit();
    }
  });
});
