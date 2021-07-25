const { Model } = require('sequelize');
const { generateToken } = require('../utils/authHelper');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Blog, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      token: {
        type: DataTypes.VIRTUAL,
        get() {
          const id = this.getDataValue('id');
          const email = this.getDataValue('email');
          return generateToken({ id, email });
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          'https://static.productionready.io/images/smiley-cyrus.jpg',
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
