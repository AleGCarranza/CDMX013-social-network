// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js'; // 'firebase/app';
import {
  getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword,
}
  from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js'; // 'firebase/auth';//

// import  {getFirestore, createusernameandpass } from  'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js'; // 'firebase/auth';

import { Login } from './components/Login.js';
import { Register, showLoginError } from './components/Register.js';
import { Home } from './components/Home.js';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDtjOfzWEfHH-F5djUftS7tQD6tl6O-MRM',
  authDomain: 'frontier-advisor.firebaseapp.com',
  projectId: 'frontier-advisor',
  storageBucket: 'frontier-advisor.appspot.com',
  messagingSenderId: '864982046786',
  appId: '1:864982046786:web:432b211d42716bb7c475db',
});

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, 'http://localhost:3000');

export const loginEmailPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredential.user);
};

export const createAccount = async (loginEmail, loginPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
    showLoginError(error);
  }
};

const root = document.getElementById('root');

const routes = {
  '/': Login,
  '/register': Register,
  '/home': Home,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};
root.appendChild(component());

// Firebase

/* const firebaseConfig = {
  apiKey: 'AIzaSyDtjOfzWEfHH-F5djUftS7tQD6tl6O-MRM',
  authDomain: 'frontier-advisor.firebaseapp.com',
  projectId: 'frontier-advisor',
  storageBucket: 'frontier-advisor.appspot.com',
  messagingSenderId: '864982046786',
  appId: '1:864982046786:web:432b211d42716bb7c475db',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
};

const auth = getAuth();
createusernameandpass(auth, email, password)
.then((userCredential)  => {
  const user = userCredential.user;
});
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }); */
// Your web app's Firebase configuration
// buttonLogin.addEventListener('click', loginEmailPassword);

/* onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
}); */

// Termina firebase
