function filterMenu() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let rating = document.getElementById("rating").value;
    let items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
        let name = item.getAttribute("data-name").toLowerCase();
        let itemCategory = item.getAttribute("data-category");
        let itemPrice = item.getAttribute("data-price");
        let itemRating = parseInt(item.getAttribute("data-rating"));

        let searchMatch = name.includes(searchText);
        let categoryMatch = category === "" || category === itemCategory;
        let priceMatch = price === "" || price === itemPrice;
        let ratingMatch = rating === "" || itemRating >= parseInt(rating);

        if (searchMatch && categoryMatch && priceMatch && ratingMatch) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}
