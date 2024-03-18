/**
 * Import createLoginForm function from form.js module.
 * @module form
 * @see module:form.createLoginForm
 */
import { createLoginForm } from "./form.js";

/**
 * Import handleLoginFormSubmit function from form.js module.
 * @module form
 * @see module:form.handleLoginFormSubmit
 */
import { handleLoginFormSubmit } from "./form.js";

/**
 * Add event listener for DOMContentLoaded event.
 * When the DOM is fully loaded, the createLoginForm function is called.
 */
document.addEventListener("DOMContentLoaded", createLoginForm);
