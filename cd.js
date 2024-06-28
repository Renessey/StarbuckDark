var offset = $('#meuMenu').offset().top;
var $meuMenu = $('#meuMenu');

$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        header.addClass('fixar');
    } else {
        header.removeClass('fixar');
    }
});






