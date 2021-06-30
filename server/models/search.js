const googleIt = require('google-it');

function search(query) {
	const options = { noDisplay: true };
	const results = googleIt({ options: options, query: query })
		.then((results) => {
			return results;
		})
		.catch((e) => {
			console.error(e);
		});
	return results;
}

module.exports = search;
