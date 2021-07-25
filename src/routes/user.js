const router = require('express-promise-router')();
const validate = require('../middleware/validateUser');
const { userValidationRules } = require('../utils/validators');
const { signup } = require('../controllers/user');

/**
 * Register a user.
 */
router.post('/signup', userValidationRules(), validate, signup);

module.exports = router;
