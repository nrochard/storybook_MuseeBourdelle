import "./slider.css";
import srcImg from "./../assets/img/bandw.png";

export const createSlider = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const slider = document.createElement("slider");

  const wrapper = `
 <div class="pstn slider">
    <img src="${srcImg}"/>
    <div class="content">
      <p class="title">Article</p>
      <p class="subtitle">L'Artiste</p>
      <div class="flex-text">
        <p class="text">
        Emile-Antoine Bourdelle naît à Montauban le 30 octobre 1861. Il est le fils unique d’Emilie Reille, fille de tisserand et d’Antoine Bourdelle, menuisier-ébéniste qui sculpte les meubles qu’il dessine. A l’école l’enfant manifeste de si vives dispositions pour le dessin que son maître, Monsieur Rousset, lui accorde toute liber...
        </p>
        <p>Lire la suite <span><svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6613 0.307786C9.05182 -0.0827385 9.68499 -0.0827385 10.0755 0.307786L16.0755 6.30779C16.2631 6.49532 16.3684 6.74968 16.3684 7.01489C16.3684 7.28011 16.2631 7.53446 16.0755 7.722L10.0755 13.722C9.68499 14.1125 9.05182 14.1125 8.6613 13.722C8.27078 13.3315 8.27078 12.6983 8.6613 12.3078L12.9542 8.01489L1.36841 8.01489C0.816123 8.01489 0.368408 7.56718 0.368408 7.01489C0.368408 6.46261 0.816123 6.01489 1.36841 6.01489L12.9542 6.01489L8.6613 1.722C8.27078 1.33148 8.27078 0.69831 8.6613 0.307786Z" fill="white"/>
        </svg>
        </span></p>
      </div>
    </div>
    
 </div>
`;
  slider.insertAdjacentHTML("afterbegin", wrapper);

  return slider;
};
