// ===== MOBILE MENU =====
function toggleMenu() {
  const nav = document.getElementById("navlinks");

  if (nav) {
    nav.classList.toggle("show");
  }
}


// ===== CLOSE MOBILE MENU AFTER CLICK =====
document.querySelectorAll(".navlinks a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navlinks");

    if (nav) {
      nav.classList.remove("show");
    }
  });
});


// ===== PRODUCT FILTER + SEARCH =====
const cards = Array.from(document.querySelectorAll(".product"));
const categories = document.querySelectorAll(".category");
const searchBox = document.getElementById("search");

function filterProducts(filter = "all", term = "") {
  const searchTerm = term.toLowerCase().trim();

  cards.forEach(card => {
    const category = card.dataset.category || "";
    const name = card.dataset.name || "";

    const categoryMatch =
      filter === "all" || category === filter;

    const searchMatch =
      !searchTerm || name.toLowerCase().includes(searchTerm);

    card.style.display =
      categoryMatch && searchMatch ? "block" : "none";
  });
}


// ===== CATEGORY BUTTONS =====
categories.forEach(category => {
  category.addEventListener("click", () => {

    categories.forEach(item => {
      item.classList.remove("active");
    });

    category.classList.add("active");

    const filter = category.dataset.filter || "all";
    const searchTerm = searchBox ? searchBox.value : "";

    filterProducts(filter, searchTerm);
  });
});


// ===== SEARCH =====
if (searchBox) {
  searchBox.addEventListener("input", event => {

    const activeCategory =
      document.querySelector(".category.active");

    const filter =
      activeCategory?.dataset.filter || "all";

    filterProducts(filter, event.target.value);
  });
}


// ===== PRODUCT LINK =====
document.querySelectorAll(".product-link").forEach(link => {

  link.addEventListener("click", event => {
    event.preventDefault();

    alert(
      "यह demo button है। बाद में यहाँ actual product link लगाया जा सकता है।"
    );
  });

});


// ===== NEWSLETTER =====
function subscribe(event) {
  event.preventDefault();

  alert(
    "Thanks! यह demo newsletter form है। आपका email अभी save नहीं किया गया है।"
  );
}


// ===== INITIAL FILTER =====
filterProducts("all", "");
