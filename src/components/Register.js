import { onNavigate } from '../main.js';
import { createAccount } from '../lib/auth.js';

export const Register = () => {
  const errorMessageRegister = document.createElement('p');
  const registerSucces = document.createElement('p');
  const div = document.createElement('div');
  const imageR = document.createElement('img');
  imageR.setAttribute('id', 'logo2');
  const welcomeMessage = document.createElement('img');
  welcomeMessage.setAttribute('id', 'welcomeview');
  const accountButton = document.createElement('button');
  accountButton.setAttribute('id', 'btnCreateAccount');
  //accountButton.setAttribute('type', 'submit');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'emailinputRegister');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('required', true);
  const pinEmail2 = document.createElement('img');
  pinEmail2.setAttribute('id', 'pinEmail2');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'passwordinputRegister');
  inputPass.setAttribute('type', 'password');
  inputPass.setAttribute('placeholder', 'Password');
  inputPass.setAttribute('required', true);
  const pinPassword2 = document.createElement('img');
  pinPassword2.setAttribute('id', 'pinPassword2');
  const questionBacklog = document.createElement('p');
  questionBacklog.setAttribute('id', 'questionbacklog');
  const buttonBackLogIn = document.createElement('button');
  buttonBackLogIn.setAttribute('id', 'btnlogin');
  errorMessageRegister.setAttribute('class', 'errormessage');
  registerSucces.setAttribute('class', 'congrats');
  const form = document.createElement('form');
  form.append(inputEmail, inputPass, accountButton);
  imageR.src = 'img/logo.png';
  welcomeMessage.src = 'img/view2map.png';
  pinEmail2.src = 'img/mail.png';
  pinPassword2.src = 'img/padlock1.png';
  accountButton.textContent = 'Create Account';
  questionBacklog.textContent = 'Are you member?';
  buttonBackLogIn.textContent = 'Log In';
  accountButton.addEventListener('click', () => {
    createAccount(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      registerSucces.innerHTML = 'Congrats, Welcome to Frontier Advisor';
      console.log('Ya te registraste');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // errorMessageRegister.innerHTML = 'You already have an account .Back to the login';
      });
  });

  buttonBackLogIn.addEventListener('click', () => {
    onNavigate('/');
  });
  //div.insertBefore(errorMessageRegister, form);
  div.append(imageR, welcomeMessage, pinEmail2, pinPassword2, form, errorMessageRegister, questionBacklog, buttonBackLogIn, registerSucces);

  return div;
};
