import './animation.css';

import srcImg from './../assets/img/corps.png';
import srcImg2 from './../assets/img/visage.png';

export const createAnimation = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const animation = document.createElement('animation');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrappers';

  const animation1 = `
    <img src=${srcImg}>
`;

const animation2 = `
<img src=${srcImg2}>
`;

  wrapper.insertAdjacentHTML('afterbegin', animation1);
  wrapper.insertAdjacentHTML('afterbegin', animation2);

  animation.appendChild(wrapper);

  return animation;
};
