

window.addEventListener('scroll', myfunction);

const mypicture = document.querySelector('.hero-img');
const fade_start = 200;
const fade_end = 400;
let last_opacity = 1;

function myfunction() {
    const scrollHeight = window.scrollY;
    const opacity = Math.min(1, Math.max(0, (fade_end - scrollHeight) / (fade_end - fade_start)));
    if (opacity == last_opacity) return;
    console.log(scrollHeight, opacity);
    mypicture.style.opacity = opacity;
    last_opacity = opacity;
}