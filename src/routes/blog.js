const router = require('express-promise-router')();
const {
  createBlog,
  getBlogs,
  getBlogByTag,
  getBlogById,
  getUserBlogs,
  updateBlog,
  deleteBlog,
} = require('../controllers/blog');
const { getTags } = require('../controllers/tag');

/**
 * Create Blog and add it to Database.
 */
router.post('/blog', createBlog);

/**
 * Get all Blogs from Database.
 */
router.get('/blog', getBlogs);

/**
 * Get all user Blogs from Database.
 */
router.get('/blog/user/:userId', getUserBlogs);

/**
 * Get a Blog by id.
 */
router.get('/blog/id/:id', getBlogById);

/**
 * Filter the Blogs by tags.
 */
router.get('/blog/:tag/tag', getBlogByTag);

/**
 * Update a Blog by id.
 */
router.put('/blog/id/:id', updateBlog);

/**
 * Delete a blog by id.
 */
router.delete('/blog/id/:id', deleteBlog);

/**
 * Get all tags.
 */
router.get('/tag', getTags);

module.exports = router;
