const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('short'));
app.use(express.json());

// root GET
app.get('/', (req, res) => {
	res.send({ message: 'Hello World!' });
});

// search endpoint
const searchRouter = require('./controllers/search');
app.use('/search', searchRouter);

module.exports = app;
