/**
 * Import createElement and appendChildren functions from utils.js module.
 * @module utils
 * @see module:utils.createElement
 * @see module:utils.appendChildren
 */
import { createElement, appendChildren } from "./utils.js";

/**
 * Function to create a single post.
 * @param {Object} post - The post object.
 * @param {string} post.title - The title of the post.
 * @param {string} post.content - The content of the post.
 * @param {string} post.author - The author of the post.
 * @param {string} post.publicationDate - The publication date of the post.
 * @returns {HTMLElement} The post element.
 */
export const createPost = (post) => {
  // Destructuring the post object
  const { title, content, author, publicationDate } = post;

  // Creating the post element
  const postElement = createElement("div", "", "");
  postElement.classList.add("post");

  // Creating the title element
  const titleElement = createElement("h2", "", title);

  // Creating the content element
  const contentElement = createElement("p", "", content);

  // Creating the author and date element
  const authorDateElement = createElement(
    "span",
    "",
    `Author: ${author}, Date of publication: ${publicationDate}`
  );

  // Appending the title, content, and author/date elements to the post element
  appendChildren(postElement, [
    titleElement,
    contentElement,
    authorDateElement,
  ]);

  // Returning the post element
  return postElement;
};
