
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
    var dropdowns = document.querySelectorAll('.hs_nav_dropdown');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            var dropdown = this.querySelector('.hs_nav_dropdown');
            if (dropdown) {
                var currentDisplay = window.getComputedStyle(dropdown).display;
                dropdown.style.display = (currentDisplay === 'block') ? 'none' : 'block';
            }

            event.stopPropagation();
        });
    });

    // rotate the svg inside the span on click of nav-dropdown list item
    // First Dropdown
    var listItems1 = document.querySelectorAll('.hnd1 .nav-dropdown-list li');
    var span1 = document.querySelector(".nasmdrn1 .has_subs_inner span svg");

    listItems1.forEach(function (item) {
        item.addEventListener('click', function () {
            var hsInner1 = document.querySelector('.nasmdrn1 .has_subs_inner').closest('div');
            span1.style.transform = 'rotate(0deg)';
            hsInner1.classList.remove("clicked");
        });
    });

    // Second Dropdown
    var listItems2 = document.querySelectorAll('.hnd2 .nav-dropdown-list li');
    var span2 = document.querySelector(".nasmdrn2 .has_subs_inner span svg");

    listItems2.forEach(function (item) {
        item.addEventListener('click', function () {
            var hsInner2 = document.querySelector('.nasmdrn2 .has_subs_inner').closest('div');
            span2.style.transform = 'rotate(0deg)';
            hsInner2.classList.remove("clicked");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        var hsInner1 = document.querySelector('.nasmdrn1 .has_subs_inner');
        var hsInner2 = document.querySelector('.nasmdrn2 .has_subs_inner');
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                dropdown.style.display = 'none';
                hsInner1.classList.remove('clicked');
                hsInner2.classList.remove('clicked');
                span1.style.transform = 'rotate(0deg)';
                span2.style.transform = 'rotate(0deg)';
            }
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

