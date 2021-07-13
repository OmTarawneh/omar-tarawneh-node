const { Tag } = require('../models');

/**
 * Function to return all unique Tags in the database.
 *
 * @function
 * @async
 *
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
