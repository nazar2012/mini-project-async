document.getElementById("search-form");let a=document.querySelector(".gallery");async function t(t){let e=t.map(({webformatURL:a,largeImageURL:t,likes:e,views:s,comments:i,downloads:c,tags:o})=>`<li>
        <div class="photo-card">
  <img class="image" src="${a}" alt="${o}" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${e}
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
</li>`).join("");a.insertAdjacentHTML("beforeend",e)}document.querySelector(".load"),(async function(){try{let a=await fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=54040917-f9e6420d7887ca7f24aa85fec");return(await a.json()).hits}catch(a){return console.log("Сталася помилка("),[]}})().then(a=>t(a));
//# sourceMappingURL=mini-project-async.b98ef03a.js.map
