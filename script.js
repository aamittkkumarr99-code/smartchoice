function toggleMenu() {
  const menu = document.getElementById("navlinks");

  if (menu) {
    menu.classList.toggle("show");
  }
}


// Mobile menu link click
document.querySelectorAll(".navlinks a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navlinks");

    if (menu) {
      menu.classList.remove("show");
    }
  });
});


// Product search
const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");
const categories = document.querySelectorAll(".category");

let currentFilter = "all";

function filterProducts() {

  const searchText = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  products.forEach(product => {

    const category = product.dataset.category || "";
    const name = product.dataset.name || "";

    const categoryMatch =
      currentFilter === "all" ||
      category === currentFilter;

    const searchMatch =
  !searchText ||
  name.toLowerCase().includes(searchText) ||
  category.toLowerCase().includes(searchText);

    product.style.display =
      categoryMatch && searchMatch ? "" : "none";
  });
}


// Category buttons
categories.forEach(category => {

  category.addEventListener("click", () => {

    categories.forEach(item => {
      item.classList.remove("active");
    });

    category.classList.add("active");

    currentFilter =
      category.dataset.filter || "all";

    filterProducts();
  });

});


// Mobile Search
const mobileSearchInput = document.getElementById("mobile-search");

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", () => {

    if (searchInput) {
      searchInput.value = mobileSearchInput.value;
    }

    filterProducts();
  });
}

// Product buttons
document.querySelectorAll(".product-link").forEach(button => {

  button.addEventListener("click", () => {

    alert(
      "Product link yahan baad mein add kiya ja sakta hai."
    );

  });

});


// Newsletter
function subscribe(event) {

  event.preventDefault();

  alert(
    "Thanks for subscribing! This is currently a demo form."
  );

}

// Search buttons
const searchButtons = document.querySelectorAll(".search-box button, .mobile-search button");

searchButtons.forEach(button => {
  button.addEventListener("click", () => {

    const input = button.closest(".search-box, .mobile-search")
      ?.querySelector("input");

    if (input) {
      input.dispatchEvent(new Event("input"));
      input.focus();
    }

    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
