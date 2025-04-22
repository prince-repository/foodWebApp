// sidebar menu
const hamburgerMenuBar = document.querySelector('#hamburger');
hamburgerMenuBar.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('toggleMenuBar'); // Add/Remove class
  console.log('header js load');
  
});




// links active colors

setTimeout(() => {
  console.log("✅ Header.js Loaded and Executing...");

  let currentPage = window.location.pathname.split("/").pop().toLowerCase();
  if (currentPage === "") currentPage = "index.html";

  console.log("🔹 Current Page:", currentPage);

  const menuPages = ["starter.html", "lunch.html", "dinner.html", "breakfast.html", "brevages.html"];

  // 🔴 Highlight "Our Menu" if on any menu subpage
  if (menuPages.includes(currentPage)) {
    const menu = document.querySelector('.nav-links #our-menu');
    if (menu) {
      menu.style.color = "red";
      menu.style.fontWeight = "bold";
      menu.style.borderBottom = "2px solid red";
    }
  }

  // 🔴 Highlight other nav links like Home, About, Contact, Offer
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop().toLowerCase();

    if (linkPage === currentPage) {
      link.style.color = "red";
      link.style.fontWeight = "bold";
      link.style.borderBottom = "2px solid red";
    }
  });

}, 300);





// setTimeout(() => {
//   console.log("✅ Header.js Loaded and Executing...");

//   const currentPage = window.location.pathname.toLowerCase();
//   console.log("🔹 Current Page:", currentPage);




//   document.querySelectorAll(".nav-links a").forEach(link => {
//     const linkPage = link.getAttribute("href").toLowerCase();
//     console.log("🔸 Link Page:", linkPage);

//     if (currentPage=="/") {
//       const home = document.querySelector('#home');
//       console.log('home : ',home);
      
//       if (home) {
//         home.style.color = "red";
//         home.style.fontWeight = "bold";
//         home.style.borderBottom = "2px solid red";
//       }
       
//     }

//     // Menu ke subpages ke liye special condition
//     if (currentPage.includes("/pages/menu/")) {
//       const menu = document.querySelector('.nav-links #our-menu');
//       if (menu) {
//         menu.style.color = "red";
//         menu.style.fontWeight = "bold";
//         menu.style.borderBottom = "2px solid red";
//       }
//     }


//     // Highlight matching page
//     if (currentPage === linkPage ) {
//       link.style.color = "red";
//       link.style.fontWeight = "bold";
//       link.style.borderBottom = "2px solid red";
//     }
//   });

// }, 300);

