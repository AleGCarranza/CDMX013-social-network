import { onNavigate } from '../main.js';

export const Home = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonSend = document.createElement('button');
  const inputPost = document.createElement('input');

  buttonSend.textContent = 'Send';
  title.textContent = 'Home Welcome Traveler';
  buttonSend.addEventListener('click', () => {
    onNavigate(console.log('The button is working'));
  });

  div.append(title, buttonSend, inputPost);

  return div;
};
