import { logout } from './logout.js';
import {
  deletePost, newPost, recoveryPost, updatePost,
} from '../lib/dataBase.js';
import { auth } from '../lib/auth.js';

export const Home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'principalDiv');
  const image = document.createElement('img');
  image.setAttribute('id', 'logoHome');
  image.src = 'img/logoHomeText.png';
  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'userInputPost');
  inputPost.setAttribute('placeholder', ' Type your advice here #categorie');
  inputPost.setAttribute('maxlength', '300');
  const containerPosts = document.createElement('div');
  containerPosts.setAttribute('id', 'containerpost');
  const buttonLogOut = document.createElement('img');
  buttonLogOut.setAttribute('id', 'userLogOut');
  buttonLogOut.src = 'img/signOut.png';
  buttonLogOut.textContent = 'LogOut';
  const buttonSend = document.createElement('img');
  buttonSend.setAttribute('id', 'btnSend');
  buttonSend.src = 'img/bluearrow.png';
  buttonSend.addEventListener('click', () => {
    if (inputPost.value === '') {
      window.alert('We need some characters ');
    } else { newPost(inputPost.value); }
    inputPost.value = '';
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
  });
  recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    const user = auth.currentUser;

    querySnapshot.forEach((doc) => {
      const messageInfo = doc.data();
      const textMessage = document.createElement('textarea');
      textMessage.classList = 'textmessage';
      textMessage.setAttribute('readonly', true);
      textMessage.textContent = messageInfo.message;
      const btnDelete = document.createElement('img');
      btnDelete.src = 'img/trash.png';
      btnDelete.classList = 'btnDelete';
      const btnEdit = document.createElement('img');
      btnEdit.src = 'img/pencilEdit.png';
      btnEdit.classList = 'btnEdit';
      const btnLike = document.createElement('img');
      btnLike.src = 'img/emptyHeart.png';
      btnLike.classList = 'btnLike';
      const btnSave = document.createElement('button');
      btnSave.textContent = 'Update';
      btnSave.classList = 'btnSave';
      if (user.uid === doc.data().uid) {
        containerPosts.append(btnDelete);
        containerPosts.append(btnEdit);
        containerPosts.append(btnSave);
        btnDelete.addEventListener('click', async () => {
          await deletePost(doc.id);
        });
        btnEdit.addEventListener('click', async () => {
          textMessage.removeAttribute('readonly');
          btnSave.addEventListener('click', async () => {
            updatePost(doc.id, { message: textMessage.value });
            window.alert('Already Save');
          });
        });
      } else {
        containerPosts.append(btnLike);
        btnLike.addEventListener('click', async () => {
          console.log('like');
        });
      }
      containerPosts.append(textMessage);
    });
  });
  div.append(image, buttonSend, inputPost, containerPosts, buttonLogOut);
  return (div);
};
