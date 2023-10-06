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
        
