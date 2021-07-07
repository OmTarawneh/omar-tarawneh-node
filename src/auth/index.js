const express = require('express');
const { signup } = require('./controller/user.controller');

const router = express.Router();
router.post('/user', signup);

module.exports = router;
