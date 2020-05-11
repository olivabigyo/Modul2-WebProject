// This is jQuery
$(document).ready(function() {
    // Let's code!

            // 00 Ready: Onload function that waits for the site to be loaded
            // 01 Click event
            //      1 clicked on opened tab (tested with if)
            //          1.1 Remove the active class from the clicked head
            //          1.2 Collapse the panel for the clicked head
            //          1.3 Change mark to + on the head
            //      2 clicked on closed tab (else)
            //          2.1 Add the active class to the clicked head
            //          2.2 Open the panel for the clicked head 
            //          2.3 Change + mark to - for the clicked head

            //         I skip these... I don't want to close the opened panel, 
            //         because it changes the scrollposition 
            //          n/n Remove from all head the active class
            //          n/n Collapse all panels
            //          n/n Change marks to + on all heads
    
    // click event on a head
    $('.headline').on('click', function(){   
            // test if the clicked head active is (it was opened and we close it)
            if($(this).hasClass('active')) {
                // 1.1 remove the actie class
                $(this).removeClass('active');
                // 1.2 collapse the panel for the clicked head
                $(this).next('.panel').slideUp(500);
                // 1.3 change mark to +
                $(this).find('span').text('+');
            }
            // or not (it was closed and we open it)
            else {
                // 2.1 add the active class to the clicked head
                $(this).addClass('active');
                // 2.2 open the panel for the clicked head
                $(this).next('.panel').slideDown(500);
                // 2.3 Change + mark to - for the clicked head
                $(this).find('span').html('&ndash;');
            }
    });
})
