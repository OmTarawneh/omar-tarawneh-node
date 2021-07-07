const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

const blogRouter = require('./api');
const authRouter = require('./auth');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', blogRouter);
app.use('/api/v1', authRouter);

module.exports = app;
