$(document).ready(function () {
    $('.floder > li > a').click(function (e) { 
        e.preventDefault();
        $(this)
            .toggleClass('active')
            .parent()
            .find('.product-list')
            .slideToggle()
            .parent()
            .siblings()
            .find('a')
            .removeClass('active')
            .parent()
            .find('.product-list')
            .slideUp();
    });

    /*swiper*/
    const swiper = new Swiper('.swiper', {
        //autoplay
        autoplay: {
          delay: 2000,
        },       
      
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      }) 
      $('.top-bnt').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0 }, 3000);
      });
         

});

