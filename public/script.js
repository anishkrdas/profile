/* eslint-disable no-undef */
//scroll to top starts
src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js">

$(window).scroll(function() {
    if ($(this).scrollTop() >= 80) {       
        $('#return-to-top').fadeIn(1300);  
    } else {
        $('#return-to-top').fadeOut(900);  
    }
});
$('#return-to-top').click(function() {   
    $('body,html').animate({
        scrollTop : 0  
    }, 500);
});

//scroll to top ends


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});