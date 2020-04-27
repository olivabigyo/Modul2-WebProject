// This is jQuery
$(document).ready(function() {
    
    // 1. Variables
    
    const tabheads = $('main .learnmore a');
    const tabcontents = $('main .tab');
    
    console.log(tabheads, tabcontents);
    // 2. Preparing

    tabcontents.hide();  
    tabheads.each(function(i) {
            $(this).attr('data-tab', 'set'+i);
    });    
    tabcontents.each(function(i) {
            $(this).attr('data-tab', 'set'+i);
    });
    
    // 3. Event
        
    tabheads.on('click', showTab);
    
    // 4. Function
    
    function showTab(event) {
        event.preventDefault();
        let clickedData = $(this).data('tab');
        tabheads.removeClass('active');
        $(this).addClass('active');
        tabcontents.hide();
        tabcontents.filter('[data-tab='+ clickedData +']').show();
      }
})