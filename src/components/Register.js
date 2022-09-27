import AdvanceStringIndex from 'es-abstract/2015/AdvanceStringIndex.js';
import { setThePassword } from 'whatwg-url';
import { onNavigate, createAccount } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const imageR = document.createElement('img');
  imageR.setAttribute('id', 'logo2');
  const accountButton = document.createElement('button');
  accountButton.setAttribute('id', 'btnCreateAccount');
  const buttonBackLogIn = document.createElement('button');
  buttonBackLogIn.setAttribute('id', 'btnlogin');
  //  const inputUserRegister = document.createElement('input');
  //  inputUserRegister.setAttribute('id', 'registerusername');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'emailinput');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passwordinput');

  imageR.src = 'img/logo.png';
  accountButton.textContent = 'Create Account';
  buttonBackLogIn.textContent = 'Log In';
  accountButton.addEventListener('click', () => {
    createAccount(inputEmail.value, inputPass.value);
    // onNavigate('/home');
  });

  buttonBackLogIn.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(imageR, inputEmail, inputPass, accountButton, buttonBackLogIn);
  //  quitamos inputUserRegister

  return div;
};

const divLoginError = document.querySelector('#divLoginError');
const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage');

export const showLoginError = (error) => {
  divLoginError.style.display = 'block';
  if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
    lblLoginErrorMessage.innerHTML = ' Wrong Password. Try AdvanceStringIndex.';
  } else {
    lblLoginErrorMessage.innerHTML = 'Error: ${error.message}';
  }
};
