const { Sequelize, DataTypes } = require('sequelize');

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
});

/**
 * Function to connect to the Database
 * @function
 * @async
 *
 * @returns {Promise<void>}
 */
const connect = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('Connection has been made successfully.');
  } catch (error) {
    throw new Error('Error while connecting to Database.');
  }
};

const User = require('./models/user.model')(sequelize, DataTypes);
const Blog = require('./models/blog.model')(sequelize, DataTypes);
const Comment = require('./models/comment.model')(sequelize, DataTypes);
const Tag = require('./models/tag.model')(sequelize, DataTypes);

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

const db = { connect, sequelize, User, Blog, Comment, Tag };

module.exports = db;
