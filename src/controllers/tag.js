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
  try {
    const tags = await allTags();
    res.json(response(tags, 200, 'OK'));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};

module.exports = {
  getTags,
};
