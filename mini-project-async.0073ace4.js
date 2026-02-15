let t=document.getElementById("search-form"),a=document.querySelector(".gallery"),e=document.querySelector(".load"),s=1,i="";async function c(){try{let t=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${i}&page=${s}&per_page=12&key=54040917-f9e6420d7887ca7f24aa85fec`,a=await fetch(t);return(await a.json()).hits}catch(t){return console.log("Сталася помилка("),[]}}async function l(t){let e=t.map(({webformatURL:t,likes:a,views:e,comments:s,downloads:i,tags:c})=>`<li>
        <div class="photo-card">
  <img class="image" src="${t}" alt="${c}" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${a}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${e}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${s}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${i}
    </p>
  </div>
</div>
</li>`).join("");a.insertAdjacentHTML("beforeend",e)}async function n(t){t&&(s=1,a.innerHTML="");let i=await c();await l(i),12===i.length?(e.style.display="block",s+=1):e.style.display="none"}t.addEventListener("submit",async t=>{t.preventDefault(),i=t.currentTarget.elements.query.value,await n(!0)}),e.addEventListener("click",async()=>{await n(!1)});
//# sourceMappingURL=mini-project-async.0073ace4.js.map
