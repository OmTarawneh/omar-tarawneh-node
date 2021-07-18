/**
 * Standard response object.
 *
 * @param {Array<Object>|Object} data
 * @param {Number} code
 * @param {Number} itemsCount
 * @param {string} message
 * @return {Object}   Response Object.
 */
const response = (data, err = null, code = 200, message = 'Ok') => {
  if (err) {
    return { code: err.statusCode, message: 'Bad', error: err.errorDes };
  }
  return { code, message, data };
};

module.exports = { response };
