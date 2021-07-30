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

let link_1 = document.querySelector(`.tab-link-1`);
let link_2 = document.querySelector(`.tab-link-2`);
let link_3 = document.querySelector(`.tab-link-3`);

let tab_1 = document.querySelector(`.tab-item-1`);
let tab_2 = document.querySelector(`.tab-item-2`);
let tab_3 = document.querySelector(`.tab-item-3`);


link_1.addEventListener(`click`, function(e) {
    e.preventDefault();
    tab_1.classList.toggle(`exist`);
    console.log("clicked1");
});

link_2.addEventListener(`click`, function(e) {
    e.preventDefault();
    tab_2.classList.toggle(`exist`);
    console.log("clicked2");
});

link_3.addEventListener(`click`, function(e) {
    e.preventDefault();
    tab_3.classList.toggle(`exist`);
    console.log("clicked3");
});


//up-btn

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.up-arrow').fadeIn();
    } else {
        $('.up-arrow').fadeOut();
    }
})