function createUrlQuery() {
  const query = window.location.href.split("???")[1];
  const url = `http://localhost:5000/search?search=${query}`;
  return url;
}

async function fetchData() {
  const url = createUrlQuery();
  const fetchResults = await fetch(url)
    .then((res) => res.json())
    .catch(console.error);
  console.log(fetchResults);
  return fetchResults;
}

function createResult({ link, snippet, title }) {
  const div = document.createElement("div");
  const linkA = document.createElement("a");
  linkA.href = link;
  linkA.textContent = link;
  const titleA = document.createElement("a");
  titleA.href = link;
  titleA.textContent = title;
  const snippetP = document.createElement("p");
  snippetP.textContent = snippet;

  div.appendChild(linkA);
  div.appendChild(titleA);
  div.appendChild(snippetP);
  return div;
}

async function appendResultsToMain() {
  const main = document.querySelector("main");
  const searchResults = await fetchData();
  searchResults.results.forEach((result) => {
    const divToAppend = createResult(result);
    main.appendChild(divToAppend);
  });
}

appendResultsToMain();

let form = document.querySelector("form");

form.addEventListener("submit", redirectToResults);

function redirectToResults(e) {
  e.preventDefault(e);
  const query = e.target[0].value;
  const newUrl = `http://localhost:3000/resultPage.html???${query}`;
  window.location.href = newUrl;
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
