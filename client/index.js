function createUrlQuery(query) {
	const url = `http://localhost:5000/search?search=${query}`;
	return url;
}

function fetchData(e) {
	e.preventDefault();
	const query = e.target[0].value;
	const url = createUrlQuery(query);
	fetch(url)
		.then((res) => res.json())
		.then(console.log)
		.catch(console.error);
}

let form = document.querySelector('form');

form.addEventListener('submit', redirectToResults);

function redirectToResults(e) {
	e.preventDefault(e);
	const query = e.target[0].value;
	const currentUrl = window.location.href;
	const newUrl = `${currentUrl}resultPage.html???${query}`;
	window.location.href = newUrl;
}
