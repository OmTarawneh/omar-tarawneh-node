const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogTag extends Model {
    static associate(models) {}
  }
  BlogTag.init(
    {
      blog_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BlogTag',
    }
  );
  return BlogTag;
};
