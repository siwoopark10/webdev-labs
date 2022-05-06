let currentFontSize = 1.4;
let titleFontSize = 2.0;

const makeBigger = () => {
   currentFontSize += .1;
   titleFontSize += .1;

   document.querySelector('div.content').style.fontSize = currentFontSize + "rem";
   document.querySelector('h1').style.fontSize = titleFontSize + "rem";
};

const makeSmaller = () => {
   currentFontSize -= .1;
   titleFontSize -= .1;

   document.querySelector('div.content').style.fontSize = currentFontSize + "rem";
   document.querySelector('h1').style.fontSize = titleFontSize + "rem";};


document.querySelector('#a11').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

