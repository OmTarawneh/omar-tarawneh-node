const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {
      this.belongsToMany(models.Tag, {
        through: 'BlogTags',
        foreignKey: {
          name: 'blog_id',
          allowNull: false,
        },
        as: 'Tag',
      });
      this.hasMany(models.Comment, {
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
  Blog.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Blog',
    }
  );
  return Blog;
};
