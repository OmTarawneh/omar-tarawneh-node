const { Tag } = require('../models');

const allTags = async () => {
  const tags = await Tag.findAll();
  return tags;
};

module.exports = { allTags };
