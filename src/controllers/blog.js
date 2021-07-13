// eslint-disable-next-line no-unused-vars
const express = require('express');
const { User, Blog, Tag, Comment, BlogTag } = require('../models');
/**
 * @name createBlog
 * Add new blog attached to user in Data Base.
 * @function
 * @async
 *
 * @param {express.Request<{}, {}, requestBody} req Request object contain Blog data.
 * @param {express.Response}                    res Response object.
 *
 */
const createBlog = async (req, res) => {
  try {
    const { body } = req;
    const tags = body.tags.map(async (tag) => {
      const [newTag, created] = await Tag.findOrCreate({
        where: { name: tag },
        defaults: { name: tag },
      });
      return newTag;
    });
    const storedTags = await Promise.all(tags);
    const blog = await Blog.create(body);
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
    res.json({ code: 201, message: 'Ok', data: assBlog });
  } catch (err) {
    res.json({ code: 400, message: 'Bad', error: err.message });
  }
};

/**
 * @name getBlogs
 * Function to return all Blogs in the database or all user Blogs.
 * @function
 * @async
 * @typedef {object} queryParams
 * @property {number} offset   The number of items to skip.
 * @property {number} limit    The number of items to return per request.
 *
 * @param {express.Request<{},{},queryParams}     req Request object containing the userId.
 * @param {express.Response}                      res Response object.
 *
 * @returns {Promise<void>}
 */
const getBlogs = async (req, res) => {
  try {
    const itemsCount = await Blog.count();
    const blogs = await Blog.findAll({
      include: [User, 'Tag'],
      limit: req.query.limit,
      offset: req.query.offset,
    });
    res.json({
      code: 200,
      message: 'Ok',
      data: blogs,
      itemsCount,
    });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * @name getUserBlogs
 * Function to return all user Blogs from the database or all user Blogs.
 * @function
 * @async
 * @typedef {object} requestparams
 * @property {number} userId                      The id of the user wants to get his/her Blogs.
 *
 * @param {express.Request<requestparams, {}, {}} req Request object containing the userId.
 * @param {express.Response}                      res Response object.
 *
 * @returns {Promise<void>}
 */
const getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        { model: User, where: { id: req.params.userId } },
        { model: Tag },
      ],
      limit: req.query.limit,
      offset: req.query.offset,
    });
    res.json({ code: 200, message: 'Ok', data: blogs });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * @name getBlogsByTag
 * Function to return all Blogs filtered according to tag from the database.
 * @function
 * @async
 * @typedef {object} params
 * @property {string}                             tag The tag to filter the Blogs on.
 *
 * @param {express.Request<params, {}, {}}        req Request object containing the tag.
 * @param {express.Response}                      res Response object.
 *
 * @returns {Promise<void>}
 */
const getBlogByTag = async (req, res) => {
  try {
    const itemsCount = await Blog.count({
      include: [{ model: Tag, where: { name: req.params.tag } }],
    });
    const blogs = await Blog.findAll({
      include: [{ model: Tag, where: { name: req.params.tag } }, User],
      limit: req.query.limit,
      offset: req.query.offset,
    });
    res.json({
      code: 200,
      message: 'Ok',
      data: blogs,
      itemsCount,
    });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};

/**
 * @name getBlogById
 * Function to return all Blogs in the database or all user Blogs.
 * @function
 * @async
 * @typedef {object} param
 * @property {string}                             id The id of some Blog.
 *
 * @param {express.Request<param, {}, {}}         req Request object containing the id of Blog.
 * @param {express.Response}                      res Response object.
 *
 * @returns {Promise<void>}
 */
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      where: { id: req.params.id },
      include: [Tag, User, Comment],
    });
    res.json({ code: 200, message: 'Ok', data: blog });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * @name  updateBlog
 * Function to update an Blog in the database and return it.
 * @function
 * @async
 * @typedef {object} body
 * @property {string}         title             The title of the Blog.
 * @property {string}         content           The content of the Blog.
 * @property {string}         describtion       The describtion of the Blog.
 * @typedef {object} params
 * @property {number}         id                The Blog id.
 *
 * @param {express.Request<params, {}, body}          req Request object containing the id of Blog.
 * @param {express.Response}                          res Response object.
 *
 * @returns {Promise<void>}
 */
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.update(req.body, {
      where: { id: req.params.id },
      include: [Tag, User],
    });
    res.json({ code: 200, message: 'Ok', data: blog });
  } catch (error) {
    res.json({ code: 400, message: 'Bad', error: error.message });
  }
};
/**
 * @name  deleteBlog
 * Function to delete an Blog in the database and return it.
 * @function
 * @async
 *
 * @typedef {object} params
 * @property {number} id  Blog id.
 *
 * @param {express.Request<params, {}, body}          req Request object containing the id of Blog.
 * @param {express.Response}                          res Response object.
 *
 * @returns {Promise<void>}
 */
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.destroy({
      where: { id: req.params.id },
    });
    res.json({ code: 200, message: 'Ok', data: blog });
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
