const searchInput = document.getElementById("search-text");
const menuItems = document.querySelectorAll(".menu-item");

const foodTypeFilters = document.querySelectorAll('input[name="food-type"]');
const priceFilter = document.querySelector('select[name="price"]');
const ratingFilter = document.querySelector('select[name="ratings"]');
const availabilityFilter = document.querySelector('select[name="availability"]');
const deliveryTimeFilter = document.getElementById("deliveryTimeFilter");

function applyFilters() {
  const searchText = searchInput.value.toLowerCase().trim();

  const selectedTypes = Array.from(foodTypeFilters)
    .filter(input => input.checked)
    .map(input => input.value);

  const selectedPrice = priceFilter.value;
  const selectedRating = ratingFilter.value;
  const selectedAvailability = availabilityFilter.value;
  const selectedDeliveryTime = deliveryTimeFilter.value;

  menuItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    const type = item.dataset.type;
    const price = parseFloat(item.dataset.price);
    const rating = parseFloat(item.dataset.rating);
    const stock = item.dataset.stock;
    const time = parseInt(item.dataset.time);

    let isVisible = true;

    // 🔍 Search filter
    if (searchText && !name.includes(searchText)) {
      isVisible = false;
    }

    // ✅ Food type filter
    if (!selectedTypes.includes("all") && selectedTypes.length > 0 && !selectedTypes.includes(type)) {
      isVisible = false;
    }

    // 💰 Price filter
    if (selectedPrice === "under-300" && price >= 300) {
      isVisible = false;
    } else if (selectedPrice === "above-300" && price < 300) {
      isVisible = false;
    }

    // ⭐ Rating filter
    if (selectedRating === "2-star" && rating < 2) {
      isVisible = false;
    } else if (selectedRating === "4-star" && rating < 4) {
      isVisible = false;
    }

    // 📦 Stock Availability
    if (selectedAvailability === "sold-in" && stock !== "in") {
      isVisible = false;
    } else if (selectedAvailability === "sold-out" && stock !== "out") {
      isVisible = false;
    }

    // ⏱️ Delivery Time
    if (selectedDeliveryTime === "fast" && time > 30) {
      isVisible = false;
    } else if (selectedDeliveryTime === "normal" && (time <= 30 || time > 60)) {
      isVisible = false;
    } else if (selectedDeliveryTime === "slow" && time <= 60) {
      isVisible = false;
    }

    // 🔘 Show or hide
    item.style.display = isVisible ? "flex" : "none";
  });
}

// 🟢 Event listeners
searchInput.addEventListener("input", applyFilters);
foodTypeFilters.forEach(cb => cb.addEventListener("change", applyFilters));
priceFilter.addEventListener("change", applyFilters);
ratingFilter.addEventListener("change", applyFilters);
availabilityFilter.addEventListener("change", applyFilters);
deliveryTimeFilter.addEventListener("change", applyFilters);

// By default check 'All'
document.querySelector('input[value="all"]').checked = true;

// Run initially
applyFilters();
