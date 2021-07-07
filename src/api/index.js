const express = require('express');
const {
  createBlog,
  getBlogs,
  getBlogByTag,
  getBlogById,
  getUserBlogs,
  updateBlog,
  deleteBlog,
} = require('./controllers/blog.controller');
const {
  createComment,
  updateComment,
  deleteComment,
} = require('./controllers/comment.controller');

const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog', getBlogs);
router.get('/blog/user/:userId', getUserBlogs);
router.get('/blog/id/:id', getBlogById);
router.put('/blog/id/:id', updateBlog);
router.delete('/blog/id/:id', deleteBlog);
router.get('/blog/:tag/tag', getBlogByTag);
router.post('/comment', createComment);
router.put('/comment/id/:id', updateComment);
router.delete('/comment/id/:id', deleteComment);

module.exports = router;
