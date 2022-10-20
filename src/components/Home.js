import { logout } from './logout.js';
<<<<<<< HEAD
import { newPost } from '../lib/dataBase.js';
//import { Post } from './Post.js';
=======
import { newPost, recoveryPost } from '../lib/dataBase.js';
import { POST } from './POST.js';
>>>>>>> 14ec90b3484868db69aaeb4c4b7659afb664c02e

export const Home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'principalDiv');
  const image = document.createElement('img');
  image.setAttribute('id', 'logoHome');
  image.src = 'img/logoHomeText.png';
<<<<<<< HEAD
=======

  /* buttonUpdate.textContent = 'Update';
  buttonUpdate.setAttribute('id', 'btnUpdate'); */
  // const buttonCancel = document.createElement('button');
>>>>>>> 14ec90b3484868db69aaeb4c4b7659afb664c02e
  const buttonSend = document.createElement('img');
  buttonSend.setAttribute('id', 'btnSend');
  buttonSend.src = 'img/bluearrow.png';
  buttonSend.textContent = 'Send';

  const inputPost = document.createElement('textarea');
  inputPost.setAttribute('id', 'userInputPost');
  inputPost.setAttribute('placeholder', ' Type your advice here #categorie');
  inputPost.setAttribute('maxlength', '300');
<<<<<<< HEAD
=======

>>>>>>> 14ec90b3484868db69aaeb4c4b7659afb664c02e
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
  });
<<<<<<< HEAD
  div.append(image, buttonSend, inputPost, buttonLogOut);
=======

  const containerPosts = document.createElement('div');
  recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    containerPosts.appendChild(POST(querySnapshot));
  });

  div.append(image, buttonSend, inputPost, containerPosts, buttonLogOut);
>>>>>>> 14ec90b3484868db69aaeb4c4b7659afb664c02e
  return div;
};
