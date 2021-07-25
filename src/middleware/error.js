const { ValidationError } = require('sequelize');
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
  if (err instanceof ValidationError)
    res.json(response(null, err.errors[0], 409, 'BAD'));
  else res.json(response(null, err, err.statusCode, 'BAD'));
};
