const foodItems = [
  {
    name: "Tandoori Mushroom",
    file: "/pages/menu/breakfast/breakfast.html"
  },
  {
    name: "Chocolate Shake",
    file: "/pages/menu/breveges-and-shakes/brevages.html"
  },
  {
    name: "Peanut Butter Shake",
    file: "/pages/menu/brevages-and-shakes/brevages.html"
  },
  {
    name: "Paneer Tikka",
    file: "/pages/menu/starter/starter.html"
  },
  {
    name: "Chicken Biryani",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "Cheese Pizza",
    file: "/pages/menu/pizza/pizza.html"
  },
  {
    name: "cake",
    file: "/pages/menu/cakes/cake-&-pastry.html"
  },
  {
    name: "starter",
    file: "/pages/menu/starter/starter.html"
  },
  {
    name: "breakfast",
    file: "/pages/menu/breakfast/breakfast.html"
  },
  {
    name: "lunch",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "dinner",
    file: "/pages/menu/dinner/dinner.html"
  },
  {
    name: "pizza",
    file: "/pages/menu/pizza/pizza.html"
  },
  {
    name: "pasta",
    file: "/pages/menu/fast-food/fast-food.html"
  },
  {
    name: "burger",
    file: "/pages/menu/burger/burgur.html"
  },
  {
    name: "samosa",
    file: "/pages/menu/fast-food/fast-food.html"
  },
  {
    name: "idli",
    file: "/pages/menu/fast-food/fast-food.html"
  },
  {
    name: "dosa",
    file: "/pages/menu/starter/starter.html"
  },
  {
    name: "chaat",
    file: "/pages/menu/fast-food/fast-food.html"
  },
  {
    name: "veg briyani",
    file: "/pages/menu/dinner/dinner.html"
  },
  {
    name: "non briyani",
    file: "/pages/menu/dinner/dinner.html"
  },
  {
    name: "rice",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "chapati",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "roti",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "paratha",
    file: "/pages/menu/breakfast/breakfast.html"
  },

  {
    name: "paneer sabji",
    file: "/pages/menu/lunch/lunch.html"
  },
  {
    name: "sabji",
    file: "/pages/menu/lunch/lunch.html"
  },
];


const input = document.getElementById("liveSearchInput");
const suggestionsBox = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const keyword = input.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (keyword === "") {
    suggestionsBox.style.display = "none";
    return;
  }

  const filtered = foodItems.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );

  if (filtered.length > 0) {
    suggestionsBox.style.display = "block";
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item.name;
      div.addEventListener("click", () => {
        window.location.href = item.file;
      });
      suggestionsBox.appendChild(div);
    });
  } else {
    suggestionsBox.style.display = "block";
    const div = document.createElement("div");
    div.id='emoji';
    div.textContent = "🤔";
    suggestionsBox.appendChild(div);
  }
});
