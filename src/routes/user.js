const router = require('express-promise-router')();
const { signup } = require('../controllers/user');

/**
 * Register a user.
 */
router.post('/user', signup);

module.exports = router;
