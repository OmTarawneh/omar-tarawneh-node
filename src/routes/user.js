const router = require('express-promise-router')();
const { signup } = require('../controllers/user');

router.post('/user', signup);

module.exports = router;
