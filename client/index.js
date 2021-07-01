let form = document.querySelector("form");

form.addEventListener("submit", redirectToResults);

function redirectToResults(e) {
  e.preventDefault(e);
  const query = e.target[0].value;
  const currentUrl = window.location.href;
  const newUrl = `${currentUrl}resultPage.html???${query}`;
  window.location.href = newUrl;
}

let googleSearch = document.getElementById("googleSearch");

googleSearch.addEventListener("click", handleGoogleSearchButtonClick);

function handleGoogleSearchButtonClick() {
  let input = document.querySelector("input");
  let query = input.value;
  const currentUrl = window.location.href;
  const newUrl = `${currentUrl}resultPage.html???${query}`;
  window.location.href = newUrl;
}

let imFeelingLuckyButton = document.getElementById("imFeelingLuckyButton");

imFeelingLuckyButton.addEventListener("click", imFeelingLucky);

async function imFeelingLucky() {
  let input = document.querySelector("input");
  let query = input.value;
  let fetchedData = await fetchData(query);
  let link = fetchedData.results[0].link;
  window.location.href = link;
}

function createUrlQuery(query) {
  const url = `http://localhost:5000/search?search=${query}`;
  return url;
}

async function fetchData(query) {
  const url = createUrlQuery(query);
  const fetchResults = await fetch(url)
    .then((res) => res.json())
    .catch(console.error);
  return fetchResults;
}

let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", handleGoogleSearchButtonClick);
function handleGoogleSearchButtonClick() {
  let input = document.querySelector("input");
  let query = input.value;
  const currentUrl = window.location.href;
  const newUrl = `http://localhost:3000/resultPage.html???${query}`;
  window.location.href = newUrl;
}
