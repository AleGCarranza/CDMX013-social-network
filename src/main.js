// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js'; // 'firebase/app';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js'; // 'firebase/auth';

import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Home } from './components/Home.js';

// Firebase

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDtjOfzWEfHH-F5djUftS7tQD6tl6O-MRM',
  authDomain: 'frontier-advisor.firebaseapp.com',
  projectId: 'frontier-advisor',
  storageBucket: 'frontier-advisor.appspot.com',
  messagingSenderId: '864982046786',
  appId: '1:864982046786:web:432b211d42716bb7c475db',
});

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('logged in!');
  } else {
    console.log('No user');
  }
});

// Termina firebase

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
