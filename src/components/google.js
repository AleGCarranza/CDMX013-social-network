import { GoogleAuthProvider, signInWithPopup, getAuth } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

import { onNavigate } from '../main.js';

export const googleAuth = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      onNavigate('/home');
      console.log('google sign in');
    })
    .catch((error) => {
      console.log(error);
    });
};
