import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  const imageR = document.createElement('img');
  imageR.setAttribute('id', 'logo2');
  const accountButton = document.createElement('button');
  accountButton.setAttribute('id', 'btnCreateAccount');
  const buttonBackLogIn = document.createElement('button');
  buttonBackLogIn.setAttribute('id', 'btnlogin');
  const inputUserRegister = document.createElement('input');
  inputUserRegister.setAttribute('id', 'registerusername');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'emailinput');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passwordinput');

  imageR.src = 'img/logo.png';
  accountButton.textContent = 'Create Account';
  buttonBackLogIn.textContent = 'Log In';
  accountButton.addEventListener('click', () => {
    onNavigate('/home');
  });
  buttonBackLogIn.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(imageR, inputUserRegister, inputEmail, inputPass, accountButton, buttonBackLogIn);

  return div;
};
