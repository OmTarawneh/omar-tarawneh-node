/**
 * Global Validation Error.
 */
class ValidationError extends Error {
  /**
   * Take error message and the status.
   *
   * @param {String|Array<String>} message
   * @param {Number}               status
   */
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}
