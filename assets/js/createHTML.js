/**
 * Creates an HTML label element and appends it to the parent element.
 * @param {string} text - The text content of the label element.
 * @param {string} name - The name of the label element.
 * @param {HTMLElement} parent - The parent element to append the label element to.
 */
export const createLabelHTML = (text, name, parent) => {
  const label = document.createElement("label");
  label.htmlFor = name;
  label.appendChild(document.createTextNode(text));
  parent.appendChild(label);
  return label;
};

/**
 * Creates an HTML input element and appends it to the parent element.
 * @param {string} htmlType - The type of the HTML element to create.
 * @param {string} type - The type of the input element.
 * @param {string} id - The id of the input element.
 * @param {string} name - The name of the input element.
 * @param {string} text - The text for the label of the input element.
 * @param {HTMLElement} parent - The parent element to append the input element to.
 */
export const createInputHTML = (htmlType, type, id, name, text, parent) => {
  const label = createLabelHTML(text, name, parent);
  const input = document.createElement(htmlType);
  if (type !== null) {
    input.type = type;
  }
  input.id = id;
  input.name = name;
  parent.appendChild(input);
  parent.appendChild(document.createElement("br"));
};

/**
 * Creates an HTML form element with the specified fields and buttons, and appends it to the body of the document.
 * @param {string} id - The id of the form element.
 * @param {Array} fields - An array of objects representing the fields of the form.
 * @param {Array} buttons - An array of objects representing the buttons of the form.
 * @param {Function} fnc - The function to call when the form is submitted.
 */
export const createFormHTML = (id, fields, buttons, fnc) => {
  const form = document.createElement("form");
  form.id = id;
  document.body.appendChild(form);

  fields.forEach((field) =>
    createInputHTML(
      field.htmlType,
      field.type,
      field.id,
      field.name,
      field.text,
      form
    )
  );

  const clearButton = document.createElement("button");
  clearButton.type = "reset";
  clearButton.textContent = "Clear";
  form.appendChild(clearButton);

  buttons.forEach((button) =>
    createHTMLButton(button.type, button.id, button.text, button.fnc, form)
  );
};

/**
 * Creates an HTML div element representing a single post.
 * @param {Object} post - An object representing a post.
 * @returns {HTMLElement} The created post element.
 */
export const createSinglePost = (post) => {
  console.log(post);
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;

  const authorDateElement = document.createElement("span");
  authorDateElement.textContent = `Author: ${post.author}, Date of publication: ${post.publicationDate}`;

  postElement.appendChild(titleElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(authorDateElement);

  return postElement;
};

/**
 * Creates an HTML button element and appends it to the parent element.
 * @param {string} type - The type of the button element.
 * @param {string} id - The id of the button element.
 * @param {string} text - The text content of the button element.
 * @param {Function} fnc - The function to call when the button is clicked.
 * @param {HTMLElement} parent - The parent element to append the button element to.
 */
export const createHTMLButton = (type, id, text, fnc, parent) => {
  const button = document.createElement("button");
  button.type = type;
  button.id = id;
  button.textContent = text;
  if (fnc !== null) {
    button.addEventListener("click", fnc);
  }
  parent.appendChild(button);
};

/**
 * Creates an HTML div element and appends it to the parent element.
 * @param {string} id - The id of the div element.
 * @param {HTMLElement} parent - The parent element to append the div element to.
 */
export const createHTMLDiv = (id, parent) => {
  const div = document.createElement("div");
  div.id = id;
  parent.appendChild(div);
};
