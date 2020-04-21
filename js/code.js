

window.addEventListener('scroll', myfunction);

const menu = document.querySelector('nav #menu-tag li a');
const nav = document.querySelector('nav #nav-tag');
const navis = document.querySelectorAll('nav #nav-tag li a');
const head = document.querySelector('header');
// console.log(menu);
const mycontent = document.querySelector('main');
const fade_start = 0;
const fade_end = 700;
let last_opacity = 0;

function myfunction() {
    
    const scrollHeight = window.scrollY;
    const opacity = Math.min(1, Math.max(0, 1 - ((fade_end - scrollHeight) / (fade_end - fade_start))));
    if (opacity == last_opacity) return;
    // menu.style.color = 'black';
    console.log(scrollHeight, opacity);
    mycontent.style.opacity = opacity;
    head.style.opacity = 1 - opacity;
    last_opacity = opacity;
    if (opacity == 1) {
        head.style.display = 'none';
    } else {
        head.style.display = 'block';
    };
    
    if (opacity > 0.6) {
        menu.style.color = 'black';
        menu.parentElement.parentElement.style.borderBottom = '1px solid black';
        for (let navi of navis) {navi.style.color = 'black';}
        nav.style.borderBottom = 'none';   
    } else {
        menu.style.color = 'white';
        menu.parentElement.parentElement.style.borderBottom = '1px solid white';
        for (let navi of navis) {navi.style.color = 'white';}
        nav.style.borderBottom = '1px solid white';
    };
}

document.querySelector('#menu-tag').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('show');
})
