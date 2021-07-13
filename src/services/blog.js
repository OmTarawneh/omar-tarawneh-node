const { User, Blog, Tag, BlogTag } = require('../models');

/**
 * Function to add blog with tags to the database and return it.
 *
 * @param {object} blogObject Contain UserId title content description and array of tags.
 */
const addBlog = async (blogObject) => {
  const tags = blogObject.tags.map(async (tag) => {
    const [newTag, created] = await Tag.findOrCreate({
      where: { name: tag },
      defaults: { name: tag },
    });
    return newTag;
  });
  const storedTags = await Promise.all(tags);
  const blog = await Blog.create(blogObject);
  storedTags.map(async (tag) => {
    await BlogTag.create({ tag_id: tag.id, blog_id: blog.id });
  });
  await BlogTag.create({
    tag_id: storedTags[0].id,
    blog_id: blog.id,
  });
  const assBlog = await Blog.findOne({
    where: { id: blog.id },
    include: ['User', 'Tag'],
  });
  return assBlog;
};
/**
 * Function to get all blogs and their counts.
 *
 * @param {number} limit
 * @param {number} offset
 * @returns {object}
 */
const getAllBlogs = async (limit, offset) => {
  const { count, rows } = await Blog.findAndCountAll({
    include: [User, 'Tag'],
    limit,
    offset,
  });
  return { itemsCount: count, blogs: rows };
};
/**
 * Function to get all user blogs by user id.
 *
 * @param {number} userId
 * @param {number} limit
 * @param {number} offset
 */
const userBlogs = async (userId, limit = 5, offset = 0) => {
  const blogs = await Blog.findAll({
    include: ['Tag', { model: User, where: { id: userId } }],
    limit,
    offset,
  });
  return blogs;
};

/**
 * Function to get all  blogs by tag name.
 *
 * @param {string} tagName
 * @param {number} limit
 * @param {number} offset
 */
const tagBlogs = async (tagName, limit = 5, offset = 0) => {
  const { count, rows } = await Blog.findAndCountAll({
    include: [
      { model: User },
      { model: Tag, as: 'Tag', where: { name: tagName } },
    ],
    limit,
    offset,
  });
  return { itemsCount: count, blogs: rows };
};

/**
 * Function to get a blogs by id.
 *
 * @param {number} blogId
 */
const blogById = async (blogId) => {
  const blog = await Blog.findOne({
    where: { id: blogId },
    include: ['Tag', User],
  });
  return blog;
};
/**
 * Function to update blog post by id.
 *
 * @param {number} blogId Id of the blog.
 * @param {object} fields Object containing the fields to update.
 * @returns
 */
const blogUpdate = async (blogId, fields) => {
  const blog = await Blog.update(fields, {
    where: { id: blogId },
    include: ['Tag', User],
  });
  return blog;
};
/**
 * Function to delete a blog post from DB by id.
 *
 * @param {number} blogId id of the blog.
 * @returns
 */
const blogDelete = async (blogId) => {
  const blog = await Blog.destroy({
    where: { id: blogId },
  });
  return blog;
};

module.exports = {
  addBlog,
  getAllBlogs,
  userBlogs,
  tagBlogs,
  blogById,
  blogUpdate,
  blogDelete,
};
