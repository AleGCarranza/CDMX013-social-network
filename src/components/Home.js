// import { onNavigate } from '../main.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'; // doc, setDoc
import { logout } from './logout.js';

const db = getFirestore();
export const Home = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.setAttribute('id', 'logoHome');
  image.src = 'img/logoHomeText.png';
  const buttonUpdate = document.createElement('button');
  buttonUpdate.textContent = 'Update';
  buttonUpdate.setAttribute('id', 'btnUpdate');
  const buttonCancel = document.createElement('button');
  buttonCancel.textContent = 'Cancel';
  buttonCancel.setAttribute('id', 'btnCancel');
  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'Send';
  buttonSend.setAttribute('id', 'btnSend');
  const inputPost = document.createElement('input');
  inputPost.setAttribute('id', 'userInputPost');
  inputPost.setAttribute('placeholder', 'Type your advice here #categorie');
  const inputEdit = document.createElement('input');
  inputEdit.setAttribute('id', 'userInputEdit');
  inputEdit.setAttribute('placeholder', 'You can edit your comment here');
  const buttonLogOut = document.createElement('button');
  buttonLogOut.setAttribute('id', 'userLogOut');
  buttonLogOut.textContent = 'LogOut';

  buttonSend.addEventListener('click', async (e) => {
    e.preventDefault();

    const description = inputPost['post-description'].value;
    const response = await db.collection('posts').doc().set({
      description,
    });
    console.log(object);
    console.log(description);
  });
 // Pasos para iniciar la colección (test1 parte 2**) Sale undefined en consola :C
  /* const loadPost = (description) => db.collection('posts').doc().set({
    description,
  });

  buttonSend.addEventListener('click', async (e) => {
    e.preventDefault();

    const description = buttonSend['post-description'].value;

    await loadPost(description);
    console.log(description);
  }); */

  // onNavigate(console.log());

  buttonLogOut.addEventListener('click', () => {
    logout();
    // onNavigate('/');
  });
  div.append(image, buttonSend, inputPost, inputEdit, buttonUpdate, buttonCancel, buttonLogOut);
  return div;
};
