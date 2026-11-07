document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const alertBox = document.getElementById("loginAlert");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    let valid = true;

    email.classList.remove("is-invalid");
    password.classList.remove("is-invalid");

    if (!email.checkValidity()) { email.classList.add("is-invalid"); valid = false; }
    if (!password.checkValidity()) { password.classList.add("is-invalid"); valid = false; }

    alertBox.classList.add("d-none");
    if (!valid) return;

    alertBox.className = "alert alert-success";
    alertBox.innerHTML = '<i class="bi bi-check-circle me-2"></i>Login validation passed. This frontend demo does not authenticate against a real database.';
  });
});
