// eslint-disable-next-line no-unused-vars
const { Sequelize, DataTypes } = require('sequelize');

/**
 * Function that return User models.
 * @param {Sequelize}           sequelize Sequelize instance.
 * @param {DataTypes}           dataTypes Sequelize Datatype.
 * @returns {Sequelize.model}
 */
module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      defaultValue: 'https://static.productionready.io/images/smiley-cyrus.jpg',
    },
  });
  return User;
};
