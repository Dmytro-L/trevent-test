$(document).ready(function() {
    $('.slider').slick({
            slidesToShow:4,
            responsive:[
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow:2,
                    }
                }
            ]
            
        });
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.home__main').toggleClass('none'); 
    });
    
});