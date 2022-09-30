/* eslint-disable max-len */
//import {app} from './config.js';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
}
  from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

const auth = getAuth();
export const createAccount = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginEmailPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredential.user);
};
