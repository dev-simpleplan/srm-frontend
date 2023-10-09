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
  slidesPerView: 8,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".history-main-slide", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});


// Initiative SLider

var swiper = new Swiper(".initiative-thumb-slider", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".initiative-slider", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1.8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// header Top
if ($(window).width() > 991)
{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        //$('#main-header').addClass('fixed-header');
        $('.main-header').css({ "margin-top": "0px" });
        
      } else {
        $('.main-header').css({ "margin-top": "-90px" });
      }
      prevScrollpos = currentScrollPos;
    }
} 

if (
navigator.userAgent.indexOf('Safari') != -1 && 
navigator.userAgent.indexOf('Chrome') == -1 && 
navigator.userAgent.indexOf('CriOS/') == -1
)  { 
if ($(window).width() > 991)
    {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos+2 > currentScrollPos || prevScrollpos === currentScrollPos) {
            $('.main-header').css({ "margin-top": "0px" });
          } else {
            $('.main-header').css({ "margin-top": "-90px" });
          }
          prevScrollpos = currentScrollPos;
        }
    } 
}

// header scroll fixed
 // Dorna header black
 $(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
     $('.main-header').addClass('header-active');
  } else {
     $('.main-header').removeClass('header-active');
  }
});


// Banner Animation JS
   setTimeout(function() {
    $('.banner-img-wrapper').addClass('active');
   }, 2000);
   setTimeout(function() {
    $('.banner-content-wrapper').addClass('active');
   }, 2300);
  
    