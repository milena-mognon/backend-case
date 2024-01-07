const express = require('express');
require('express-async-errors');
const routes = require('./routes/index.routes');
const errorHandler = require('./middleware/ErrorHandler');
require('dotenv').config();
require('../data/mongoose');
require('../provider');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
