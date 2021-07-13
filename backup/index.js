const { Sequelize, DataTypes } = require('sequelize');

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
});

const User = require('./user')(sequelize, DataTypes);
const Blog = require('./blog')(sequelize, DataTypes);
const Comment = require('./comment')(sequelize, DataTypes);
const Tag = require('./tag')(sequelize, DataTypes);

User.hasMany(Blog, {
  foreignKey: {
    allowNull: false,
  },
});
Blog.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});

Blog.hasMany(Comment, {
  foreignKey: {
    allowNull: false,
  },
});
Comment.belongsTo(Blog, {
  foreignKey: {
    allowNull: false,
  },
});
Comment.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  },
});

Tag.belongsToMany(Blog, {
  through: 'Blog_tag',
  foreignKey: 'tag_id',
  allowNull: false,
});

Blog.belongsToMany(Tag, {
  through: 'Blog_tag',
  foreignKey: 'blog_id',
  allowNull: false,
});

const db = { sequelize, User, Blog, Comment, Tag };

module.exports = db;
