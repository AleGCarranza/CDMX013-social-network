/*import { POST } from './POST.js';
import { editPost, saveEditPost } from '../lib/dataBase.js';

export const saveEditComment = (querySnapshot) => {
  const containerPosts = document.createElement('div');
  const containPost = document.createElement('div');
  querySnapshot.forEach((doc) => {
    const buttonSave = document.createElement('btn');
    const post = doc.data();
    buttonSave.addEventListener('click', async () => {
      editPost(doc.id, { message: containPost.value });
    });
    containerPosts.append(buttonSave);
  });
  return containerPosts;
};*/
