var $ = jQuery;

$('#menuToggle input').on('click', function (e) {
    $('.modal').toggleClass('active');
});

$('.modal, #menuToggle').show();
