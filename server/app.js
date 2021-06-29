const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('short'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send({ message: 'Hello World!' });
});

module.exports = app;
