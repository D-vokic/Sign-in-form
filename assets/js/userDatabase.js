/**
 * Import User class from user.js module.
 * @module user
 * @see module:user.User
 */
import { User } from "./user.js";

/**
 * UserDatabase class for handling user database related operations.
 * @class
 */
export class UserDatabase {
  /**
   * Create a new user database.
   */
  constructor() {
    this.users = new Map();
  }

  /**
   * Add a new user to the database.
   * @param {User} user - The user to be added.
   */
  addUser(user) {
    this.users.set(user.username, user);
  }

  /**
   * Validate a user in the database.
   * @param {string} username - The username of the user.
   * @param {string} password - The password of the user.
   * @returns {boolean} True if the user is valid, false otherwise.
   */
  validateUser(username, password) {
    const user = this.users.get(username);
    return user && user.validatePassword(password);
  }
}
