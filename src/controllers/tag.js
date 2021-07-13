// eslint-disable-next-line no-unused-vars
const express = require('express');
const { Tag } = require('../models');
/**
 * @name getTags
 * Function to return all unique Tags in the database.
 * @function
 * @async
 *
 * @param {express.Request}                       req Request object containing the userId.
 * @param {express.Response}                      res Response object.
 *
 * @returns {Promise<void>}
 */
const getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json({
      code: 200,
      message: 'Ok',
      data: tags,
    });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};

module.exports = {
  getTags,
};
