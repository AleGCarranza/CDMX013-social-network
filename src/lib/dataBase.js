import { getFirestore, addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const newPost = async () => {
  const docRef = await addDoc(collection(db, 'post'), {
    message: 'Hola si funciono',
  });
  console.log('Document written with ID: ', docRef.id);
};
