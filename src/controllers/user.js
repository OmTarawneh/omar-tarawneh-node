// eslint-disable-next-line no-unused-vars
const express = require('express');
const { User } = require('../models');

/**
 * Signup controller to add new user to Data base.
 *
 * @function
 * @async
 */
const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ code: 201, message: 'Ok', data: user });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};

module.exports = { signup };
