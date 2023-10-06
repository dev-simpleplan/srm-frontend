// Featured Slider

var swiper = new Swiper(".featuredSlider", {
  pagination: {
    el: ".swiper-pagination",
  },
});


//Spiritiual Counter
        
    //Number counter
    var section = document.querySelector('.number_sec');
    var hasEntered = false;

    window.addEventListener('scroll', (e) => {
        var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

        if (shouldAnimate && !hasEntered) {
        hasEntered = true;

        $('.value').each(function () {
            $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
                }
             });
          });
        }   
    });
        
// History Slider 
var swiper = new Swiper(".history-thumbnail", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
var swiper2 = new Swiper(".history-main-slide", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
 
});