require('dotenv').config();
const { connect } = require('./src/db');
const app = require('./src/server');

const { PORT } = process.env;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log('The Server is connected on port', PORT);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
