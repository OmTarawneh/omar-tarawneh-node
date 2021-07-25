const { Tag } = require('../models');

/**
 * Get All tags from the DB.
 *
 * @return {Promise<Array>}
 */
const allTags = async () => {
  const tags = await Tag.findAll();
  return tags;
};

module.exports = { allTags };
