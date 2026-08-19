const params=new URLSearchParams(window.location.search);
const productId=params.get("product");
const product=productData.find(item=>item.id===productId);
const container=document.getElementById("productDetails");

if(!product){
 container.innerHTML=`<div class="no-results" style="display:block"><div>🔍</div><h2>Product नहीं मिला</h2><a href="index.html" class="btn primary">Home पर जाएं</a></div>`;
}else{
 document.title=`${product.name} Review | SmartChoice`;
 container.innerHTML=`
 <div class="review-layout">
  <div class="review-image"><span>${product.emoji}</span></div>
  <div class="review-info">
   <span class="section-label">${product.categoryName}</span>
   <h1>${product.name}</h1>
   <div class="rating">${product.rating} <span>(${product.reviews} Reviews)</span></div>
   <p class="review-description">${product.description}</p>
   <div class="review-price"><small>Starting price</small><strong>${product.price}</strong></div>
   <a href="${product.affiliateLink}" target="_blank" rel="nofollow sponsored noopener" class="btn primary">कीमत देखें →</a>
   <p class="affiliate-note">Disclosure: इस page पर affiliate links हो सकते हैं। Eligible purchase पर commission मिल सकता है।</p>
  </div>
 </div>
 <div class="review-sections">
  <div class="review-box"><h2>मुख्य Features</h2><ul>${product.features.map(x=>`<li>✓ ${x}</li>`).join("")}</ul></div>
  <div class="review-box"><h2>फायदे</h2><ul>${product.pros.map(x=>`<li>✓ ${x}</li>`).join("")}</ul></div>
  <div class="review-box"><h2>कमियां</h2><ul>${product.cons.map(x=>`<li>• ${x}</li>`).join("")}</ul></div>
 </div>`;
}
