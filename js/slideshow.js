'use strict';
// This is jQuery
// Second Slideshow on the Gallery Page

$(document).ready(function () {
    // Let's code!

    // Prepare the slides
    // The slides-band is shifted by one in the container
    $('.slides').css({
        marginLeft: -350  // now we see the second img in the container
    });
    // take the last slide and prepend it to the row of slides
    // we see the first img in the container again
    // and when we move one to the left or right we can see an img
    $('.slides').children('img').last().prependTo('.slides');

    $(document).on('click', '.nextBtn, .prevBtn', function () {
        // console.log($(this).hasClass('nextBtn'));
        // Next button clicked
        if ($(this).hasClass('nextBtn')) {  // this <= '.nextBtn' button
            if (!$('.slides').is(':animated')) {  // no animation is taking place at the moment
                $('.slides').animate(    // syntax: .animate({css properties as object}, time in ms, callbackfunction);
                    { right: '+350px' }, 1000, function () {
                        // The callback function takes the first img and appends it to the slides as the last child
                        $(this).children('img').first().appendTo('.slides');      // this <= '.slides' div because we are in the callback function
                        // then reset the css value of the slide which we changed
                        // because the first child was removed and appended, the width of the slides didn't change
                        $(this).css('right', '');         // this <= '.slides' because we are in the animation's callback function
                    }
                );
            }
        }
        // Prev button clicked
        else {
            if (!$('.slides').is(':animated')) {  // no animation is taking place at the moment
                $('.slides').animate(  // syntax: .animate({css properties as object}, time in ms, callbackfunction);
                    { right: '-350px' }, 1000, function () {
                        // The callback function takes the last img and prepends it to the slides as first child
                        $(this).children('img').last().prependTo('.slides');
                        // then reset the css value of the slide which we changed
                        // because the last child was removed and prepended, the width of the slides didn't change
                        $(this).css('right', '');   // this <= '.slides' because we are in the animation's callback function
                    }
                );
            }
        }
    });

    // Autoplay
    let autoplay;               // value of the autoplay setInterval
    $(document).on('change', '#autoplay', function () {
        // console.log($(this).is(':checked'));
        if ($(this).is(':checked')) {
            autoplay = setInterval(function () {
                $('.nextBtn').click();
            }, 2000);
        }
        else {
            clearInterval(autoplay);
        }
    });

});
