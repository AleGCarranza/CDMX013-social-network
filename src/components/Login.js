import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  const blueLine = document.createElement('img');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonSignup = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  image.src = 'img/logo.png';
  blueLine.src = 'img/blueline.png';
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