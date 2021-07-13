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
 * @function
 * @async
 *
 */
const createBlog = async (req, res) => {
  try {
    const { body } = req;
    const blog = await addBlog(body);
    // res.json({ code: 201, message: 'Ok', data: blog });
    res.json(response(blog, 201, 'Ok'));
  } catch (err) {
    res.json({ code: 400, message: 'Bad', error: err.message });
  }
};

/**
 * Function to return all Blogs in the database or all user Blogs.
 *
 * @function
 * @async
 */
const getBlogs = async (req, res) => {
  try {
    const { limit, offset } = req.query;
    const { itemsCount, blogs } = await getAllBlogs(limit, offset);
    res.json(response(blogs, 200, 'ok', itemsCount));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * Controller to return all user Blogs from the database or all user Blogs.
 *
 * @function
 * @async
 *
 */
const getUserBlogs = async (req, res) => {
  try {
    const { userId, limit, offset } = req.params;
    const blogs = await userBlogs(userId, limit, offset);
    res.json(response(blogs, 200, 'ok'));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * Controller to return all Blogs filtered according to tag from the database.
 * @function
 * @async
 */
const getBlogByTag = async (req, res) => {
  try {
    const { limit, offset, tag } = req.params;
    const { itemsCount, blogs } = await tagBlogs(tag, limit, offset);
    res.json(response(blogs, 200, 'ok', itemsCount));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};

/**
 *
 * @function
 * @async
 */
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogById(id);
    res.json(response(blog, 200, 'ok'));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * Controller to update an Blog in the database and return it.
 *
 * @function
 * @async
 */
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogUpdate(id, req.body);
    res.json(response(blog, 200, 'ok'));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * Controller to delete an Blog in the database and return it.
 *
 * @function
 * @async
 *
 */
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogDelete(id);
    res.json(response(blog, 200, 'ok'));
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
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
