document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".password-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const input = document.getElementById(button.dataset.target);
      const icon = button.querySelector("i");
      if (!input) return;
      const showing = input.type === "text";
      input.type = showing ? "password" : "text";
      icon.classList.toggle("bi-eye", showing);
      icon.classList.toggle("bi-eye-slash", !showing);
      button.setAttribute("aria-label", showing ? "Show password" : "Hide password");
    });
  });

  const forgotForm = document.getElementById("forgotForm");
  if (forgotForm) {
    forgotForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("forgotEmail");
      const msg = document.getElementById("forgotMessage");
      if (!email.checkValidity()) {
        email.classList.add("is-invalid");
        msg.textContent = "Please enter a valid email address.";
        msg.className = "form-text text-danger mt-2";
        return;
      }
      email.classList.remove("is-invalid");
      msg.textContent = "Demo reset link sent successfully.";
      msg.className = "form-text text-success mt-2";
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});
