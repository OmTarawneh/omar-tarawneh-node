const { Model } = require('sequelize');

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
