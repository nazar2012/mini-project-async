const form = document.getElementById("search-form")
const list = document.querySelector(".gallery")
const loadBtn = document.querySelector(".load")

const API_KEY = "54040917-f9e6420d7887ca7f24aa85fec"
const PER_PAGE = 12
let page = 1;
let searchText = ""

async function getImg() {
  try {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;
    const response = await fetch(url)
    const data = await response.json()
    return data.hits
  } catch (error) {
    console.log("Сталася помилка(");
    return []
  }
}
// getImg().then(res => renderImg(res))

async function renderImg(arr) {
  const item = arr.map(({ webformatURL, likes, views, comments, downloads, tags }) => {
    return `<li>
        <div class="photo-card">
  <img class="image" src="${webformatURL}" alt="${tags}" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>
</li>`
  }).join("")
  list.insertAdjacentHTML("beforeend", item)
}

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  const text = event.currentTarget.elements.query.value
  searchText = text
  await downloadImg(true)
})

loadBtn.addEventListener("click", async () => {
  await downloadImg(false)
})

async function downloadImg(isNewSearch) {
  if (isNewSearch) {
    page = 1
    list.innerHTML = ""
  }
  const images = await getImg()
  await renderImg(images)
  if (images.length === PER_PAGE) {
    loadBtn.style.display = "block"
    page += 1
  } else {
    loadBtn.style.display = "none"
  }
}