const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.Blog, {
        foreignKey: {
          allowNull: false,
        },
      });
      this.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
