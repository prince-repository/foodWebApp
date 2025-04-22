// Dynamically set the year
// document.getElementById("year").textContent = new Date().getFullYear();

// document.getElementById("backToTop").addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// });




document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");
  const nameInput = form.querySelector("input[name='name']");
  const emailInput = form.querySelector("input[name='email']");
  const messageInput = form.querySelector("textarea[name='message']");
  const submitButton = form.querySelector("button");
  const messageDisplay = document.createElement("p");
  messageDisplay.className = "form-message";
  form.appendChild(messageDisplay);

  // Error message display function
  function showError(input, message) {
      let error = input.nextElementSibling;
      if (!error || !error.classList.contains("error-message")) {
          error = document.createElement("p");
          error.className = "error-message";
          input.parentNode.insertBefore(error, input.nextSibling);
      }
      error.textContent = message;
      input.classList.add("error-border");
  }

  // Remove error function
  function clearError(input) {
      let error = input.nextElementSibling;
      if (error && error.classList.contains("error-message")) {
          error.remove();
      }
      input.classList.remove("error-border");
  }

  // Email validation function
  function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Name validation function (only letters and spaces, min 3 chars)
  function isValidName(name) {
      return /^[A-Za-z\s]{3,}$/.test(name);
  }

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;

      // Validate Name (at least 3 characters, only letters and spaces)
      if (nameInput.value.trim() === "") {
          showError(nameInput, "Name is required");
          isValid = false;
      } else if (!isValidName(nameInput.value.trim())) {
          showError(nameInput, "Enter a valid name (at least 3 letters)");
          isValid = false;
      } else {
          clearError(nameInput);
      }

      // Validate Email
      if (emailInput.value.trim() === "") {
          showError(emailInput, "Email is required");
          isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
          showError(emailInput, "Enter a valid email");
          isValid = false;
      } else {
          clearError(emailInput);
      }

      // Validate Message (at least 10 characters)
      if (messageInput.value.trim() === "") {
          showError(messageInput, "Message cannot be empty");
          isValid = false;
      } else if (messageInput.value.trim().length < 10) {
          showError(messageInput, "Message must be at least 10 characters long");
          isValid = false;
      } else {
          clearError(messageInput);
      }

      if (isValid) {
          messageDisplay.textContent = "✅ Thank you! Your message has been sent successfully.";
          messageDisplay.style.color = "green";
          alert("✅ Thank you! Your message has been sent successfully.");
          form.reset();
      }
  });
});