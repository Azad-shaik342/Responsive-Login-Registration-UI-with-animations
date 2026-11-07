document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  const username = document.getElementById("username");
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");
  const confirm = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");
  const usernameFeedback = document.getElementById("usernameFeedback");
  const emailFeedback = document.getElementById("emailFeedback");
  const confirmFeedback = document.getElementById("confirmFeedback");
  const alertBox = document.getElementById("registerAlert");
  let usernameAvailable = false;
  let emailAvailable = false;
  let usernameTimer, emailTimer;

  const setFeedback = (el, message, ok) => {
    el.textContent = message;
    el.className = "form-text mt-1 " + (ok ? "text-success" : "text-danger");
  };

  async function checkAvailability(type, value, feedback) {
    if (!value) return;
    try {
      const response = await fetch("php/check-user.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({type, value})
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (type === "username") usernameAvailable = data.available;
      if (type === "email") emailAvailable = data.available;
      setFeedback(feedback, data.message, data.available);
      if (type === "username") username.classList.toggle("is-invalid", !data.available);
      if (type === "email") email.classList.toggle("is-invalid", !data.available);
    } catch (error) {
      if (type === "username") usernameAvailable = false;
      if (type === "email") emailAvailable = false;
      setFeedback(feedback, "Unable to check availability. Start the project with a PHP server.", false);
    }
  }

  username.addEventListener("input", () => {
    clearTimeout(usernameTimer);
    usernameAvailable = false;
    const value = username.value.trim();
    if (!/^[A-Za-z0-9_]{3,20}$/.test(value)) {
      setFeedback(usernameFeedback, "Use 3–20 letters, numbers, or underscores.", false);
      return;
    }
    setFeedback(usernameFeedback, "Checking availability…", false);
    usernameTimer = setTimeout(() => checkAvailability("username", value, usernameFeedback), 350);
  });

  email.addEventListener("input", () => {
    clearTimeout(emailTimer);
    emailAvailable = false;
    const value = email.value.trim();
    if (!email.checkValidity()) {
      setFeedback(emailFeedback, "Enter a valid email address.", false);
      return;
    }
    setFeedback(emailFeedback, "Checking availability…", false);
    emailTimer = setTimeout(() => checkAvailability("email", value, emailFeedback), 350);
  });

  const checkPasswordMatch = () => {
    const match = password.value !== "" && password.value === confirm.value;
    confirm.classList.toggle("is-invalid", confirm.value !== "" && !match);
    confirm.classList.toggle("is-valid", match);
    if (confirm.value !== "" && !match) {
      confirmFeedback.textContent = "Passwords do not match.";
    }
    return match;
  };
  password.addEventListener("input", checkPasswordMatch);
  confirm.addEventListener("input", checkPasswordMatch);

  form.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();

    let valid = true;
    const fullName = document.getElementById("fullName");

    [fullName, username, email, password, confirm, terms].forEach(el => el.classList.remove("is-invalid"));

    if (!fullName.value.trim()) { fullName.classList.add("is-invalid"); valid = false; }
    if (!/^[A-Za-z0-9_]{3,20}$/.test(username.value.trim()) || !usernameAvailable) { username.classList.add("is-invalid"); valid = false; }
    if (!email.checkValidity() || !emailAvailable) { email.classList.add("is-invalid"); valid = false; }
    if (password.value.length < 8) { password.classList.add("is-invalid"); valid = false; }
    if (!checkPasswordMatch()) { confirm.classList.add("is-invalid"); valid = false; }
    if (!terms.checked) { terms.classList.add("is-invalid"); valid = false; }

    alertBox.classList.add("d-none");
    if (!valid) {
      alertBox.className = "alert alert-danger";
      alertBox.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>Please correct the highlighted fields and complete the AJAX availability checks.';
      return;
    }

    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("successModal"));
    modal.show();
    form.reset();
    usernameAvailable = false;
    emailAvailable = false;
    usernameFeedback.textContent = "3+ letters, numbers, or underscores.";
    emailFeedback.textContent = "We'll check availability automatically.";
  });
});
