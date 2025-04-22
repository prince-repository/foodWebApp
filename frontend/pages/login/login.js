
const eyeSlash = document.querySelector('.fa-eye-slash');
const eye = document.querySelector('.fa-eye');
const password = document.getElementById('password');

// 🔁 Show/Hide password
eyeSlash.onclick = () => {
  password.type = 'text';
  eyeSlash.style.display = 'none';
  eye.style.display = 'block';
};

eye.onclick = () => {
  password.type = 'password';
  eye.style.display = 'none';
  eyeSlash.style.display = 'block';
};




// ✅ Combined validation + server request

document.getElementById("loginForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();

  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(el => el.innerText = "");

  // 📧 Email validation
  if (!validateEmail(emailValue)) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  // 🔐 Password validation
  if (passwordValue.length < 6) {
    showError(password, "Password must be at least 6 characters long");
    isValid = false;
  }

  if (!isValid) return;



// 📧 Email check
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ❌ Show error below input
function showError(input, message) {
  let errorSpan = input.nextElementSibling;
  errorSpan.innerText = message;
  input.style.border = "2px solid red";
}

// 🔁 Remove error on input
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", function () {
    this.style.border = "";
    let errorSpan = this.nextElementSibling;
    if (errorSpan) errorSpan.innerText = "";
  });
});




})

