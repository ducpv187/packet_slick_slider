$(document).ready(function() {
  //packet slider
  //demo-1
  $('.main-1 .image-slider').slick(
    {
      slidesToShow: 3, 
      //soluong item hien thi tren scree
      slidesToScroll: 1,
      //click next-prev 1 items
      infinite: true,
      //skick chay vô tận 
      arrows: true,
      //hien thi nut prev-next
      autoplay: true,
      // autoplaySpeed: 2000,
      // tu dong chay 2s/1lan
      speed: 2000,
      // chuyen dong muot ma hon
      draggable: true,
      // bat buoc phai bam prev-next, ko cho touch keo item
      prevArrow:
      "<button type='button' class='slick-prev'></button>",
      nextArrow:
      "<button type='button' class='slick-next'></button>",
      // custom arrow next-prev
      dots: true,
      // cham 
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600, //max-width
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    }
  );

  //demo-2
  $('.main-2 .slider-for').slick({
    centerMode: true,
    // infinite: true,
    // centerPadding: '0px',
    // speed: 500,
    // variableWidth: true,
    // autoplaySpeed: 2500,
    // autoplay: true,
    // asNavFor: '.slider-nav'
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav'
  }); 
  $('.main-2 .slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    // centerMode: true,
    focusOnSelect: true
  });
});