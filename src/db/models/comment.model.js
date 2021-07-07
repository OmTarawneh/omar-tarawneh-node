// eslint-disable-next-line no-unused-vars
const { Sequelize, DataTypes } = require('sequelize');

/**
 * Function that return Comment models.
 * @param {Sequelize}           sequelize Sequelize instance.
 * @param {DataTypes}           dataTypes Sequlize Datatypes.
 * @returns {Sequelize.model}
 */
module.exports = (sequelize, dataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
  });
  return Comment;
};
