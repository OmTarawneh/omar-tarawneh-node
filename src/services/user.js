const bcrypt = require('bcrypt');
const { User } = require('../models');
const { hashPassword } = require('../utils/authHelper');
const { AuthError } = require('../utils/globalError');

/**
 * Register user in the DB if the email exist throw an Error.
 *
 * @param {Object} body  Contain user info username, password, email.
 *
 * @return {Promise<Object>}
 */
const addUser = async (body) => {
  let { password } = body;

  password = await hashPassword(body.password);
  const user = await User.create({ ...body, password });

  return user;
};

/**
 * Basic Authentication for user using email and password.
 *
 * @param {String}   email
 * @param {Password} password
 *
 * @return {Promise<Object>}
 */
const authUser = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) throw new AuthError('User does not exists.', 404);

  const valid = await bcrypt.compare(password, user.password);

  if (valid) return user;

  throw new AuthError('Error in Email/Password', 401);
};

module.exports = {
  addUser,
  authUser,
};
