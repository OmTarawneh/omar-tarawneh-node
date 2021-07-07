// eslint-disable-next-line no-unused-vars
const { Sequelize, DataTypes } = require('sequelize');

/**
 * Function that return Tag models.
 * @param {Sequelize}           sequelize Sequelize instance.
 * @param {DataTypes}           dataTypes Sequlize Datatypes.
 * @returns {Sequelize.model}
 */
module.exports = (sequelize, dataTypes) => {
  const Tag = sequelize.define('tag', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  });
  return Tag;
};
