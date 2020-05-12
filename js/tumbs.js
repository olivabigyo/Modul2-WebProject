'use strict';
// This is vanillaJS

// 1 Declare variables
// 2 Preparing
// 3 Event Listeners
// 4 Function

// 1. Variables
// current is the big image 
const current = document.querySelector('#main-img');
// images is all the thumbnail images
const images = document.querySelectorAll('.gallery-section .thumb');
// Opacity is the opacity we want our selected images to have
const opacity = 0.4;

// 2. Preparing
// Fade the first image in the thumbnails
images[0].style.opacity = opacity;

// 3. Event Listeners
images.forEach(img =>
    img.addEventListener('click', imageClick)
)

// 4. Function
function imageClick(e) {
    // Reset the opacity of all thumbnail images
    images.forEach(img => (img.style.opacity = 1))
    // Change current image source and alt to source and alt of clicked thumbnail image
    current.src = e.target.src;
    current.alt = e.target.alt;
    // change the opacity of the clicked thumbnail to fade it
    e.target.style.opacity = opacity;
}
