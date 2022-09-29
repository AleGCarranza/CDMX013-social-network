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
  const giM = document.createElement('img');
  giM.setAttribute('id', 'giM');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignupLogin');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmailLogin');
  inputEmail.setAttribute('placeholder', 'Email');
  const pinEmail = document.createElement('img');
  pinEmail.setAttribute('id', 'pinEmail');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passWordLog');
  inputPass.setAttribute('placeholder', 'Password');
  const pinPassword = document.createElement('img');
  pinPassword.setAttribute('id', 'pinPassword');
  const questionLog = document.createElement('p');
  questionLog.setAttribute('id', 'questionLog');
  image.src = 'img/logo.png';
  blueLine.src = 'img/blueline2.png';
  pinEmail.src = 'img/mail.png';
  pinPassword.src = 'img/padlock1.png';
  buttonLogin.textContent = 'Log in';
  buttonGoogle.textContent = 'Sign in with Google';
  giM.src = 'img/google.png';
  buttonSignup.textContent = 'Sign Up';
  questionLog.textContent = 'Don´t have an account?';
  buttonLogin.addEventListener('click', () => {
    onNavigate('/home');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/register');
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/home');
  });

  div.append(image, blueLine, inputEmail, pinEmail, inputPass, pinPassword, buttonLogin, giM, buttonGoogle, questionLog, buttonSignup);
  return div;
};
