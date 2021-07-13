const { response } = require('../utils/response');

module.exports = (err, req, res, next) => {
  res.json(response(err.message, 500, 'BAD'));
};
