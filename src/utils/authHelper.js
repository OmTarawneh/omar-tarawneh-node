const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Hash the password using bcrypt.
 *
 * @param {String} password
 *
 * @return {Promise<String>}
 */
const hashPassword = (password) => bcrypt.hash(password, 10);

/**
 * Generate user token using JWT.
 *
 * @param {Object} payload
 *
 * @return {String}
 */
const generateToken = (payload) => jwt.sign(payload, 'supersecret');

module.exports = {
  hashPassword,
  generateToken,
};
