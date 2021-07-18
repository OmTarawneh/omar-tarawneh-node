const { allTags } = require('../services/tag');
const { response } = require('../utils/response');

/**
 * Get all unique Tags in the database.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const getTags = async (req, res) => {
  const tags = await allTags();

  res.json(response(tags, 200, 'OK'));
};

module.exports = {
  getTags,
};
