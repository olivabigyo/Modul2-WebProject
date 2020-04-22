let activeslideNr = 0;
displaySlide(activeslideNr);

document.querySelector('a.prev').addEventListener('click', (e) => { 
    e.preventDefault();
    activeslideNr--;
    displaySlide(activeslideNr);   
    console.log('left');
});
document.querySelector('a.next').addEventListener('click', (e) => {
    e.preventDefault();
    activeslideNr++;
    displaySlide(activeslideNr);   
    console.log('right');
});
document.querySelector('a.autoplay').addEventListener('click', function autodisplay() {
    activeslideNr++;
    displaySlide(activeslideNr);
    setTimeout(autodisplay, 4000); // Change image every 2 seconds
});

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