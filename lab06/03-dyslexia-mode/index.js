/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const isPressed = window.localStorage.getItem("dyslexia") === "true";
  if (isPressed) {
    document.querySelector('body').className = "dyslexia-mode";
  }
}

const changeToDyslexia = () => {
  if (document.querySelector('body').className == 'dyslexia-mode') {
    document.querySelector('body').className = '';
    window.localStorage.setItem('dyslexia', "false");
  } else {
    document.querySelector('body').className = 'dyslexia-mode';
    window.localStorage.setItem('dyslexia', "true");
  }
}

document.querySelector('#dyslexia-toggle').addEventListener('click', changeToDyslexia);

initPage()