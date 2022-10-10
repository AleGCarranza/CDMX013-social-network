import {
  getFirestore, addDoc, collection, collection, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const newPost = async (postMessage) => {
  const docRef = await addDoc(collection(db, 'post'), {
    message: postMessage,
  });
  console.log('Document written with ID: ', docRef.id);
};
export const recoveryPost = (callback) => {
  onSnapshot(
  collection(db, 'post'),callback)
}
  