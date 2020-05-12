'use strict';
// This is jQuery
$(document).ready(function () {
    // Let's code!

    // 00 Ready: Onload function that waits for the site to be loaded
    // 01 Click event
    //      1 clicked on opened tab (tested with if)
    //          1.1 Remove the active class from the clicked head
    //          1.2 Collapse the panel for the clicked head
    //      2 clicked on closed tab (else)
    //          2.1 Remove from all head the active class
    //          2.2 Add the active class to the clicked head
    //          2.3 Collapse all panels
    //          2.4 Open the panel for the clicked head
    // 02 Functions

    // click event on a head
    $('.headline').on('click', function () {
        // only @mediaQuery (max-width:960px)
        // console.log(window.innerWidth);
        if (window.innerWidth < 960) {
            // test if the clicked head is active (it was opened)
            if ($(this).hasClass('active')) {
                // we close it
                // 1.1 remove the active class
                $(this).removeClass('active');
                // 1.2. collapse the panel for the clicked head
                $(this).next().slideUp(500);
            }
            // or not (it was closed)
            else {
                // we open it
                // 2.1 remove the active class from all heads
                $('.headline').removeClass('active');
                // 2.2. add the active class to the clicked head
                $(this).addClass('active');
                // 2.3. collapse all panels
                $('.panel').slideUp(500);
                // 2.4. open the panel for the clicked head
                $(this).next().slideDown(500);
            }
        }
    });
    // We have accordion on the page only under 960px
    // above that we just diplay the panels
    $(window).resize(function () {
        if (window.innerWidth > 960) {
            $('.panel').css('display', 'block');
        }
        else {
            $('.panel').css('display', 'none');
        }
    });

});
