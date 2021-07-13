const express = require('express');
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

const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog', getBlogs);
router.get('/blog/user/:userId', getUserBlogs);
router.get('/blog/id/:id', getBlogById);
router.get('/blog/:tag/tag', getBlogByTag);
router.put('/blog/id/:id', updateBlog);
router.delete('/blog/id/:id', deleteBlog);
router.get('/tag', getTags);

module.exports = router;
