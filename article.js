const articles={
"earbuds-guide":{category:"Audio",title:"Wireless Earbuds खरीदते समय किन बातों का ध्यान रखें?",icon:"🎧",intro:"Wireless earbuds खरीदते समय केवल price देखना पर्याप्त नहीं है। Battery, comfort, connectivity और device compatibility पर ध्यान दें।",sections:[
{title:"1. Battery Life",text:"अगर आप earbuds लंबे समय तक इस्तेमाल करते हैं, तो battery backup और charging case की capacity को देखें।"},
{title:"2. Comfort",text:"Earbuds लंबे समय तक पहनने वाले हैं तो उनका fit और comfort महत्वपूर्ण है।"},
{title:"3. Connectivity",text:"अपने smartphone या दूसरे device के साथ compatibility और connection stability की जानकारी जांचें।"},
{title:"4. Reviews",text:"खरीदने से पहले कई reliable reviews पढ़ें और केवल एक rating के आधार पर निर्णय न लें।"}]},
"powerbank-guide":{category:"Accessories",title:"Power Bank खरीदने की पूरी Guide",icon:"🔋",intro:"Power bank चुनते समय capacity के साथ size, charging speed, ports और device compatibility को भी देखें।",sections:[
{title:"1. Capacity",text:"अपने device और usage के हिसाब से उचित capacity चुनें।"},
{title:"2. Charging Speed",text:"Power bank और device दोनों की supported charging specifications जांचें।"},
{title:"3. Ports",text:"देखें कि power bank में आपके devices के लिए जरूरी charging ports मौजूद हैं या नहीं।"},
{title:"4. Size",text:"Travel के लिए compact और convenient design उपयोगी हो सकता है।"}]},
"smartwatch-guide":{category:"Tech",title:"Smartwatch खरीदने से पहले क्या देखें?",icon:"⌚",intro:"Smartwatch चुनते समय compatibility, battery और available features को अपनी जरूरत से मिलाना चाहिए।",sections:[
{title:"1. Compatibility",text:"सबसे पहले देखें कि watch आपके smartphone के साथ compatible है या नहीं।"},
{title:"2. Battery",text:"Battery life आपकी usage और model के features पर निर्भर कर सकती है।"},
{title:"3. Features",text:"केवल वही features चुनें जो आपकी वास्तविक जरूरत के लिए उपयोगी हों।"},
{title:"4. Reviews",text:"खरीदने से पहले independent reviews और specifications की तुलना करें।"}]}}
const id=new URLSearchParams(location.search).get("article");
const article=articles[id];
const container=document.getElementById("articleContent");
if(!article){container.innerHTML=`<div class="no-results" style="display:block"><div>📚</div><h2>Article नहीं मिला</h2><a href="blog.html" class="btn primary">Guides पर जाएं</a></div>`}
else{
document.title=article.title+" | SmartChoice";
document.querySelector('meta[name="description"]').content=article.intro;
container.innerHTML=`<article><span class="section-label">${article.category}</span><div class="article-icon large">${article.icon}</div><h1 class="article-title">${article.title}</h1><p class="article-intro">${article.intro}</p>${article.sections.map(s=>`<section class="article-section"><h2>${s.title}</h2><p>${s.text}</p></section>`).join("")}<div class="article-note"><strong>ध्यान दें:</strong> Product की कीमत, availability और specifications समय के साथ बदल सकती हैं। खरीदारी से पहले current information जांचें।</div></article>`;
}
