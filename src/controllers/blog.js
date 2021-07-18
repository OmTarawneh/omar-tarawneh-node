const { response } = require('../utils/response');
const {
  addBlog,
  getAllBlogs,
  userBlogs,
  tagBlogs,
  blogById,
  blogUpdate,
  blogDelete,
} = require('../services/blog');

/**
 * Controller Add new blog attached to user in Data Base.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const createBlog = async (req, res) => {
  const { body } = req;
  const blog = await addBlog(body);

  res.json(response(blog, 201));
};

/**
 * Get all Blogs in the database or all user Blogs.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const getBlogs = async (req, res) => {
  const { limit, offset } = req.query;
  const { itemsCount, blogs } = await getAllBlogs(limit, offset);

  res.json(response(blogs, 200, 'ok', itemsCount));
};

/**
 * Controller to return all user Blogs from the database or all user Blogs.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 *
 */
const getUserBlogs = async (req, res) => {
  const { userId, limit, offset } = req.params;
  const blogs = await userBlogs(userId, limit, offset);

  res.json(response(blogs, 200, 'ok'));
};

/**
 * Controller to return all Blogs filtered according to tag from the database.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const getBlogByTag = async (req, res) => {
  const { limit, offset, tag } = req.params;
  const { itemsCount, blogs } = await tagBlogs(tag, limit, offset);

  res.json(response(blogs, 200, 'ok', itemsCount));
};

/**
 * Controller to get blog by id.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const getBlogById = async (req, res) => {
  const { id } = req.params;
  const blog = await blogById(id);

  res.json(response(blog, 200, 'ok'));
};
/**
 * Controller to update an Blog in the database and return it.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await blogUpdate(id, req.body);

  res.json(response(blog, 200, 'ok'));
};

/**
 * Controller to delete an Blog in the database and return it.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 *
 */
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await blogDelete(id);

  res.json(response(blog, 200, 'ok'));
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogByTag,
  getBlogById,
  getUserBlogs,
  updateBlog,
  deleteBlog,
};
