/**
 * Function to create a new HTML element.
 * @param {string} elementType - The type of the HTML element.
 * @param {string} id - The id of the HTML element.
 * @param {string} text - The text content of the HTML element.
 * @returns {HTMLElement} The created HTML element.
 */
export const createElement = (elementType, id, text) => {
  const element = document.createElement(elementType);
  element.id = id;
  element.textContent = text;
  return element;
};

/**
 * Function to append children to a parent HTML element.
 * @param {HTMLElement} parent - The parent HTML element.
 * @param {Array} children - The array of children to be appended.
 */
export const appendChildren = (parent, children) => {
  children.forEach((child) => parent.appendChild(child));
};
