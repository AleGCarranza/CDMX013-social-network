import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { onNavigate } from '../main.js';
import { app } from '../lib/config.js';

const auth = getAuth(app);

export const Logout = () => {
  signOut(auth).then(() => {
    onNavigate('/');
  });
};
