import { deletePost, editPost } from '../lib/dataBase.js';

export const Post = (querySnapshot) => {
  const postDiv = document.createElement('div');
  querySnapshot.forEach((doc) => {
    const btnEdit = document.createElement('img');
    const buttonSave = document.createElement('btn');
    const post = doc.data();

    const containPost = document.createElement('div');
    containPost.setAttribute('id', doc.id);
    containPost.setAttribute('readonly', true);
    containPost.textContent = post.message;

    const containerPosts = document.createElement('div');
    containerPosts.classList = 'containPost';
    containPost.classList = 'boxcontain';
    post.classList = 'post'; //??

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
      buttonSave.addEventListener('click', async () => {
        editPost(doc.id, { message: containPost.value });
      });
      postDiv.append(buttonSave, btnEdit, btnDelete);
    });
  });
};
