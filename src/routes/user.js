const router = require('express-promise-router')();
const validate = require('../middleware/validateUser');
const {
  userValidationRules,
  authValidationRules,
} = require('../utils/validators');
const { signup, login } = require('../controllers/user');

/**
 * Register a user.
 */
router.post('/signup', userValidationRules(), validate, signup);

/**
 * Authenticate the user.
 */
router.post('/login', authValidationRules(), validate, login);

module.exports = router;
