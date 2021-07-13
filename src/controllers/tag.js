const { allTags } = require('../services/tag');
const { response } = require('../utils/response');

/**
 * Function to return all unique Tags in the database.
 *
 * @function
 * @async
 *
 */
const getTags = async (req, res) => {
  const tags = await allTags();
  res.json(response(tags, 200, 'OK'));
};

module.exports = {
  getTags,
};
