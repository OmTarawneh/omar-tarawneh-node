const { addUser } = require('../services/user');
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

module.exports = { signup };
