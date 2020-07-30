$(document).ready(function() {

    $(".header-navbar-md__hamburger").click(function(){
        $(".header-nav-menu-md").fadeToggle();
    });

    var owlAbout = $('.about-slider');
    $('.about-slider').owlCarousel({
        loop:true, 
        dots:false,
        smartSpeed:1000,
        items:1,
        autoplayTimeout:2000,
    });
    $('.about-next').click(function() {
        owlAbout.trigger('next.owl.carousel', [500]);
    });
    $('.about-prev').click(function() {
        owlAbout.trigger('prev.owl.carousel', [500]);
    });


    var owlWhat = $('.what-slider');
    $('.what-slider').owlCarousel({
        loop:true, 
        dots:false,
        smartSpeed:1000,
        items:1,
        autoplayTimeout:2000,
    });
    $('.what-next').click(function() {
        owlWhat.trigger('next.owl.carousel', [500]);
    });
    $('.what-prev').click(function() {
        owlWhat.trigger('prev.owl.carousel', [500]);
    });


    var owlClients = $('.clients-slider');
    $('.clients-slider').owlCarousel({
        loop:true, 
        dots:false,
        smartSpeed:1000,
        items:1,
        autoplayTimeout:2000,
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:6
            }
        }
    });
    $('.clients-next').click(function() {
        owlClients.trigger('next.owl.carousel', [500]);
    });
    $('.clients-prev').click(function() {
        owlClients.trigger('prev.owl.carousel', [500]);
    });

});