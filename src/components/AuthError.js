import { AuthErrorCodes } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export const divLoginError = document.createElement('p');
export const loginErrorMessage = document.createElement('p');
export const showLoginError = (error) => {
  divLoginError.style.display = 'block';
  if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
    loginErrorMessage.innerHTML = 'Wrong password. Try again.';
  } else {
    loginErrorMessage.innerHTML = `Error: ${error.message}`;
  }
};
