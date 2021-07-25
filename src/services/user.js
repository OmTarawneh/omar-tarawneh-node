const { User } = require('../models');
const { hashPassword } = require('../utils/authHelper');

/**
 * Register user in the DB if the email exist throw an Error.
 *
 * @param {Object}          body  Contain user info username, password, email.
 *
 * @return {Promise<Object>}
 */
const addUser = async (body) => {
  let { password } = body;

  password = await hashPassword(body.password);
  const user = await User.create({ ...body, password });

  return user;
};

module.exports = {
  addUser,
};
