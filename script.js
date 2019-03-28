var $ = jQuery;

$('.menu-icons img').on('click', function (e) {
    $('.menu-icons img, nav').toggleClass('active');
});