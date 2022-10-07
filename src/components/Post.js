import { newPost } from '../lib/dataBase.js';

export const createPost = async () => {
  const div = document.createElement('div');
  const input = document.createElement('input');

  await newPost();

  div.append(input);
  return div;
};
