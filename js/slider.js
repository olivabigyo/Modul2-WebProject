// This is vanilla JS

// 1. Variables

let activeSlideNr = 0;
const prev_btn = document.querySelector('a.prev');
const next_btn = document.querySelector('a.next');
// const autoplay = document.querySelector('a.autoplay');

displaySlide(activeSlideNr);

// 2. Event listeners

prev_btn.addEventListener('click', stepPrev)
next_btn.addEventListener('click', stepNext)
// autoplay.addEventListener('click', autodisplay)

// 3. Functions

function stepPrev(e) { 
    e.preventDefault();
    activeSlideNr--;
    displaySlide(activeSlideNr);   
    console.log('left');
}
function stepNext(e) {
    e.preventDefault();
    activeSlideNr++;
    displaySlide(activeSlideNr);   
    console.log('right');
}
// function autodisplay() {
//     activeSlideNr++;
//     displaySlide(activeSlideNr);
//     setTimeout(autodisplay, 4000); // Change image every 2 seconds
// }

function displaySlide (n) {
    let myslides = document.querySelectorAll('.slide');
    // console.log(myslides);
    for (let i = 0; i < myslides.length; i++) {
        myslides[i].style.display = 'none';
    }
    activeSlideNr = n;
    if (n == myslides.length) {
        activeSlideNr = 0;
    }
    if (n < 0) {
        activeSlideNr = myslides.length -1;
    }
    myslides[activeSlideNr].style.display = 'block';
    console.log(activeSlideNr);
}