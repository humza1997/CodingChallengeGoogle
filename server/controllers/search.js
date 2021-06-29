const express = require('express');
const searchRouter = express.Router();

searchRouter.get('/', (res, req) => {
	res.send({ message: '/search endpoint' });
});

module.exports = searchRouter;
