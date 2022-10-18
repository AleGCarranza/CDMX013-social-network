import { logout } from './logout.js';
import {
  deletePost, newPost, recoveryPost, editPost,
} from '../lib/dataBase.js';

export const Home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'principalDiv');
  const image = document.createElement('img');
  image.setAttribute('id', 'logoHome');
  image.src = 'img/logoHomeText.png';
  const btnEdit = document.createElement('img');
  const buttonSave = document.createElement('btn');
  /* buttonUpdate.textContent = 'Update';
  buttonUpdate.setAttribute('id', 'btnUpdate'); */
  // const buttonCancel = document.createElement('button');
  const buttonSend = document.createElement('img');
  buttonSend.setAttribute('id', 'btnSend');
  buttonSend.src = 'img/bluearrow.png';
  buttonSend.textContent = 'Send';
  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'userInputPost');
  inputPost.setAttribute('placeholder', ' Type your advice here #categorie');
  inputPost.setAttribute('maxlength', '300');
  const containerPosts = document.createElement('div');
  const buttonLogOut = document.createElement('img');
  buttonLogOut.setAttribute('id', 'userLogOut');
  buttonLogOut.src = 'img/signOut.png';
  buttonLogOut.textContent = 'LogOut';
  buttonSend.addEventListener('click', () => {
    if (inputPost.value === '') {
      console.error('Empty');
    } else { newPost(inputPost.value); }
    inputPost.value = '';
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
    // onNavigate('/');
  });
  recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();

      const containPost = document.createElement('div');
      console.log(doc.id);
      containPost.setAttribute('id', doc.id);
      containPost.setAttribute('readonly', true);

      containPost.textContent = post.message;
      containerPosts.classList = 'containPost';
      containPost.classList = 'boxcontain';
      post.classList = 'post';
      console.log(post);

      const btnDelete = document.createElement('img');
      btnDelete.setAttribute('id', 'btnDelete');
      btnDelete.src = 'img/trashCan1.png';
      btnDelete.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      btnEdit.setAttribute('id', 'btnEdit');
      btnEdit.src = 'img/pencil.png';

      containerPosts.append(containPost, btnDelete);

      btnEdit.addEventListener('click', (e) => {
        e.preventDefault();
        const containerPrincipal = document.getElementById(doc.id);
        const inputtext = document.createElement('input');
        inputtext.value = doc.data().message;
        containerPrincipal.append(inputtext);
        buttonSave.textContent = 'Upgrade';
        buttonSave.setAttribute('id', 'btnSave');
        buttonSave.addEventListener('click', e, async () => {
          editPost(doc.id, { message: containPost.value });
          e.stopImmediatePropagation();
        });
        div.append(buttonSave);
      });
    });
  });
  div.append(image, buttonSend, inputPost, containerPosts, buttonLogOut, btnEdit);
  return div;
};
