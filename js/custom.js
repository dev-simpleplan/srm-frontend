// Featured Slider

var swiper = new Swiper(".featuredSlider", {
 effect:"fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3000,
  },
});


//Spiritiual Counter
        
    //Number counter
    // var section = document.querySelector('.spiritual-coounter-wrap');
    // var hasEntered = false;

    // window.addEventListener('scroll', (e) => {
    //     var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

    //     if (shouldAnimate && !hasEntered) {
    //     hasEntered = true;

    //     $('.value').each(function () {
    //         $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //         }, {
    //         duration: 2000,
    //         easing: 'swing',
    //         step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //          });
    //       });
    //     }   
    // });

        
// History Slider 
var swiper = new Swiper(".history-thumbnail", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: "auto",
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
    },
    1200: {
      slidesPerView: "auto",
    }
  }
});
var swiper2 = new Swiper(".history-main-slide", {
  loop: true,
  spaceBetween: 10,
  speed: 1000,
  slidesPerView: 1,
  parallax: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
  speed: 1000,
  parallax: true,
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
// if ($(window).width() > 991)
// {
//     var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//       var currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//         //$('#main-header').addClass('fixed-header');
//         $('.main-header').css({ "margin-top": "0px" });
        
//       } else {
//         $('.main-header').css({ "margin-top": "-90px" });
//       }
//       prevScrollpos = currentScrollPos;
//     }
// } 

// if (
// navigator.userAgent.indexOf('Safari') != -1 && 
// navigator.userAgent.indexOf('Chrome') == -1 && 
// navigator.userAgent.indexOf('CriOS/') == -1
// )  { 
// if ($(window).width() > 991)
//     {
//         var prevScrollpos = window.pageYOffset;
//         window.onscroll = function() {
//           var currentScrollPos = window.pageYOffset;
//           if (prevScrollpos+2 > currentScrollPos || prevScrollpos === currentScrollPos) {
//             $('.main-header').css({ "margin-top": "0px" });
//           } else {
//             $('.main-header').css({ "margin-top": "-90px" });
//           }
//           prevScrollpos = currentScrollPos;
//         }
//     } 
// }

// header scroll fixed
 $(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
     $('.main-header').addClass('header-active');
  } else {
     $('.main-header').removeClass('header-active');
  }
});

// Scroll Top
// header scroll fixed
// $(window).scroll(function(){
//   if ($(this).scrollTop() > 600) {
//      $('.scroll-btn-box').addClass('active');
//   } else {
//      $('.scroll-btn-box').removeClass('active');
//   }
// });


// Banner Animation JS
   setTimeout(function() {
    $('.banner-img-wrapper').addClass('active');
   }, 3000);
   setTimeout(function() {
    $('.banner-content-wrapper').addClass('active');
   }, 3400);
  
    

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

$('.mobile-navigation .footer-label').click(function(e) {
  e.preventDefault();
  $(this).parent().removeClass('active');
  $(this).parent().siblings().removeClass('active');
  var $this = $(this);

  if ($this.next().hasClass('show')) {
      //  $this.next().removeClass('show');
      // $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('.footer-list').removeClass('show');
      $this.parent().toggleClass('active');
      $this.parent().parent().find('.footer-list').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


//loader

setTimeout(function() {
  $('.loader').addClass('active');
  $('body').removeClass('stay');
}, 2000);




// Scroll button offset
// function checkOffset() {
//   if($('.scroll-btn-box').offset().top + $('.scroll-btn-box').height() 
//                  <= $('#main-footer').offset().top - 0){
//                         $('.scroll-btn-box').addClass('factive');
//                   }else{
//                         $('.scroll-btn-box').removeClass('factive');
//                         $('.scroll-btn-box').removeClass('active');                  
//                   }
      
//   if($(document).scrollTop() + window.innerHeight <= $('#main-footer').offset().top){
//       $('.scroll-btn-box').addClass('factive'); // restore when you scroll up
//   }
//       else{
//           $('.scroll-btn-box').removeClass('factive');
//           $('.scroll-btn-box').removeClass('active');
//       }

// }
// $(document).scroll(function() {
//   checkOffset();
// })


$(document).ready(function () {
  $('.scroll-btn-box a').on('click', function (e) {
      // e.preventDefault();

      var target = this.hash,
          $target = $(target);

     $('html, body').stop().animate({
      'scrollTop': $target.offset().top-90
  }, 400, 'swing', function () {
  });

      console.log(window.location);

      return false;
  });
});
  


// Newest Talks Slider
var swiper = new Swiper(".newest-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    767: {
      slidesPerView: 2,

    },
    800: {
      slidesPerView: 3,
    },
    991:{
      slidesPerView: 3,
    }
  }
});

// Featured Slider
var swiper = new Swiper(".featured-slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    500: {
      slidesPerView: 2,

    },
    767: {
      slidesPerView: 2,

    },
    800: {
      slidesPerView: 3,
    },
    991:{
      slidesPerView: 4,
    }
  }
});