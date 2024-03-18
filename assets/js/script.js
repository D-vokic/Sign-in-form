import {
  createLabelHTML,
  createInputHTML,
  createFormHTML,
  createSinglePost,
  createHTMLButton,
  createHTMLDiv,
} from "./createHTML.js";
import {
  initPosts,
  displayPosts,
  goBack,
  resetForm,
  handleFormSubmit,
  showMorePosts,
  hideElement,
  showElement,
} from "./postHandling.js";

/**
 * Event listener for DOMContentLoaded event.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get the form fields and the submit button
  const postTitle = document.getElementById("postTitle");
  const postContent = document.getElementById("postContent");
  const submitButton = document.getElementById("submitButton");
  const form = document.getElementById("form");

  // Disable the submit button by default
  if (submitButton) {
    submitButton.disabled = true;
  }

  // Add event listeners to the form fields
  if (postTitle) {
    postTitle.addEventListener("input", enableSubmitButton);
    postTitle.addEventListener("change", enableSubmitButton);
  }
  if (postContent) {
    postContent.addEventListener("input", enableSubmitButton);
    postContent.addEventListener("change", enableSubmitButton);
  }

  /**
   * Function to enable the submit button only if both fields are not empty.
   */
  function enableSubmitButton() {
    if (submitButton && postTitle && postContent) {
      submitButton.disabled = !(
        postTitle.value.trim() && postContent.value.trim()
      );
    }
  }

  // Add event listener to the form
  if (form) {
    form.addEventListener("submit", function (event) {
      if (!postTitle.value.trim() || !postContent.value.trim()) {
        event.preventDefault();
        alert("Both the title and content must be filled out");
      }
    });
  }
});

/** @type {Array} fields - Array to store form fields */
let fields = [
  {
    htmlType: "input",
    type: "text",
    id: "title",
    name: "title",
    text: "Title",
  },
  {
    htmlType: "textarea",
    type: null,
    id: "content",
    name: "content",
    text: "Content",
  },
  {
    htmlType: "input",
    type: "text",
    id: "author",
    name: "author",
    text: "Author",
  },
];

/** @type {Array} buttons - Array to store form buttons */
let buttons = [
  {
    type: "submit",
    id: "formSubmit",
    text: "Add post",
    fnc: (event) => {
      handleFormSubmit(event, fields);
      showMorePosts();
      window.location.href = "blogPost.html"; // Redirect to blogPost.html
    },
  },
];

initPosts();
createHTMLDiv("posts", document.body);
createFormHTML("form", fields, buttons, handleFormSubmit);

const showMoreBtnElement = document.getElementById("showMoreBtn");
if (showMoreBtnElement) {
  showMoreBtnElement.parentNode.removeChild(showMoreBtnElement);
}
