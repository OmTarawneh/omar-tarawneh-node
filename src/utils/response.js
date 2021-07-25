/**
 * Standard response object.
 *
 * @param  {Array<Object>|Object} data
 * @param  {Number}               code
 * @param  {Number}               itemsCount
 * @param  {string}               message
 * @return {Object}
 */
const response = (data, err = null, code = 200, message = 'Ok') => {
  if (err) {
    return { code, message, error: err.message };
  }
  return { code, message, data };
};

module.exports = { response };
