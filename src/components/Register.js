import { onNavigate } from "../main.js";

export const Register = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const accountButton = document.createElement('button');
  const buttonBackLogIn = document.createElement('button');
  const inputUserName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');

  accountButton.textContent = 'Create Account';
  buttonBackLogIn.textContent = 'Log In';
  title.textContent = 'Frontier Advisor';
  accountButton.addEventListener('click', () => {
    onNavigate('/home');
  });
  buttonBackLogIn.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputUserName, inputEmail, inputPass, accountButton, buttonBackLogIn);

  return div;
};
