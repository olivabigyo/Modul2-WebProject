'use strict';
// The first try was a plain accordion, 
// but with the different text sizes 
// there was weird scrolling, when a bigger post slided Up
// so I keep my clicked element in th screen in fix position 
// while the panels collapsing

// This is jQuery
$(document).ready(function () {
    // Let's code!

    // 00 Ready: Onload function that waits for the site to be loaded
    // 01 Click event
    //      1 clicked on opened tab (tested with if)
    //          1.1 Remove the active class from the clicked head
    //          1.2 Collapse the panel for the clicked head
    //          1.3 Change mark to + on the head
    //      2 clicked on closed tab (else)
    //          2.1 Remove from all head the active class
    //          2.2 Collapse all panels
    //              2.2+ keeping the clicked head in position while the other collapsing
    //              2.2++ cancel keeping (which continuous "put it back" is)
    //          2.3 Change marks to + on all heads
    //          2.4 Add the active class to the clicked head
    //          2.5 Open the panel for the clicked head 
    //          2.6 Change + mark to - for the clicked head
    // 03 Functions

    // 1. click event on a head
    $('.headline').on('click', function () {
        // test if the clicked head active is (it was opened and we close it)
        if ($(this).hasClass('active')) {
            // 1.1 remove the actie class
            $(this).removeClass('active');
            // 1.2 collapse the panel for the clicked head
            $(this).next('.panel').slideUp(500);
            // 1.3 change mark to +
            $(this).find('span').html('+');
        }
        // or not (it was closed and we open it)
        else {
            // 2.1 Remove from all head the active class
            $('.headline').removeClass('active');
            // 2.2 Collapse all panels
            $('.panel').slideUp(500);
            // 2.2+ keeping the head in position while collapsing
            keepElementInPosition(this);
            // 2.2++ cancel keeping (continuous putitback)
            setTimeout(cancelKeepElementInPosition, 550);
            // 2.3 Change marks to + on all heads
            $('.headline span').html('+');
            // 2.4 add the active class to the clicked head
            $(this).addClass('active');
            // 2.5 open the panel for the clicked head
            $(this).next('.panel').slideDown(500);
            // 2.6 Change + mark to - for the clicked head
            $(this).find('span').html('&ndash;');
        }
    });


    // 2.Functions

    // Storage Object for KeepElementInPosition function
    const A = {};

    // We need this while slideUp animation happens
    function keepElementInPosition(element) {
        // console.log('keeping');
        A.element = element;
        // let D = document.documentElement.scrollTop; // current scrollstate of the body
        // let E = element.offsetTop; // y-coordinate from body top
        // let F = E - D;
        // F is the screenposition of the element from the screen top, 
        // we want to keep this position 
        // while slideUp/slideDown animation happens
        A.fromScreenTop = element.offsetTop - document.documentElement.scrollTop;
        // console.log(A);
        A.areWeDoneYet = false;
        keepPuttingItBack();
    }

    // We will call it after the slideUp animation
    function cancelKeepElementInPosition() {
        // console.log('cancelled');
        A.areWeDoneYet = true;
    }

    function keepPuttingItBack() {
        // the y-coordinate from body top is changing while SlideUp animated (E')
        // we want to keep F, so we change D
        // let D' = E' - F
        document.documentElement.scrollTop = A.element.offsetTop - A.fromScreenTop;
        // let's make an almost infinite loop :)
        if (!A.areWeDoneYet) {
            // It is like setTimeout(keepPuttingBack, 16); but smoother.... :)
            requestAnimationFrame(keepPuttingItBack);
        }
    }
});
