window.addEventListener('load', function() {
    const navbarHeight = $('.navbar').outerHeight();
    $('.intro').outerHeight($(window).height() - navbarHeight);
    $('#Education').outerHeight($(window).height() - navbarHeight);
    $('.nav_filler').each(function(index) {
        $(this).outerHeight(navbarHeight);
    });
})