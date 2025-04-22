// Selecting Elements
const foodsContainer = document.querySelector(".foods");
const leftScroll = document.getElementById("left-scroll");
const rightScroll = document.getElementById("right-scroll");

// Scroll Amount (Kitna scroll kare)
const scrollAmount = 200; // Adjust as needed

// Left Scroll Button
leftScroll.addEventListener("click", () => {
     foodsContainer.scrollLeft -= scrollAmount;
    
});

// Right Scroll Button
rightScroll.addEventListener("click", () => {
    foodsContainer.scrollLeft += scrollAmount;
});



var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});




// what about our custome say

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});


// timer

const countdownElements = document.querySelectorAll('.countdown');

// 🕒 Offer End Time (Change as needed)
const offerEndTime = new Date("may 20, 2025 23:59:59").getTime();
console.log(offerEndTime +" offer end time");


const updateCountdown = () => {
    let now = new Date().getTime();
    console.log(now + " now time");
    
    let timeLeft = offerEndTime - now;

    console.log(timeLeft + " time left");
    

    if (timeLeft > 0) {
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
console.log(days + " days left");
console.log(hours + " hours left");
console.log(minutes + " minutes left");
console.log(seconds + " seconds left");


        countdownElements.forEach(ele => {
            ele.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        });
    } else {
        countdownElements.forEach(ele => {
            ele.innerHTML = "🎉 Offer Ended!";
        });
        clearInterval(countdownInterval);
    }
};

// ⏳ Start Countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();



// 🔹 1000 = 1 second
// 🔹 1000 * 60 = 1 minute
// 🔹 1000 * 60 * 60 = 1 hour
// 🔹 1000 * 60 * 60 * 24 = 1 day





