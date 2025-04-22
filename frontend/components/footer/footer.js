 // footer section

// Dynamically set the year
document.getElementById("year").textContent = new Date().getFullYear();

// Back to Top Button Functionality
// document.getElementById("backToTop").addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     console.log('back to top click');
    
// });




// Newsletter Subscription Functionality
function subscribe() {
    let email = document.getElementById("newsletter-email").value;
    let message = document.getElementById("subscription-message");

    if (email === "") {
        message.textContent = "Please enter your email!";
        message.style.color = "red";
    } else if (!validateEmail(email)) {
        message.textContent = "Invalid email format!";
        message.style.color = "red";
    } else {
        message.textContent = "Subscribed successfully!";
        message.style.color = "deepskyblue";
        document.getElementById("newsletter-email").value = "";
    }
}

// Email Validation
function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}