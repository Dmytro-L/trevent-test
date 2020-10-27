$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.home__block').toggleClass('active');
        $('body').toggleClass('lock');
        $('.home__main').toggleClass('none'); 
    });
    $('.slider').slick({
        slidesToShow:1,
        dots:true,
        speed:2000
        
    });
    $('.slider1').slick({
        slidesToShow:3,
        speed:500,
        responsive:[
            {
                breakpoint:750,
                settings:{
                    slidesToShow:1
                }
            }
        ]
        
    });
    $('.search__input').focus(function() {
        $('.search__png').addClass('inputt');
    }).blur(function() {
        $('.search__png').removeClass('inputt');
    });ww
});





//$('.slider').slick({
    slidesToShow:4,
    responsive:[
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:2,
            }
        }
    ]
    
});//