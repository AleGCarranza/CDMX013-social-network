import { onNavigate } from '../main.js';
import { createAccount } from '../lib/auth.js';

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
    createAccount(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log('YA te registraste valedora');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('nel valedora');
      // ..
      });
  });

  buttonBackLogIn.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(imageR, inputEmail, inputPass, accountButton, buttonBackLogIn);
  //  quitamos inputUserRegister

  return div;
};
