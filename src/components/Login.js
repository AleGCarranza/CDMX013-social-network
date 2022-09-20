import { onNavigate } from "../main.js";

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonSignup = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  buttonLogin.textContent = 'Log in';
  buttonGoogle.textContent = 'Sign in with Google';
  buttonSignup.textContent = 'Sign Up';

  title.textContent = 'Frontier Advisor';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/home');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/home');
  });

  div.append(title, inputEmail, inputPass, buttonLogin, buttonGoogle, buttonSignup);
  return div;
};
