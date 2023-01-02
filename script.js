new Swiper('.swiper-container',{
   navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      width: 10,
   },

   grabCursor: true,

   keyboard: {
      enabled: true,
      onlyViewport: true,
      pageUpDown: true,
   },

   // mouseWheel: {
   //    sensitivity: 1,
   //    eventsTarget: '.swiper-slide',
   // },
   autoHeight: true,

   slidesPerView: 3,
   slidesPerGroup: 1,
   watchOverflow: true,
   spaceBetween: 30,
   // loopedSlides: 3,
   // loop: true,

   breakpoints: {
      200: {
         slidesPerView: 1,
      },
      801: {
         slidesPerView: 2,
      },
      1251: {
         slidesPerView: 3,
      },
   }
});