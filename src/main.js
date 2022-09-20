// Este es el punto de entrada de tu aplicacion

import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Home } from './components/Home.js';

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
