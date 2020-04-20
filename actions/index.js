
const h1Text = document.querySelector('.header_text-h1');
const spnCursor = document.querySelector('.cursor');
const txt = ["Hire Me", 'Kamil Kawałkiewicz Frontend Developer']

let activeLetter = -10;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        h1Text.textContent += txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return;
        return setTimeout(() => {
            activeLetter = -15;
            h1Text.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100)
}
addLetter();

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);