const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

const blogRouter = require('./routes/blog');
const authRouter = require('./routes/user');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', blogRouter);
app.use('/api/v1', authRouter);

// -[x] config     -> config for sequelize
// -[x] models     -> models of projects
// -[x] migrations -> migration of db
// -[x] seeds      -> seed initial data into database.
// -[x] routes     -> routes of article/tag
// -[x] app        -> point of connection.
// ===========
// -[] global response object
// -[] express promise router
// -[] express validator
// -[] controller  -> controller of the routes
// -[] services    -> function that connect to the model
// -[] middleware  -> middleware error/validation

app.listen(PORT, () => {
  console.log('The Server is connected on port', PORT);
});
