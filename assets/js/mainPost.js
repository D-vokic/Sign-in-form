/**
 * Import createElement and appendChildren functions from utils.js module.
 * @module utils
 * @see module:utils.createElement
 * @see module:utils.appendChildren
 */
import { createElement, appendChildren } from "./utils.js";

/**
 * Import createPost function from post.js module.
 * @module post
 * @see module:post.createPost
 */
import { createPost } from "./post.js";

/**
 * Generate a number of posts and append them to the post container.
 * @param {HTMLElement} postContainer - The container to append the posts to.
 * @param {number} postCount - The number of posts to generate.
 */
const generatePosts = (postContainer, postCount) => {
  Array.from({ length: postCount }, (_, i) => i + 1)
    .map((i) => {
      const post = {
        title: `Post Title ${i}`,
        content: `Post Content ${i}`,
        author: `Post Author ${i}`,
        publicationDate: `Publication Date ${i}`,
      };
      return createPost(post);
    })
    .forEach((postElement) => postContainer.appendChild(postElement));
};

/**
 * Add a click event listener to the go back button that redirects to a specified URL.
 * @param {HTMLElement} goBackButton - The button that will trigger the redirect.
 * @param {string} redirectUrl - The URL to redirect to when the button is clicked.
 */
const handleGoBackButton = (goBackButton, redirectUrl) => {
  goBackButton.addEventListener("click", () => {
    window.location.href = redirectUrl;
  });
};

/**
 * Set up the page when the window loads.
 * This includes creating the post container and go back button, appending them to the body,
 * generating the posts, and setting up the go back button.
 */
window.onload = () => {
  const postContainer = createElement("div", "postContainer", "");
  const goBackButton = createElement("button", "goBackBtn", "Go back");

  appendChildren(document.body, [postContainer, goBackButton]);

  generatePosts(postContainer, 10);
  handleGoBackButton(goBackButton, "login.html");
};
