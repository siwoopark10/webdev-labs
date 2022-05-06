const themeSwitch = e => {
   theme = e.target.id
   if (theme === "default") {
      document.querySelector('body').className = "";
   } else {
      document.querySelector('body').className = theme;
   }
}

document.querySelector('#default').addEventListener('click', themeSwitch);
document.querySelector('#desert').addEventListener('click', themeSwitch);
document.querySelector('#ocean').addEventListener('click', themeSwitch);
document.querySelector('#high-contrast').addEventListener('click', themeSwitch);