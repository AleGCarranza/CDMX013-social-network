import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
//import { app } from './config.js.';

export const db = getFirestore();

export const loadPost = db.collection('post').doc().set({
});
