/**
 * Import required functions from createHTML.js module.
 * @module createHTML
 * @see module:createHTML.createLabelHTML
 * @see module:createHTML.createInputHTML
 * @see module:createHTML.createSinglePost
 * @see module:createHTML.createHTMLButton
 */
import {
  createLabelHTML,
  createInputHTML,
  createSinglePost,
  createHTMLButton,
} from "./createHTML.js";

/** @type {Array} posts - Array to store posts */
let posts = [];

/**
 * Initialize posts with dummy data.
 */
export const initPosts = () => {
  for (let i = 0; i < 10; i++) {
    posts.push({
      id: i,
      title: "Additional post number " + i,
      content: "This is additional content of post number " + i + ".",
      author: "Author " + i,
      publicationDate: new Date().toString(),
    });
  }
};

/**
 * Display all posts in the posts container.
 */
export const displayPosts = () => {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // Clear the current content

  posts.forEach((post) => {
    const postElement = createSinglePost(post);
    postsContainer.appendChild(postElement);
  });

  createHTMLButton("button", "goBackBtn", "Go back", goBack, postsContainer);
};

/**
 * Go back to the form view from the posts view.
 */
export const goBack = () => {
  const formElement = document.getElementById("form");
  const showMoreBtnElement = document.getElementById("showMoreBtn");
  const postsElement = document.getElementById("posts");
  const goBackBtnElement = document.getElementById("goBackBtn");

  if (formElement) {
    formElement.style.display = "block";
  }

  if (showMoreBtnElement) {
    showMoreBtnElement.style.display = "block";
  }

  if (postsElement) {
    postsElement.style.display = "none";
    postsElement.innerHTML = ""; // Clear the content of the "posts" container
  }

  if (goBackBtnElement) {
    goBackBtnElement.style.display = "none";
  }
};

/**
 * Reset the form fields to their initial state.
 * @param {Array} fields - The fields to reset.
 */
export function resetForm(fields) {
  if (fields && Array.isArray(fields)) {
    fields.forEach((field) => {
      document.getElementById(field.id).value = "";
    });
  } else {
    console.error("Attempted to reset form, but no array was provided");
  }
}

/**
 * Handle the form submission event.
 * @param {Event} event - The form submission event.
 * @param {Array} fields - The fields of the form.
 */
export const handleFormSubmit = (event, fields) => {
  event.preventDefault();

  const titleElement = document.getElementById("title");
  const contentElement = document.getElementById("content");
  const authorElement = document.getElementById("author");

  const title = titleElement.value.trim();
  const content = contentElement.value.trim();
  const author = authorElement.value.trim();

  if (!title || !content || !author) {
    alert("All fields must be filled out");
    return;
  }

  const publicationDate = new Date();

  const newPost = {
    id: posts.length + 1, // New ID
    title,
    content,
    author,
    publicationDate,
  };

  posts.push(newPost);
  console.log(posts);
  resetForm(fields);
};

/**
 * Show more posts and hide the form and show more button.
 */
export const showMorePosts = () => {
  displayPosts();
  hideElement("form");
  hideElement("showMoreBtn");
  showElement("goBackBtn");
};

/**
 * Hide an element by its ID.
 * @param {string} elementId - The ID of the element to hide.
 */
export const hideElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = "none";
  }
};

/**
 * Show an element by its ID.
 * @param {string} elementId - The ID of the element to show.
 */
export const showElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = "inline";
  }
};
