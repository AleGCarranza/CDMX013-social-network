/* eslint-disable max-len */

import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
}
  from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export const auth = getAuth();
export const createAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginEmailPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredential.user);
};
