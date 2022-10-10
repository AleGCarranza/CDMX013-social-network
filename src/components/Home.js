import { logout } from './logout.js';
import { newPost, recoveryPost } from '../lib/dataBase.js';


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
  buttonSend.setAttribute('id', 'btnSend');
  buttonSend.textContent = 'Send';
  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'userInputPost');
  inputPost.setAttribute('placeholder', ' Type your advice here #categorie');
  inputPost.setAttribute('maxlength', '300');
  const inputEdit = document.createElement('input');
  inputEdit.setAttribute('id', 'userInputEdit');
  inputEdit.setAttribute('placeholder', 'You can edit your comment here');
  const buttonLogOut = document.createElement('button');
  buttonLogOut.setAttribute('id', 'userLogOut');
  buttonLogOut.textContent = 'LogOut';
  buttonSend.addEventListener('click', () => {
    if (inputPost.value === '') {
      console.error('Empty');
    } else { newPost(inputPost.value); }
    console.log(newPost);
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
    // onNavigate('/');
  });
  div.append(image, buttonSend, inputPost, inputEdit, buttonUpdate, buttonCancel, buttonLogOut);
  recoveryPost();
  return div;
};

/* e.preventDefault();
    const description = inputPost['post-description'].value;
    const response = await db.collection('posts').doc().set({
      description,
    });
    console.log(response);
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

//* buttonLogOut.addEventListener('click', () => {
// logout();
// onNavigate('/');
// });
// div.append(image, buttonSend, inputPost, inputEdit, buttonUpdate, buttonCancel, buttonLogOut);
// return div};
