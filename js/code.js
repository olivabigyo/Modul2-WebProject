

window.addEventListener('scroll', myfunction);

const menu = document.querySelector('nav #menu-tag li a');
const nav = document.querySelector('nav #nav-tag li a')
const head = document.querySelector('header');
console.log(menu);
const mycontent = document.querySelector('main');
const fade_start = 0;
const fade_end = 700;
let last_opacity = 0;

function myfunction() {
    menu.style.color = 'black';
    const scrollHeight = window.scrollY;
    const opacity = Math.min(1, Math.max(0, 1 - ((fade_end - scrollHeight) / (fade_end - fade_start))));
    if (opacity == last_opacity) return;
    console.log(scrollHeight, opacity);
    mycontent.style.opacity = opacity;
    head.style.opacity = 1 - opacity;
    last_opacity = opacity;
    if (opacity == 1) {
        menu.style.color = 'black';
        menu.parentElement.parentElement.style.borderBottom = '1px solid black';
        nav.style.color = 'black';
        nav.parentElement.parentElement.style.borderBottom = '1px solid black';
        head.style.display = 'none';
    } else {
        menu.style.color = 'white';
        menu.parentElement.parentElement.style.borderBottom = '1px solid white';
        nav.style.color = 'white';
        nav.parentElement.parentElement.style.borderBottom = '1px solid white';
        head.style.display = 'block';
    };
}