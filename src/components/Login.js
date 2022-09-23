import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.setAttribute('id', 'logo');
  const blueLine = document.createElement('img');
  blueLine.setAttribute('id', 'blueLine');
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignupLogin');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmailLogin');
  inputEmail.setAttribute('placeholder', 'Email...');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passWordLog');

  image.src = 'img/logo.png';
  blueLine.src = 'img/blueline2.png';
  buttonLogin.textContent = 'Log in';
  buttonGoogle.textContent = 'Sign in with Google';
  buttonSignup.textContent = 'Sign Up';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/home');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/home');
  });

  div.append(image, blueLine, inputEmail, inputPass, buttonLogin, buttonGoogle, buttonSignup);
  return div;
};
