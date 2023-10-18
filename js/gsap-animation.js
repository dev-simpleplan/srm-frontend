
// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".parallax-banner",
//       markers: false,
//       start: "10% 19%",
//       end: "180% bottom",
//       pin: true,
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         if (progress === 0) {} else if (progress <= 0.50) {
//           gsap.set('.parallax-slide-image', {position: 'fixed'});
//         } else if (progress <= 1) {} else {};
//       }
//     }
//   })
//   tl
//   .to(".parallax-slide-content", {
//     transform: 'translate3d(0,-100vh,0)'
//   }, 0)
//   .to(".parallax-slides-wrap .parallax-slide:nth-child(2) .parallax-slide-image", {
//     height: '100vh'
//   }, 0)
//   .to(".parallax-slide-content", {
//     transform: 'translate3d(0,-200vh,0)'
//   }, 0.5)
//   .to(".parallax-slides-wrap .parallax-slide:nth-child(3) .parallax-slide-image", {
//     height: '100vh'
//   }, 0.5)
