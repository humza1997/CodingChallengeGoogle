const url = 'http://localhost:5000/search?search=pie';

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

form.addEventListener('submit', fetchData);

// grab main to append to
// store fetched data somehow
// data has link, snippet, title

// iterate over data:

// create a div with 3 p's in
// map link snippet, title to one p each
// append to main
