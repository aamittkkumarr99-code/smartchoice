const productGrid=document.getElementById("productGrid");
const searchInput=document.getElementById("searchInput");
const noResults=document.getElementById("noResults");
const sortProducts=document.getElementById("sortProducts");

function getPrice(price){return Number(price.replace("₹","").replace(/,/g,"").trim());}

function displayProducts(products){
  if(!productGrid) return;
  productGrid.innerHTML="";
  noResults.style.display=products.length?"none":"block";
  products.forEach(product=>{
    const card=document.createElement("article");
    card.className="product-card";
    card.innerHTML=`
      <div class="product-image"><span>${product.emoji}</span><b>${product.badge}</b></div>
      <div class="product-body">
        <span class="product-category">${product.categoryName}</span>
        <h3>${product.name}</h3>
        <div class="rating">${product.rating} <small>(${product.reviews})</small></div>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <div class="product-actions">
          <a href="product.html?product=${encodeURIComponent(product.id)}" class="btn secondary">Review</a>
          <a href="${product.affiliateLink}" target="_blank" rel="nofollow sponsored noopener" class="btn primary">कीमत देखें →</a>
        </div>
      </div>`;
    productGrid.appendChild(card);
  });
}

function currentProducts(){
  let items=[...productData];
  const q=(searchInput?.value||"").toLowerCase().trim();
  if(q) items=items.filter(p=>(p.name+" "+p.categoryName+" "+p.description+" "+p.features.join(" ")).toLowerCase().includes(q));
  const sort=sortProducts?.value||"default";
  if(sort==="low") items.sort((a,b)=>getPrice(a.price)-getPrice(b.price));
  if(sort==="high") items.sort((a,b)=>getPrice(b.price)-getPrice(a.price));
  if(sort==="rating") items.sort((a,b)=>b.reviews-a.reviews);
  return items;
}

function refresh(){displayProducts(currentProducts());}
if(searchInput) searchInput.addEventListener("input",refresh);
if(sortProducts) sortProducts.addEventListener("change",refresh);
document.querySelectorAll(".category-card").forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(searchInput) searchInput.value="";
    const cat=btn.dataset.category;
    displayProducts(productData.filter(p=>p.category===cat));
    document.getElementById("products")?.scrollIntoView({behavior:"smooth"});
  });
});
refresh();

const themeToggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("theme");
if(savedTheme==="dark"){document.body.classList.add("dark"); if(themeToggle) themeToggle.textContent="☀️";}
themeToggle?.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  localStorage.setItem("theme",dark?"dark":"light");
  themeToggle.textContent=dark?"☀️":"🌙";
});

const menuToggle=document.getElementById("menuToggle");
const mainNav=document.getElementById("mainNav");
menuToggle?.addEventListener("click",()=>mainNav.classList.toggle("show"));
