const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.belongsToMany(models.Blog, {
        through: 'BlogTags',
        foreignKey: 'tag_id',
        as: 'Blog',
      });
    }
  }
  Tag.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tag',
    }
  );
  return Tag;
};
