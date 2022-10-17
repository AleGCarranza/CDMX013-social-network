import { logout } from './logout.js';
import { deletePost, newPost, recoveryPost } from '../lib/dataBase.js'; //editPost

export const Home = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'principalDiv');
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
  containerPosts.setAttribute('id', 'flex-container');
  //const singleMessage = document.createElement('div');
  //singleMessage.setAttribute('id', 'sinMessage');
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
    inputPost.value = '';
  });
  buttonLogOut.addEventListener('click', () => {
    logout();
    // onNavigate('/');
  });
  div.append(image, buttonSend, inputPost, buttonUpdate, buttonCancel, containerPosts, buttonLogOut);

  recoveryPost((querySnapshot) => {
    containerPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const containPost = document.createElement('p');

      containPost.textContent = post.message;
      containerPosts.classList = 'containPost';
      containPost.classList = 'boxcontain';
      post.classList = 'post';
      console.log(post);

      const btnDelete = document.createElement('img');
      btnDelete.setAttribute('id', 'btnDelete');
      btnDelete.src = 'img/trashCan1.png';
      btnDelete.textContent = 'Delete';
      btnDelete.classList = 'btnDelete';
      btnDelete.addEventListener('click', async () => {
        await deletePost(doc.id);
      });
      containerPosts.append(containPost, btnDelete);
    });
  });

  return div;
};
