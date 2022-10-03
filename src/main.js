import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Home } from './components/Home.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

const auth = getAuth();

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
onAuthStateChanged(auth, (user) => {
  if (user) {
    onNavigate('/home');
  } else {
    onNavigate('/');
  }
});
root.appendChild(component());
