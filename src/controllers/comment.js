// eslint-disable-next-line no-unused-vars
const express = require('express');
const { Comment } = require('../models');

/**
 * @name createComment
 * Add comment to a blog attached to user in Data Base.
 * @function
 * @async
 * @typedef {object} requestBody
 * @property {string}         content           The content of the comment.
 * @property {number}         userId            The id of the user that created the Blog.
 * @property {number}         articleId         The id of the user that created the Blog.
 *
 * @param {express.Request<{}, {}, requestBody} req Request object conatain Blog data.
 * @param {express.Response}                    res Response object.
 *
 * @returns {Promise<void>}
 */
const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json({ code: 201, message: 'Ok', data: comment });
  } catch (err) {
    res.json({ code: 400, message: 'Bad', error: err.message });
  }
};
/**
 * @name updateComment
 * update comment to a blog attached to user in Data Base.
 * @function
 * @async
 * @typedef {object} requestBody
 * @property {string}         content           The content of the comment.
 *
 * @typedef {object}  params
 * @property {number}         id                The id of the comment.
 *
 * @param {express.Request<{}, {}, requestBody} req Request object conatain Blog data.
 * @param {express.Response}                    res Response object.
 *
 * @returns {Promise<void>}
 */
const updateComment = async (req, res) => {
  try {
    const comment = await Comment.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ code: 201, message: 'Ok', data: comment });
  } catch (err) {
    res.json({ code: 400, message: 'Bad', error: err.message });
  }
};
/**
 * @name deleteComment
 * delete comment of a blog attached to user in Data Base.
 * @function
 * @async
 *
 * @typedef {object}  params
 * @property {number}         id                The id of the comment.
 *
 * @param {express.Request<{}, {}, requestBody} req Request object conatain Blog data.
 * @param {express.Response}                    res Response object.
 *
 * @returns {Promise<void>}
 */
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: { id: req.params.id },
    });
    res.json({ code: 201, message: 'Ok', data: comment });
  } catch (err) {
    res.json({ code: 400, message: 'Bad', error: err.message });
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
