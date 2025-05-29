
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});


const phrases = ["<html>;", "style.css;", "console.log('Hi');", "transform: rotate(360deg);", "querySelector('.cool')"];
const typingEl = document.getElementById("typingBg");
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

function type() {
    const current = phrases[currentPhrase];
    typingEl.textContent = isDeleting
        ? current.substring(0, currentChar--)
        : current.substring(0, currentChar++);

    if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

if (typingEl) {
    type();
}

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
      loader.style.transition = 'opacity 0.6s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
          loader.style.display = 'none';
      }, 600);
    }, 2000); 
});


