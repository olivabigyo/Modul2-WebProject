'use strict';
// This is vanilla JS
// Automatic slider for the testimonial texts on the Index Page
// and for the first slideshow on the Gallery Page

// 1. Variables

let activeSlideNr = 0;
const prev_btn = document.querySelector('.prev');
const next_btn = document.querySelector('.next');
// const autoplay = document.querySelector('a.autoplay');

displaySlide(activeSlideNr);
autodisplay();

// 2. Event listeners

prev_btn.addEventListener('click', stepPrev);
next_btn.addEventListener('click', stepNext);
// autoplay.addEventListener('click', autodisplay)

// 3. Functions

function stepPrev(e) {
    e.preventDefault();
    activeSlideNr--;
    displaySlide(activeSlideNr);
    // console.log('left');
}
function stepNext(e) {
    e.preventDefault();
    activeSlideNr++;
    displaySlide(activeSlideNr);
    // console.log('right');
}
function autodisplay() {
    activeSlideNr++;
    displaySlide(activeSlideNr);
    setTimeout(autodisplay, 8000); // Change image every 4 seconds
}

function displaySlide(n) {
    let myslides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    // console.log(myslides);
    for (let i = 0; i < myslides.length; i++) {
        myslides[i].style.display = 'none';
        dots[i].classList.remove('activedot');
    }
    activeSlideNr = n;
    if (n == myslides.length) {
        activeSlideNr = 0;
    }
    if (n < 0) {
        activeSlideNr = myslides.length - 1;
    }
    myslides[activeSlideNr].style.display = 'block';
    dots[activeSlideNr].classList.add('activedot');
    // console.log(activeSlideNr);
}
