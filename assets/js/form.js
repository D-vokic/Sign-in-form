import { login, createSignInElements } from "./login.js";

/**
 * Function to handle form submission for login.
 * @param {Event} event - The form submission event.
 * @returns {Promise<void>} - A promise representing the completion of the function.
 */
export const handleLoginFormSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    displayError("Username and password are required");
    return;
  }

  try {
    await login(username, password);
  } catch (error) {
    displayError(error.message);
  }
};

/**
 * Function to create the login form.
 */
export const createLoginForm = () => {
  const div = createElement("div", {
    id: "loginForm",
    className: "login-form",
  });

  const h2 = createElement("h2", {}, "Sign in");

  const createAccountLink = createElement(
    "p",
    {
      className: "createAccountLink",
    },
    " <small>New here? <span>Create an account</span></small>"
  );

  const usernameInput = createElement("input", {
    type: "text",
    id: "username",
    className: "username",
    placeholder: "Username",
  });

  const passwordInput = createElement("input", {
    type: "password",
    id: "password",
    className: "password",
    placeholder: "Password",
  });

  const loginButton = createElement(
    "button",
    { className: "login-button" },
    "Login"
  );
  loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });

  const createRememberMeCheckboxElements = () => {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.id = "remembermeCheckbox";
    checkboxDiv.className = "checkboxDiv";
    checkboxDiv.style.border = "2px solid white";
    checkboxDiv.style.display = "flex";
    checkboxDiv.style.alignItems = "center";
    checkboxDiv.style.marginBottom = "1rem";
    checkboxDiv.innerHTML = `
      <div>
        <input type="checkbox" id="rememberme" class="rememberme" style="border: 2px solid white; display: inline-block;">
        <label for="rememberme" class="rememberme-label" style="display: inline-block; margin-left: 50%; transform: translatex(-50%); margin-bottom: 1rem; font-size: .8rem;">Remember me</label>
      </div>
    `;

    return Array.from(checkboxDiv.children[0].children);
  };

  const resetButton = createElement(
    "button",
    { className: "reset-btn" },
    "Reset"
  );
  resetButton.addEventListener("click", () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });

  const signInText = createElement(
    "p",
    { className: "signOption", id: "signOption" },
    "&mdash; Or Sign In With &mdash;"
  );

  const addForgotPasswordLink = createElement(
    "a",
    { className: "forgotPassword", id: "forgotPassword", href: "#" },
    "Forgot your password?"
  );

  const errorDiv = createElement("div", {
    id: "error",
    style: { display: "none", color: "red" },
  });

  div.append(
    h2,
    createAccountLink,
    usernameInput,
    passwordInput,
    ...createRememberMeCheckboxElements(),
    loginButton,
    resetButton,
    addForgotPasswordLink,
    errorDiv
  );
  div.addEventListener("submit", handleLoginFormSubmit);

  document.body.append(div, errorDiv);

  // Call createSignInElements here, after the login form is appended to the body
  createSignInElements();

  // Call addForgotPasswordLink here, after the password input is created
  addForgotPasswordLink();
};

/**
 * Function to create an HTML element with given attributes.
 * @param {string} tagName - The tag name of the HTML element.
 * @param {object} options - Options for the HTML element.
 * @param {string} options.className - The class name of the HTML element.
 * @param {string} options.id - The id of the HTML element.
 * @param {object} options.style - The style properties of the HTML element.
 * @param {string} innerHTML - The inner HTML content of the HTML element.
 * @returns {HTMLElement} - The created HTML element.
 */
export const createElement = (
  tagName,
  { className, id, style, ...attributes } = {},
  innerHTML = ""
) => {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (id) element.id = id;
  for (const [key, value] of Object.entries(attributes)) {
    element[key] = value;
  }
  if (style) {
    for (const [key, value] of Object.entries(style)) {
      element.style[key] = value;
    }
  }
  element.innerHTML = innerHTML;
  return element;
};

/**
 * Function to create a social login option.
 * @param {object} options - Options for the social login option.
 * @param {string} options.className - The class name of the social login option.
 * @param {string} options.iconName - The name of the icon for the social login option.
 * @param {string} options.text - The text associated with the social login option.
 * @returns {HTMLElement} - The created social login option HTML element.
 */
export const createSocialOption = ({ className, iconName, text }) => {
  const iconHTML = `<span class="ion-logo-${iconName}" id="ion-logo-${iconName}"></span>`;
  return createElement("a", { className, href: "#" }, `${iconHTML} ${text}`);
};

/**
 * Function to display an error message.
 * @param {string} message - The error message to display.
 */
export const displayError = (message) => {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
};

/**
 * Function to redirect to the index page.
 */
export const redirectToIndex = () => {
  window.location.href = "login.html";
};
