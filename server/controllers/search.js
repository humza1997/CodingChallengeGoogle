const express = require('express');
const searchRouter = express.Router();

searchRouter.get('/', (req, res) => {
	res.send({ message: '/search endpoint' });
});

module.exports = searchRouter;
