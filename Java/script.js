$(document).ready(function() {
    $('.reviews_block').slick({
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        /*adaptiveWidth: true,*/
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }]
    });
});
$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger').toggleClass('active');
        $('.menu_option').toggleClass('menu_option_active');
        $('.menu_option_button').toggleClass('menu_option_button_active');
        $('.header').toggleClass('header_active');
        $('#about_block').toggleClass('about_block_active');
        $('body').toggleClass('lock'); //заблокировал скроллинг когда открыт бургер//

        $('.menu_option_active a').on("click", function() {
            $('.menu_option_active').removeClass('menu_option_active');
            $('.active').removeClass('active');
            $('.menu_option_button_active').removeClass('menu_option_button_active');
            $('.about_block_active').removeClass('about_block_active');
            $('.lock').removeClass('lock');
            $('.header_active').removeClass('header_active');
        });
    });
});