import {
  getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

const db = getFirestore(app);
const auth = getAuth();
let uid = '';
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    console.log(uid);
  } else {
    // User is signed out
    // ...
  }
});

export const newPost = async (postMessage) => {
  const docRef = await addDoc(collection(db, 'post'), {
    message: postMessage,
    uid,
  });
  console.log('Document written with ID: ', docRef.id);
};
export const recoveryPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};
export const deletePost = async (idMessage) => {
  await deleteDoc(doc(db, 'post', idMessage));
};
