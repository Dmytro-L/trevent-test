$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.home__block').toggleClass('active');
        $('body').toggleClass('lock');
        $('.home__main').toggleClass('none'); 
    });
});





