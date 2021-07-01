const express = require('express');
const searchRouter = express.Router();
const search = require('../models/search');

searchRouter.get('/', async (req, res) => {
	const searchQuery = req.query.search;
	const results = await search(searchQuery);
	res.send({ results });
});

module.exports = searchRouter;
