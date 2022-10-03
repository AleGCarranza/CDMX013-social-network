import { onNavigate } from '../main.js';
import { logout } from './logout.js';
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
  buttonSend.addEventListener('click', () => {
    onNavigate(console.log());
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
    //onNavigate('/');
  });
  div.append(image, buttonSend, inputPost, inputEdit, buttonUpdate, buttonCancel, buttonLogOut);
  return div;
};
