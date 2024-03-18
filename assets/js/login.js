import { User } from "./user.js";
import { UserDatabase } from "./userDatabase.js";
import {
  createElement,
  createSocialOption,
  displayError,
  redirectToIndex,
} from "./form.js";

const userDatabase = new UserDatabase();
userDatabase.addUser(new User("Nikola", "admin"));
userDatabase.addUser(new User("dusko", "user123"));
userDatabase.addUser(new User("FilipZ", "webfaxedu"));

export const login = async (username, password) => {
  try {
    if (userDatabase.validateUser(username, password)) {
      redirectToIndex();
      displayContent();
    } else {
      displayError("Invalid username or password");
    }
  } catch (error) {
    displayError(error.message);
  }
};

export const createSignInElements = () => {
  const signInText = createElement(
    "p",
    { className: "signOption", id: "signOption" },
    "&mdash; Or Sign In With &mdash;"
  );

  const socialOptionsDiv = createElement("div", {
    className: "socialOption",
    id: "socialOption",
  });

  const socialOptions = [
    {
      className: "socialOptionFacebook",
      iconName: "facebook",
      text: "Facebook",
    },
    {
      className: "socialOptionLinkedin",
      iconName: "linkedin",
      text: "Linkedin",
    },
  ];

  const socialOptionElements = socialOptions.map(createSocialOption);

  socialOptionsDiv.append(...socialOptionElements);

  document.body.append(signInText, socialOptionsDiv);
};
