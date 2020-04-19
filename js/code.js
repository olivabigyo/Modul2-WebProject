

window.addEventListener('scroll', myfunction);

const menu = document.querySelector('nav #menu-tag li a');
console.log(menu);
const mypicture = document.querySelector('.hero-img');
const fade_start = 0;
const fade_end = 700;
let last_opacity = 1;

function myfunction() {
    menu.style.color = 'black';
    const scrollHeight = window.scrollY;
    const opacity = Math.min(1, Math.max(0, (fade_end - scrollHeight) / (fade_end - fade_start)));
    if (opacity == last_opacity) return;
    console.log(scrollHeight, opacity);
    mypicture.style.opacity = opacity;
    last_opacity = opacity;
    if (opacity == 0) {menu.style.color = 'black'} else {menu.style.color = 'white'};
}