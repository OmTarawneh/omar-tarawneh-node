const { response } = require('../utils/response');
/**
 * Global error handler for server errors.
 *
 * @param {import('express').ErrorRequestHandler} err
 * @param {import('express').Request}             req
 * @param {import('express').Response}            res
 * @param {import('express').NextFunction}        next
 */
module.exports = (err, req, res, next) => {
  res.json(response(null, err, 500, 'BAD'));
};
