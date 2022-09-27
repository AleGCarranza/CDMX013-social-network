
import { onNavigate, loginEmailPassword } from '../main.js';

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
  const giM = document.createElement('img');
  giM.setAttribute('id', 'giM');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignupLogin');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmailLogin');
  inputEmail.setAttribute('placeholder', 'Email');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passWordLog');
  inputPass.setAttribute('placeholder', 'Password');
  //QuestionLogin doubts
  const questionLogin = document.createElement('div');
  questionLogin.setAttribute('id', 'questionLogin');
  image.src = 'img/logo.png';
  blueLine.src = 'img/blueline2.png';
  buttonLogin.textContent = 'Log in';
  buttonGoogle.textContent = 'Sign in with Google';
  giM.src = 'img/google.png';
  buttonSignup.textContent = 'Sign Up';
  buttonLogin.addEventListener('click', () => {
    loginEmailPassword(inputEmail.value, inputPass.value);
  // onNavigate('/home');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/home');
  });

  div.append(image, blueLine, inputEmail, inputPass, buttonLogin, giM, buttonGoogle, buttonSignup);
  return div;
};
