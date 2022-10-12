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
  const containerPosts = document.createElement('div');
  containerPosts.setAttribute('id', 'conPosts');
  /*const inputEdit = document.createElement('input');
  inputEdit.setAttribute('id', 'userInputEdit');
  inputEdit.setAttribute('placeholder', 'You can edit your comment here');*/
  const buttonLogOut = document.createElement('img');
  buttonLogOut.setAttribute('id', 'userLogOut');
  buttonLogOut.src = 'img/signOut.png';
  buttonLogOut.textContent = 'LogOut';
  buttonSend.addEventListener('click', () => {
    if (inputPost.value === '') {
      console.error('Empty');
    } else { newPost(inputPost.value); }
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
    // onNavigate('/');
  });
  div.append(image, buttonSend, inputPost, buttonUpdate, buttonCancel, containerPosts, buttonLogOut);

  recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const html = `
      <div class='conPosts'> ${doc.data().message} </div> 
      
      `;
      containerPosts.innerHTML += html;  /*${doc.data().uid}*/
      console.log(doc.data());
    });
  });
  /*recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const userMessage = doc.data();
      const textMessage = document.createElement('p');
      textMessage.textContent = userMessage.message;
      console.log(userMessage);
    // containerPosts.append(textMessage);
    });
  });*/

  return div;
};
