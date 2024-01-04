
// sacred store page js
$(document).ready(function() { 
    $(".sbmsl_flex .wisdom-category-box").click(function() {
        $(".sbmsl_flex .wisdom-category-box .sbmslf_icon circle").attr("fill", "#F0E9E1");
        $(this).find(".sbmslf_icon circle").attr("fill", "#cf9e69");
    });
});

document.addEventListener('DOMContentLoaded', function () {
// Get all tabs and dropdowns
var tabs = document.querySelectorAll('.nasmdr_nav .has_subs');

tabs.forEach(function(tab) {
tab.addEventListener('click', function() {
    var dropdown = this.querySelector('.hs_nav_dropdown');
    if (dropdown) {
        var currentDisplay = window.getComputedStyle(dropdown).display;
        dropdown.style.display = (currentDisplay === 'block') ? 'none' : 'block';
                 }
    });
});
});   


// rotate the svg inside the span on click of nav-dropdown list item
document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.hnd1 .nav-dropdown-list li');
    var span = document.querySelector(".has_subs_inner span svg");
+           listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var hsInner = document.querySelector('.nasmdrn1 .has_subs_inner').closest('div');
            span.style.transform = 'rotate(0deg)';
            hsInner.classList.remove("clicked");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.hnd2 .nav-dropdown-list li');
    var svg = document.querySelector(".nasmdrn2 .has_subs_inner span svg");
+           listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            console.log(item);
            console.log(svg);
            var hsInner = document.querySelector('.nasmdrn2 .has_subs_inner').closest('div');
            console.log(hsInner);
            svg.style.transform = 'rotate(0deg)';
            hsInner.classList.remove("clicked");
        });
    });
});
    var swiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        // items:4,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
        0:{
            items:1
        },
        600:{
           items:2
        },
        767:{
          items:2
        },
        900:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });
    $(".leftarrow").click(function (e) {
    $(".owl-carousel").trigger("prev.owl"); 
    });
    $(".rightarrow").click(function (e) {
        $(".owl-carousel").trigger("next.owl"); 
    });


// sacred store page js ends

