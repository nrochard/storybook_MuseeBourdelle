import './header.css';
import { createButton } from './Button';

export const createHeader = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `<div>
  <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_335_941)">
  <path d="M7.68535 20.7953H0.693115V13.0415H0.82796C6.5516 13.0415 9.09128 13.2422 10.4348 13.8922C11.8282 14.5421 12.8746 16.2434 12.8746 17.9422C12.8746 18.9459 12.4251 19.8443 11.7783 20.2433C11.1315 20.6422 10.0727 20.7953 7.68535 20.7953Z" fill="white"/>
  <path d="M12.3127 32.298C11.616 32.9981 11.0191 33.0985 7.68535 33.0985H0.693115V25.297H0.82796C8.59183 25.297 8.89151 25.297 10.5347 26.1452C11.2804 26.5523 11.9047 27.1516 12.3436 27.8814C12.7825 28.6113 13.02 29.4454 13.0319 30.2981C13.0094 31.0986 12.7622 31.8488 12.3127 32.298Z" fill="white"/>
  <path d="M27.6807 27.2819C27.6807 29.9375 26.631 32.4845 24.7624 34.3625C22.8939 36.2406 20.3596 37.296 17.7167 37.2966H11.0841C11.6349 37.1692 12.1546 36.932 12.6124 36.599C13.8061 35.6505 14.5028 33.8388 14.5028 31.7987C14.5028 28.7875 13.459 26.5969 11.219 24.9457C12.3627 24.5944 12.8122 24.2456 13.3091 23.5455C14.1057 22.4941 14.5028 21.0939 14.5028 19.493C14.5028 16.8431 13.5588 14.793 11.5061 13.0415H14.0034V5.18982H13.0045V8.53977H0.680664V0.296631H17.0075C18.9787 0.295992 20.9057 0.882851 22.5449 1.98296C24.184 3.08308 25.4616 4.647 26.216 6.47689C26.9704 8.30678 27.1678 10.3204 26.783 12.263C26.3983 14.2056 25.4488 15.9899 24.0547 17.3902C23.6197 17.8278 23.1448 18.2235 22.6363 18.572C24.1687 19.4457 25.443 20.7122 26.3292 22.2424C27.2154 23.7725 27.6817 25.5115 27.6807 27.2819Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_335_941">
  <rect width="27" height="37" fill="white" transform="translate(0.680664 0.296631)"/>
  </clipPath>
  </defs>
  </svg>
  <p id="language">France 🇫🇷</p>
   <ul>

    <li>Musée</li>
    <li>Antoine Bourdelle</li>
    <li>Collections</li>
    <li>Expositions</li>
    <li>Activités</li>
   </ul>
  </div>`;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  header.appendChild(wrapper);

  return header;
};
