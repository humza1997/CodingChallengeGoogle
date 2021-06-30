const url = "http://localhost:5000/search?search=pie";

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
