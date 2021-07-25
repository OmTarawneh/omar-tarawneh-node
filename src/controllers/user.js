const { addUser, authUser } = require('../services/user');
const { response } = require('../utils/response');

/**
 * Signup controller to add new user to Data base.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const signup = async (req, res) => {
  const user = await addUser(req.body);

  res.json(response(user, null, 201));
};

/**
 * Basic authentication for user using email and password.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const login = async (req, res) => {
  const user = await authUser(req.body);

  res.json(response(user));
};

module.exports = { signup, login };
