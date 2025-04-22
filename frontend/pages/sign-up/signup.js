// 👁️ Create Password show/hide
const createEyeSlash = document.getElementById('create-password-eye-slash');
const createEye = document.getElementById('create-password-eye');
const createPassword = document.querySelector('.create-password');

createEyeSlash.onclick = () => {
  createPassword.type = 'text';
  createEyeSlash.style.display = 'none';
  createEye.style.display = 'inline';
};

createEye.onclick = () => {
  createPassword.type = 'password';
  createEye.style.display = 'none';
  createEyeSlash.style.display = 'inline';
};

// 👁️ Confirm Password show/hide
const confirmEyeSlash = document.getElementById('confirm-password-eye-slash');
const confirmEye = document.getElementById('confirm-password-eye');
const confirmPassword = document.querySelector('.confirm-password');

confirmEyeSlash.onclick = () => {
  confirmPassword.type = 'text';
  confirmEyeSlash.style.display = 'none';
  confirmEye.style.display = 'inline';
};

confirmEye.onclick = () => {
  confirmPassword.type = 'password';
  confirmEye.style.display = 'none';
  confirmEyeSlash.style.display = 'inline';
};

// ✅ Email validator
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// 🔴 Error display
function showError(input, message) {
  let errorSpan = input.nextElementSibling;
  errorSpan.innerText = message;
  input.style.border = "2px solid red";
}

// 🔄 Real-time error clearing
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", function () {
    this.style.border = "";
    let errorSpan = this.nextElementSibling;
    if (errorSpan) {
      errorSpan.innerText = "";
    }
  });
});

// 🧠 Signup Form Submission Logic
document.getElementById("signupForm").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submit

  let name = document.getElementById('name');
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let username = name.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = document.querySelector(".confirm-password").value.trim();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach(el => el.innerText = "");

  // 🔴 Name validation
  if (username.length < 3) {
    showError(name, "Name must be at least 3 characters long");
    isValid = false;
  }

  // 🟡 Email validation
  if (!validateEmail(emailValue)) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  }

  // 🔵 Password validation
  if (passwordValue.length < 6) {
    showError(password, "Password must be at least 6 characters long");
    isValid = false;
  }

  // 🔁 Confirm password match
  if (confirmPasswordValue !== passwordValue) {
    showError(document.querySelector('.confirm-password'), "Passwords do not match");
    isValid = false;
  }
});
