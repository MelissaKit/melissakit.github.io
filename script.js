var $ = jQuery;

$('#menuToggle input').on('click', function (e) {
    $('.modal').toggleClass('active');
});

$(document).ready(function () {
    $('.modal, #menuToggle').show();
});

$('.nav-item, .logo a, #menu a').click(function (e) {
    e.preventDefault();
    var target = $(this.hash);
    var offset = -100;
    if(screen.width<=768) offset = -60;
    if(target.hasClass('footer')) offset*=-1;
    $('html, body').animate({
        scrollTop: target.offset().top + offset
    }, 1000);
});

$('.order').click(function () {
    var target = $('#contacts');
    var offset = 110;
    if(screen.width<=768) offset = 60;
    $('html, body').animate({
        scrollTop: target.offset().top + offset
    }, 1000);
});


var sliders = {
    1: {slider : '.gallery.brown', nav: '.brown + .thumbs'},
    2: {slider : '.gallery.red', nav: '.red + .thumbs'},
    3: {slider : '.gallery.blue', nav: '.blue + .thumbs'}
};



$.each(sliders, function() {

    $(this.slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: false,
        asNavFor: this.nav,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                }
            }
        ]
    });

    $(this.nav).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: this.slider,
        dots: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false
    });
});

