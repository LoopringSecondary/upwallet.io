 $(function() {
     "use strict";
     ScrollReveal().reveal('.x01', { delay: 250, duration: 1500, scale: 0.9 });
     ScrollReveal().reveal('.x02', { delay: 250, duration: 1500, scale: 0.9  });
     ScrollReveal().reveal('.x03', { delay: 250, duration: 1500, scale: 0.9  });
     ScrollReveal().reveal('.x04', { delay: 250, duration: 1500, scale: 0.9  });
     ScrollReveal().reveal('.x05', { delay: 250, duration: 1500, scale: 0.9  });

     var $loopDiv = $('.loop');
     if ($loopDiv.length) {
         $loopDiv.slick({
             centerMode: true,
             centerPadding: '60px',
             autoplay: true,
             autoplaySpeed: 5000,
             arrows: true,
             dots: true,
             slidesToShow: 3,
             responsive: [{
                 breakpoint: 992,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
             }, {
                 breakpoint: 768,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
             }, {
                 breakpoint: 480,
                 settings: {
                     arrows: false,
                     centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1
                 }
             }]
         });
     }

 });