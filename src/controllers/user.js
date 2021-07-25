// eslint-disable-next-line no-unused-vars
const express = require('express');
const { User } = require('../models');

/**
 * Signup controller to add new user to Data base.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.json({ code: 201, message: 'Ok', data: user });
};

module.exports = { signup };
