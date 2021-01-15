new Swiper('.swiper-top', {
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
new Swiper('.swiper-clients', {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    slidesPerView: 1,
    loop:true,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },

    },
    
})

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.burger,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});