import { onNavigate } from '../main.js';

export const Home = () => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.setAttribute('id', 'logoHome');
  const buttonSend = document.createElement('button');
  buttonSend.setAttribute('id', 'btnSend');
  const inputPost = document.createElement('input');
  inputPost.setAttribute('id', 'userInputPost');
  
  image.src = 'img/logoHome.png';
  buttonSend.textContent = 'Send';

  buttonSend.addEventListener('click', () => {
    onNavigate(console.log('The button is working'));
  });

  div.append(image, buttonSend, inputPost);

  return div;
};
