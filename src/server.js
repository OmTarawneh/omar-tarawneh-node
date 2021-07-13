const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('express-promise-router');

const app = express();
const { PORT } = process.env;

const blogRouter = require('./routes/blog');
const authRouter = require('./routes/user');
const error = require('./middleware/error');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', blogRouter);
app.use('/api/v1', authRouter);
app.use(error);

app.listen(PORT, () => {
  console.log('The Server is connected on port', PORT);
});
