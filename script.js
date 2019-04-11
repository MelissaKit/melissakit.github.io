var $ = jQuery;

$('#menuToggle input').on('click', function (e) {
    $('.modal').toggleClass('active');
});

$('.modal, #menuToggle').show();

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
        asNavFor: this.nav,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
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
        focusOnSelect: true
    });
});

