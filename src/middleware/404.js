/**
 * Global not found Error 404.
 *
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 */
module.exports = (req, res) => {
  res.status(404).json({
    code: 404,
    route: req.path,
    message: 'NOT found',
  });
};
