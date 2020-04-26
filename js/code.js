// This is vanilla JS

// 1. Variables

const menu_a = document.querySelector('.mini-nav #menu-tag li:first-child a');
const menu_btn = document.querySelector('.mini-nav #menu-tag li:first-child');
const close_btn = document.querySelector('.mini-nav #menu-tag li:last-child');
const burger_btn = document.querySelector('.mini-nav #burger-tag');
const mininav = document.querySelector('.mini-nav #nav-tag');
const navis = document.querySelectorAll('.mini-nav #nav-tag li a');
const nav = document.querySelector('nav');
const head = document.querySelector('header');
const content = document.querySelector('main');
const fade_start = 0;
const fade_end = 700;
let last_opacity = 0;
const is_nav_hidden = () => nav.classList.contains('hidden');

// Tests
// console.log(menu_a;
// console.log(navis);
// console.log(is_nav_hidden());

// 2. Event listeners

window.addEventListener('scroll', scrolleffekt);
menu_btn.addEventListener('click', toggleMenu);
close_btn.addEventListener('click', toggleMenu);
burger_btn.addEventListener('click', toggleMenu);

// 3. Functions

function scrolleffekt() {
    // for the first 700px scrolling from top calculate an opacity between 0-1, after that, it is 1
    const scrollHeight = window.scrollY;
    const opacity = Math.min(1, Math.max(0, 1 - ((fade_end - scrollHeight) / (fade_end - fade_start))));
    // console.log(scrollHeight, opacity);

    // have to do nothing after the first 700px scrolling from top
    if (opacity == last_opacity) return;
    
    // change the opacity of header image and content at the first 700px scrolling
    content.style.opacity = opacity;
    head.style.opacity = 1 - opacity;
    // record the changes
    last_opacity = opacity;

    // the fixed header image needed only by the first 700px scrolling, when opacity changes between 0-1
    if (opacity == 1) {
        head.style.display = 'none';
    } else {
        head.style.display = 'block';
    };
    // style changes for better visibility
    if (opacity > 0.6) {
        menu_a.style.color = 'black';
        for (let navi of navis) {navi.style.color = 'black';}
        mininav.style.borderBottom = 'none';   
    } else {
        menu_a.style.color = 'white';
        for (let navi of navis) {navi.style.color = 'white';}
        mininav.style.borderBottom = '1px solid white';
    };
}

function toggleMenu(e) {
    e.preventDefault();
    // console.log(is_nav_hidden());
     // show
    if (is_nav_hidden()) { 
        nav.classList.toggle('hidden'); 
    } 
    // wait for the slide-out animation then hide
    else {           
        setTimeout(() => nav.classList.toggle('hidden'), 480);
    }
    // change buttons     
    // maybeToDo: i could have one button and manipulate the text on it
    menu_btn.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
    // in and out animations
    nav.classList.toggle('slide-in');
    nav.classList.toggle('slide-out');
}
