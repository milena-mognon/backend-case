const express = require('express');
const routes = require('./routes/index.routes');
require('dotenv').config();
require('../data/mongoose');

const app = express();

app.use(express.json());

app.use('/api', routes);

module.exports = app;
