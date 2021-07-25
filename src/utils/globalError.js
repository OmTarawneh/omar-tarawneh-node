class ValidationError extends Error {
  /**
   * Take error message and the status.
   *
   * @param {String|Array<String>} message
   * @param {Number}               status
   */
  constructor(message, status) {
    super();
    this.name = 'Validation Error';
    this.message = message;
    this.statusCode = status;
  }
}

class AuthError extends Error {
  /**
   * Take error message and the status.
   *
   * @param {String|Array<String>} message
   * @param {Number}               status
   */
  constructor(message, status) {
    super();
    this.name = 'Authentication Error';
    this.message = message;
    this.statusCode = status;
  }
}

module.exports = { ValidationError, AuthError };
