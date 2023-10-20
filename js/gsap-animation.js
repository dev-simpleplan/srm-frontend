gsap.registerPlugin(ScrollTrigger);
let mm3 = gsap.matchMedia();
mm3.add("(min-width: 1300px)", () => {
ScrollTrigger.defaults({
  markers: false
});
const tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".featured-video-section",
    
    start: "-20% center",
    end: "+=300",
    scrub: 1,
    pin: false
  }
});
tl
.from(".featured-slider-wrap", {
    scale: 0.2,
    ease: "none" // No ease feels better with scrubed values
  })
.to(".featured-slider-wrap", {
  scale: 1,
  ease: "none" // No ease feels better with scrubed values
});
});


// Banner  Content sticky GSAP
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();
mm.add("(min-width: 1300px)", () => {
ScrollTrigger.defaults({
  markers: false
});


const t2 = gsap.timeline({
  scrollTrigger: {
  trigger: ".banner-content-wrapper ",
    
    start: "10% 30%",
    end: "+=300",
    scrub: 1,
    pin: true
  }
});
t2
.from(".banner-content-box", {
    y: "0%",
    ease: "none" // No ease feels better with scrubed values
  })
.to(".banner-content-box", {
  y: "30",
  ease: "none" // No ease feels better with scrubed values
});
});


// Banner Image sticky GSAP

gsap.registerPlugin(ScrollTrigger);
let mm2 = gsap.matchMedia();
mm2.add("(min-width: 1300px)", () => {
ScrollTrigger.defaults({
  markers: false
});
const t3 = gsap.timeline({
  scrollTrigger: {
  trigger: ".banner-img-wrapper",
    
  start: "20% 20%",
  end: "60% 100%",
  scrub: 1,
  pin: true
  }
});
t3
.from(".banner-img ", {
    opacity: 0.9,
    ease: "none" // No ease feels better with scrubed values
  })
.to(".banner-img ", {
  opacity: 0.2,
  ease: "none" // No ease feels better with scrubed values
});
});