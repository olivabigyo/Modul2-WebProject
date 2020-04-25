$(document).ready(function() {
    // Let's code!

    
    // click event on a head
    $('.headline').on('click', function(){
        // only @mediaQuery (max-width:960px)
        // console.log(window.innerWidth);
        if (window.innerWidth < 960) {     
            // test if the clicked head active is (it was opened)
            if($(this).hasClass('active')) {
                // we close it
                // 1. remove the actie class
                $(this).removeClass('active');
                // 2. collapse the panel for the clicked head
                $(this).siblings('.panel').slideUp(500);
                // alternative:   $(this).next().slideUp(500);
            }
            // or not (it was closed)
            else {
                // we open it
                // 1. remove from all head the active class 
                $('.headline').removeClass('active');
                // 2. add the active class to the clicked head
                $(this).addClass('active');
                // 3. collapse all panels
                $('.panel').slideUp(500);
                // 4. open the panel for the clicked head
                $(this).siblings('.panel').slideDown(500);
                // alternative:   $(this).next().slideDown(500);
            }
        }
    });

})
