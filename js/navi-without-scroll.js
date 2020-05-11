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
const is_nav_hidden = () => nav.classList.contains('hidden');

// Tests
// console.log(menu_a);
// console.log(navis);
// console.log(is_nav_hidden());


// 2. Preparing

    head.style.display = 'none';    
    menu_a.style.color = 'black';
    for (let navi of navis) {navi.style.color = 'black';}
    mininav.style.borderBottom = 'none';
    content.style.opacity = 1;

// 3. Event listeners

    menu_btn.addEventListener('click', toggleMenu);
    close_btn.addEventListener('click', toggleMenu);
    burger_btn.addEventListener('click', toggleMenu);

// 3. Functions

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
