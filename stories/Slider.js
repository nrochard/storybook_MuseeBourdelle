import "./footer.css";

export const createSlider = ({ user, onLogout, onLogin, onCreateAccount }) => {
  const slider = document.createElement("slider");
  const wrapper = `
 <div>
    <img src="../../../img/bandw.png"/>
 </div>
`;
  slider.insertAdjacentHTML("afterbegin", wrapper);

  return slider;
};
