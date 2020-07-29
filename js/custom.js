$(document).ready(function() {

    $(".header-navbar-md__hamburger").click(function(){
        $(".header-nav-menu-md").fadeToggle();
    });

    var owl = $('#about-slider');
    $('#about-slider').owlCarousel({
        loop:true, //Зацикливаем слайдер
        dots:false,
        //autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        items:1,
        autoplayTimeout:2000, //Время смены слайда
    });

    $('.next').click(function() {
        owl.trigger('next.owl.carousel', [500]);
    });
    $('.prev').click(function() {
        owl.trigger('prev.owl.carousel', [500]);
    });

});