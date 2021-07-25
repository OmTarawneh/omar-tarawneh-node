const router = require('express-promise-router')();
const { signup } = require('../controllers/user');

/**
 * Register a user.
 */
router.post('/signup', signup);

module.exports = router;
