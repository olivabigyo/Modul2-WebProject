// This is vanilla JS

// 1. Variables

let activeslideNr = 0;
const prev_btn = document.querySelector('a.prev');
const next_btn = document.querySelector('a.next');
// const autoplay = document.querySelector('a.autoplay');

displaySlide(activeslideNr);

// 2. Event listeners

prev_btn.addEventListener('click', stepPrev)
next_btn.addEventListener('click', stepNext)
// autoplay.addEventListener('click', autodisplay)

// 3. Functions

function stepPrev(e) { 
    e.preventDefault();
    activeslideNr--;
    displaySlide(activeslideNr);   
    console.log('left');
}
function stepNext(e) {
    e.preventDefault();
    activeslideNr++;
    displaySlide(activeslideNr);   
    console.log('right');
}
// function autodisplay() {
//     activeslideNr++;
//     displaySlide(activeslideNr);
//     setTimeout(autodisplay, 4000); // Change image every 2 seconds
// }

function displaySlide (n) {
    let myslides = document.querySelectorAll('.slide');
    // console.log(myslides);
    for (let i = 0; i < myslides.length; i++) {
        myslides[i].style.display = 'none';
    }
    activeslideNr = n;
    if (n == myslides.length) {
        activeslideNr = 0;
    }
    if (n < 0) {
        activeslideNr = myslides.length -1;
    }
    myslides[activeslideNr].style.display = 'block';
    console.log(activeslideNr);
}