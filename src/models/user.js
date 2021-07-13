const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Blog, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
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
