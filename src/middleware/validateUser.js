const { validationResult } = require('express-validator');
const { ValidationError } = require('../utils/globalError');
/**
 * catch validation errors.
 *
 * @param {import('express').Request}             req
 * @param {import('express').Response}            res
 * @param {import('express').NextFunction}        next
 */
module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) next();
  else {
    const extractedErrors = errors
      .array()
      .map((err) => ({ [err.param]: err.msg }));

    throw new ValidationError(extractedErrors, 400);
  }
};
