 $(function() {
     "use strict";
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