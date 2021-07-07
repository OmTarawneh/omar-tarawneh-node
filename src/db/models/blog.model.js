// eslint-disable-next-line no-unused-vars
const { Sequelize, DataTypes } = require('sequelize');

/**
 * Function that return Blog models.
 * @param {Sequelize}           sequelize Sequelize instance.
 * @param {DataTypes}           dataTypes Sequlize Datatypes.
 * @returns {Sequelize.model}
 */
module.exports = (sequelize, dataTypes) => {
  const Blog = sequelize.define('blog', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    describtion: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: dataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  });
  return Blog;
};
