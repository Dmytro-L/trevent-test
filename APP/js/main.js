$(document).ready(function() {
    
    $('.burger').click(function(event) {
        $('.burger,.nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.backgr').toggleClass('yes'); 
    });
    
});