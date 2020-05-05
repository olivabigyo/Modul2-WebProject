$(document).ready(function() {
    // Let's code! 
       
        // Prepare the slides
        // the slides-band positioned in the container one off
        $('.slides').css({
            marginLeft: -350  // now we see the second img in the container
        });
        // take the last slide and prepend it to the row of slides
        // we see the first img in the container again
        // and when we move one to the left or right we can see an img
        $('.slides').children('img').last().prependTo('.slides');
    
        $(document).on('click', '.nextA, .prevA', function(e) {
            // console.log($(this).hasClass('next'));
            // Next button clicked
            if($(this).hasClass('nextA')) {  // this <= '.next' button
                if(!$('.slides').is(':animated')) {  // validation if animation takes place at the moment
                    $('.slides').animate(    // syntax: .animate({css properties as object}, time in ms, callbackfunction);
                        { right: '+350px'}, 1000, function() {
                            // The callback function takes the first img and append it to the slides as last child
                            $(this).children('img').first().appendTo('.slides');      // this <= '.slides' div because we are in the callback function
                            // then reset the css value of the slide which we changed 
                            // because the first child was removed and appended, the width of the slides doesnt changed
                             $(this).css('right', '');         // this <= '.slides' because we are in the animation's callback function
                            }
                    );
                }
            }
            // Prev button clicked
            else {
                e.preventDefault();
                if(!$('.slides').is(':animated')) {  // validation if animation takes place at the moment
                    $('.slides').animate(  // syntax: .animate({css properties as object}, time in ms, callbackfunction);
                        { right: '-350px'}, 1000, function() {
                            // The callback function takes the last img and prepend it to the slides as first child
                            $(this).children('img').last().prependTo('.slides');
                            // then reset the css value of the slide which we changed 
                            // because the last child was removed and prepended, the width of the slides doesnt changed
                             $(this).css('right', '');   // this <= '.slides' because we are in the animation's callback function
                        }
                    );  
                }
            }
        });
    
        // Autoplay 
        $(document).on('change', '#autoplay', function() {
            // console.log($(this).is(':checked'));
            if($(this).is(':checked')) {
                autoplay = setInterval(function() {
                $('.nextA').click();
              }, 1000);
            } 
            else {
                clearInterval(autoplay);
            }
        });
    
    
    });
    