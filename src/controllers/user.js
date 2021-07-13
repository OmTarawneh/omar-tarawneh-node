// eslint-disable-next-line no-unused-vars
const express = require('express');
const { User } = require('../models');

/**
 * @name signupController
 * Signup controller to add new user to Data base.
 * @function
 * @async
 * @typedef {object} requestBody
 * @property {string} firstName         The first name of the user.
 * @property {string} lastName          The last name of the user.
 * @property {string} email             The email of the user.
 * @property {string} password          The password of the user.
 *
 *
 * @param {express.Request<{}, {}, requestBody} req Request object conatain username and passwrod.
 * @param {express.Response}                    res Response object.
 *
 * @returns {express.Response}
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
