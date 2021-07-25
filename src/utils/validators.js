const { body } = require('express-validator');

/**
 * Fields to validate in registration process.
 *
 * @return {Array<Object>}
 */
const userValidationRules = () => [
  body('username').exists().isString().withMessage('username can not be null'),
  body('email').exists().isEmail().withMessage('email must be a valid email'),
  body('password')
    .exists()
    .isLength({ min: 5 })
    .withMessage('password should be at least 5 character long'),
];

/**
 * Fields to validate in Authentication process.
 *
 * @return {Array<Object>}
 */
const authValidationRules = () => [
  body('email').exists().isEmail().withMessage('email must be a valid email'),
  body('password').exists().withMessage('password can not be null'),
];

module.exports = {
  userValidationRules,
  authValidationRules,
};
