let t=document.getElementById("search-form"),e=document.querySelector(".gallery"),a=document.querySelector(".load"),s=1,i="";async function c(){try{let t=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${i}&page=${s}&per_page=12&key=54040917-f9e6420d7887ca7f24aa85fec`,e=await fetch(t);return(await e.json()).hits}catch(t){return console.log("Сталася помилка("),[]}}async function l(t){let a=t.map(({webformatURL:t,largeImageURL:e,likes:a,views:s,comments:i,downloads:c,tags:l})=>`<li>
        <div class="photo-card">
  <img 
    class="image" 
    src="${t}" 
    data-large="${e}"
    alt="${l}" 
  />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${a}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${s}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${i}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${c}
    </p>
  </div>
</div>
</li>`).join("");e.insertAdjacentHTML("beforeend",a)}async function n(t){t&&(s=1,e.innerHTML="");let i=await c();await l(i),12===i.length?(a.style.display="block",s+=1):a.style.display="none"}t.addEventListener("submit",async t=>{t.preventDefault(),i=t.currentTarget.elements.query.value,await n(!0)}),a.addEventListener("click",async()=>{await n(!1)}),e.addEventListener("click",t=>{var e,a;let s;t.target.classList.contains("image")&&(e=t.target.dataset.large,a=t.target.alt,(s=basicLightbox.create(`
    <div class="custom-lightbox">
      <button class="custom-close">&times;</button>
      <img src="${e}" alt="${a}" class="custom-image">
    </div>
  `)).show(),document.querySelector(".custom-close").addEventListener("click",()=>s.close()),window.addEventListener("keydown",t=>{"Escape"===t.code&&s.close()}))});
//# sourceMappingURL=mini-project-async.7cbd1ded.js.map
