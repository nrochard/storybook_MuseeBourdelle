import "./footer.css";

export const createFooter = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const footer = document.createElement("footer");
  const wrapper = `
   <footer>
    <svg width="323" height="250" class="rectangle" viewBox="0 0 323 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.15" x="-183.57" y="-193.708" width="481.045" height="418.285" stroke="white" stroke-width="50"/>
      </svg>
      <svg width="687" height="501" class="circle" viewBox="0 0 687 501" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.15" cx="480.387" cy="480.273" r="455.021" stroke="white" stroke-width="50"/>
      </svg>
      <div class="padd-footer">
        <div class="flex-footer">
          <div>
            <svg width="132" height="179" viewBox="0 0 132 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_51_414)">
              <path d="M34.6665 98.9119H0.741211V61.6097H1.39546C29.1657 61.6097 41.4879 62.5755 48.0064 65.7021C54.7672 68.8287 59.8439 77.0135 59.8439 85.1861C59.8439 90.0149 57.663 94.3366 54.5249 96.256C51.3868 98.1755 46.2495 98.9119 34.6665 98.9119Z" fill="#F29A7E"/>
              <path d="M57.1178 154.249C53.7374 157.617 50.8416 158.1 34.6665 158.1H0.741211V120.569H1.39546C39.0646 120.569 40.5186 120.569 48.4911 124.649C52.109 126.608 55.1382 129.491 57.2675 133.002C59.3969 136.513 60.5497 140.526 60.6072 144.628C60.4982 148.479 59.2987 152.089 57.1178 154.249Z" fill="#F29A7E"/>
              <path d="M131.681 130.118C131.681 142.893 126.588 155.146 117.522 164.181C108.456 173.216 96.1597 178.293 83.3371 178.297H51.1566C53.8288 177.684 56.3503 176.542 58.5717 174.941C64.3632 170.377 67.7436 161.662 67.7436 151.847C67.7436 137.361 62.6791 126.822 51.8109 118.879C57.3601 117.189 59.541 115.511 61.9521 112.143C65.8172 107.085 67.7436 100.348 67.7436 92.6466C67.7436 79.8987 63.1637 70.0359 53.2042 61.6098H65.3204V23.8368H60.4739V39.9528H0.680664V0.296633H79.8962C89.4599 0.293557 98.8096 3.11683 106.763 8.40926C114.715 13.7017 120.914 21.2255 124.574 30.0287C128.235 38.832 129.192 48.5191 127.326 57.8646C125.459 67.2101 120.852 75.794 114.088 82.5303C111.977 84.6356 109.673 86.5392 107.206 88.2162C114.641 92.4192 120.824 98.5122 125.123 105.873C129.423 113.235 131.686 121.601 131.681 130.118Z" fill="#F29A7E"/>
              </g>
              <defs>
              <clipPath id="clip0_51_414">
              <rect width="131" height="178" fill="white" transform="translate(0.680664 0.296631)"/>
              </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="title">Musée</p>
            <p class="subtitle">Le musée</p>
            <p class="subtitle">L'hsitorique</p>
            <p class="subtitle">Calendrier des activités</p>
            <p class="subtitle">Publics des activités</p>
            <p class="subtitle">Un musée spécifiques</p>
            <div style="margin-top:31px">
              <p class="title">Suivez-nous</p>
              <div class="flex-social">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6807 8.5469C12.6808 7.6853 12.9775 6.85 13.521 6.18144C14.0645 5.51287 14.8216 5.0518 15.665 4.87576C16.5084 4.69972 17.3867 4.81943 18.1523 5.21477C18.9178 5.61011 19.5239 6.25697 19.8686 7.0466L23.1807 7.04663L20.1561 10.0712C19.9591 13.1134 18.6118 15.9666 16.3876 18.0515C14.1635 20.1363 11.2292 21.2966 8.18068 21.2966C5.18068 21.2966 4.43068 20.1716 4.43068 20.1716C4.43068 20.1716 7.43068 19.0466 8.93068 16.7966C8.93068 16.7966 2.93068 13.7966 4.43068 5.54663C4.43068 5.54663 8.18068 9.29663 12.6794 10.0466L12.6807 8.5469Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6807 16.0466C14.7517 16.0466 16.4307 14.3677 16.4307 12.2966C16.4307 10.2256 14.7517 8.54663 12.6807 8.54663C10.6096 8.54663 8.93066 10.2256 8.93066 12.2966C8.93066 14.3677 10.6096 16.0466 12.6807 16.0466Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                  <path d="M16.8057 3.67163H8.55566C6.07038 3.67163 4.05566 5.68635 4.05566 8.17163V16.4216C4.05566 18.9069 6.07038 20.9216 8.55566 20.9216H16.8057C19.2909 20.9216 21.3057 18.9069 21.3057 16.4216V8.17163C21.3057 5.68635 19.2909 3.67163 16.8057 3.67163Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5557 8.54651C18.177 8.54651 18.6807 8.04283 18.6807 7.42151C18.6807 6.80019 18.177 6.29651 17.5557 6.29651C16.9343 6.29651 16.4307 6.80019 16.4307 7.42151C16.4307 8.04283 16.9343 8.54651 17.5557 8.54651Z" fill="white"/>
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6807 21.2966C17.6512 21.2966 21.6807 17.2672 21.6807 12.2966C21.6807 7.32607 17.6512 3.29663 12.6807 3.29663C7.7101 3.29663 3.68066 7.32607 3.68066 12.2966C3.68066 17.2672 7.7101 21.2966 12.6807 21.2966Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.4307 8.54675H14.9307C14.3339 8.54675 13.7616 8.78381 13.3397 9.20576C12.9177 9.62772 12.6807 10.2 12.6807 10.7968V21.2968" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.68066 13.7968H15.6807" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9307 8.54663L8.93066 21.2966" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.45038 14.9735C5.79794 14.0003 5.38258 12.8878 5.23759 11.7251C5.09259 10.5625 5.222 9.38203 5.61543 8.2784C6.00887 7.17477 6.65539 6.17866 7.50317 5.36993C8.35095 4.56119 9.37642 3.96232 10.4974 3.62132C11.6183 3.28032 12.8035 3.20667 13.9581 3.40628C15.1126 3.60589 16.2043 4.07321 17.1457 4.77078C18.0871 5.46834 18.8519 6.37675 19.379 7.42318C19.906 8.46962 20.1805 9.62497 20.1806 10.7966C20.1806 14.9388 17.1806 17.5466 14.1806 17.5466C11.1806 17.5466 10.2776 15.5716 10.2776 15.5716" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p class="title">Professionels</p>
            <p class="subtitle">Mise à dispo. d’espaces</p>
            <p class="subtitle">Mécénats</p>
            <p class="subtitle">Partenariats</p>
            <p class="subtitle">Presse de communication</p>
            <div class="btn">
              <button class="filled">Billetrie</button>
              <button class="outline">Contact</button>
            </div>
          </div>
          <div>
            <p class="title">Expositions</p>
            <p class="subtitle">En ce moment</p>
            <p class="subtitle">Prochainement</p>
            <p class="subtitle">Passées</p>
          </div>
        </div>
        <div>
          <svg width="1186"  class="btm-footer" height="2" viewBox="0 0 1186 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1185.65 1.17163L0.650359 1.17154" stroke="white"/>
          </svg>
          <div class="info">
            <p class="subtitle">Copyright © 2022 <span>Harmony</span></p>
            <svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.680664 29.2966L0.680665 0.988308" stroke="white"/>
            </svg>
            <p class="subtitle">Informations pratiques</p>
            <svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.680664 29.2966L0.680665 0.988308" stroke="white"/>
            </svg>
            <p class="subtitle">Contacts</p>
            <svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.680664 29.2966L0.680665 0.988308" stroke="white"/>
            </svg>
            <p class="subtitle">Cookies</p>
            <svg width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.680664 29.2966L0.680665 0.988308" stroke="white"/>
            </svg>
            <p class="subtitle">Aide</p>
          </div>
        </div>
      </div>
   </footer>
`;
  footer.insertAdjacentHTML("afterbegin", wrapper);

  return footer;
};
