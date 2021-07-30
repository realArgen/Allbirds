$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoplay: true
    });
});

$(document).ready(function() {
    $(".slider2").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
});


$(`.mobile-btn`).on('click', function() {
    $(`.mobile-btn`).toggleClass(`show-mobile-btn`);
    $(`.header__menu`).toggleClass(`show-header__menu`);
    $(`.header__link`).toggleClass(`show-header__link`);
})



//overlay

$('.footer__form-btn, .favorites__btn, .favorites__button, .hero__content-btn, .header__men, .header__women').on('click', function(e) {
    e.preventDefault();
    $('.overlay, .popup, .consultation').fadeIn('slow');
});


// ****************************************************************
$('.popup__close').on('click', function() {
    $('.overlay, .popup, .consultation, .thanks, .buy-form').fadeOut('slow');

});



$('.consultation__form-btn').on('click', function() {
    $('.overlay, .popup, .thanks').fadeIn('slow');
});


new WOW().init();

$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
    });
});

// tabs

let link = document.querySelectorAll(`.tab-link`);
let tab = document.querySelectorAll(`.tab-item`)

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener(`click`, function(e) {
        e.preventDefault();
        tab[i].classList.toggle(`exist`);
    });
}


//up-btn

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.up-arrow').fadeIn();
    } else {
        $('.up-arrow').fadeOut();
    }
})