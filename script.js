var $ = jQuery;

$('#menuToggle input').on('click', function (e) {
    $('.modal').toggleClass('active');
});

$('.modal, #menuToggle').show();

$('.gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumbs'
});

$('.thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery',
    dots: true,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
});
