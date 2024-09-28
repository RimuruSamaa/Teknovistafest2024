const swiper = new Swiper('.card-wrapper-category', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  

    
    //Responsive breakpoints
    breakpoints: {
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  });   
  