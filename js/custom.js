// Featured Slider

var swiper = new Swiper(".featuredSlider", {
  effect: 'fade',
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
  breakpoints: {
    0: {
      slidesPerView: 2,

    },
    500: {
      slidesPerView: 4,

    },
    700: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 6,
    }
  }
});
var swiper2 = new Swiper(".history-main-slide", {
  loop: true,
  spaceBetween: 10,
  effect: 'fade',
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
  effect: 'fade',
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
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    500: {
      slidesPerView: 1.2,

    },
    700: {
      slidesPerView: 1.4,
    },
    991:{
      slidesPerView: 1.8,
    }
  }
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
  if ($(this).scrollTop() > 10) {
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
  
    

// header responsove 

/* Set the width of the side navigation to 250px */
function openNav() {
  var sidenav = document.querySelector(".nav-left");
  var navbarToggler = document.querySelector(".navbar_toggler");
  jQuery("body").addClass('stay');
  sidenav && sidenav.classList.toggle('active');
  navbarToggler && navbarToggler.classList.toggle('open');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    jQuery(".nav-left").removeClass('active');
    jQuery("body").removeClass('stay');
    // jQuery("wrapper").removeClass('active');
    jQuery(".navbar_toggler").removeClass('open');
}

$(document).ready(function(){
 
    
  $('.has_subs a > span').click(function() {
    if($(this).parent("a").parent(".has_subs").hasClass("active")) {

      $(this).parent("a").parent(".has_subs").removeClass("active").find(".nav-dropdown").slideUp();
      
    } else {
      $(" .nav-dropdown").slideUp();
      $(this).parent("a").parent(".has_subs").removeClass("active");
      $(this).parent("a").parent(".has_subs").addClass("active").find(".nav-dropdown").slideDown();
     
    }
    return false;
  });
  
});


// Footer accordian 
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));




