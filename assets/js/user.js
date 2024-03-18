/**
 * User class for handling user related operations.
 * @class
 */
export class User {
  /**
   * Create a new user.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   */
  constructor(username, password) {
    this.username = username;
    this.password = this._hashPassword(password);
  }

  /**
   * Hash the password.
   * @private
   * @param {string} password - The password to be hashed.
   * @returns {string} The hashed password.
   */
  _hashPassword(password) {
    // This is just a placeholder. In a real application, use a secure hash function.
    return password.split("").reverse().join("");
  }

  /**
   * Validate the password.
   * @param {string} password - The password to be validated.
   * @returns {boolean} True if the password is valid, false otherwise.
   */
  validatePassword(password) {
    return this.password === this._hashPassword(password);
  }
}
