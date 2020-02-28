let controller = new ScrollMagic.Controller()

let circleBigAnim = anime({
  targets: '.circle_big',
  background: "rgba(8, 37, 103)",
  duration: 2000,
  delay: 700,
  direction: "alternate",
  loop: true
})
let rectAnim = anime({
  targets: ".rect",
  background: "rgba(255, 201, 56)",
  duration: 2000,
  delay: 700,
  direction: "alternate",
  loop: true
})
let circleSmallAnim = anime({
 targets: '.circle_small',
  translateX: {
    value: "*=2",
    duration: 500
  },
  width: {
    value: "-5px",
    duration: 1000,
    easing: "easeInOutQuad"
  },
  rotate: {
    value: "+=2turn",
    duration: 1000,
    easing: "easeInOutSine"
  },
  direction: "alternate",
 loop: true
})

let whiteLineAnim = anime({
 targets: ".white_line",
 width: "39px",
 easing: "easeInOutQuad",
 direction: "alternate",
 loop: true
})

let triOrdAnim = anime({
  targets: ".tri_ord",
  scale: {
    value: .1,
    easing: "easeInOutQuad",
    duration: 900
  },
  rotate: {
    value: 360,
    duration: 1600,
    easing: "easeInOutSine"
  },
  direction: "alternate",
  loop: true
})

let triCondAnim = anime({
  targets: ".tri_cond",
  rotate: [65, 65],
  translateY: 200,
  duration: 1200,
  direction: "alternate",
  loop: true
})
let fatRedAnim = anime({
  targets: ".fat_red",
  rotate: [90, -90],
  duration: 1600,
  direction: "alternate",
  loop: true
})

let blackLineThinAnim = anime({
 targets: ".black_line_thin",
 rotate: [75, 75],
 translateX: [150, -150],
 direction: "alternate",
 easing: "easeInOutSine",
 loop: true
})
let blackLineFatAnim = anime({
  targets: ".black_line_fat",
  rotate: [75, 75],
  translateX: [-150, 150],
  direction: "alternate",
  easing: "easeInOutSine",
  loop: true
})


let train1Anim = anime({
  targets: ".train1",
  translateX: [-800, 100],
  easing: "easeInOutSine",
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: train1Anim,
  triggerHook: "onEnter",
  duration: 2700
})
let train2Anim = anime({
  targets: ".train2",
  translateX: [800, -100],
  easing: "easeInOutSine",
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: train2Anim,
  triggerHook: "onEnter",
  duration: 2700
})
let circ1Anim = anime({
  targets: ".train1 .circ1",
  translateY: 300,
  translateX: 300,
  scale: {
    value: .3,
    easing: "easeInOutQuad"
  },

  rotate: {
    value: 360,
    duration: 1600,
    easing: "easeInOutSine"
  },
  easing: "easeInOutQuad",
  delay: 700,
  autoplay: false
})
// let section3 = document.querySelector("#section-3")
new ScrollMagic.Scene({
  triggerElement: circ1Anim,
  triggerHook: "onEnter",
  duration: 4000
})
let circ8Anim = anime({
  targets: ".train2 .circ8",
  translateX: -350,
  translateY: 450,
  background: "rgba(255, 201, 56)",
  easing: "easeInOutQuad",
  scale: {
    value: .5,
    easing: "easeInOutQuad"
  },
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ8Anim,
  triggerHook: "onEnter",
  duration: 4000
})
let circ5Anim = anime({
  targets: ".train2 .circ5",
  translateY: 650,
  background: "rgba(8, 37, 103)",
  rotate: "+=6turn",
  easing: "easeInOutQuad",
  borderRadius: function() { return ["30%", anime.random(24, 12) + "%"]},
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ5Anim,
  triggerHook: "onEnter",
  duration: 4000
})

let circ3Anim = anime({
  targets: ".train1 .svgAnim .circ3",
  translateY: 850,
  translateX:  70,
  rotate: "+=7turn",
  easing: "easeOutQuad",
  background: "rgba(46, 53, 79, 1)",
  delay: 700,
  aitoplay: false
})
// let path = anime.path("#svg-path")
// let svgMotion = anime({
//   targets: '.train .svgAnim .circ3',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   easing: 'linear',
//   duration: 400,
//   loop: true
// })
// new ScrollMagic.Scene({
//   triggerElement: svgMotion,
//   triggerHook: "onLeave",
//   duration: 4000
// })

let circ2Anim = anime({
  targets: ".train1 .circ2",
  translateY: 300,
  translateX: 600,
  background: "rgba(89, 137, 135)",
  rotate:{
     value: "+=8turn",
     delay: 700
},
  easing: "easeInOutQuad",
  borderRadius: function() { return ["30%", anime.random(40, 12) + "%"]},
  scale: .3,
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ2Anim,
  triggerHook: "onEnter",
  duration: 4000
})
let circ7Anim = anime({
  targets: ".train2 .circ7",
  translateX: -700,
  translateY: 600,
  easing: "easeInOutSine",
  scale: .7,
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ7Anim,
  triggerHook: "onEnter",
  duration: 4000
})
let circ6Anim = anime({
  targets: ".train2 .circ6",
  rotate: -2,
  translateY: 600,
  easing: "easeInOutSine",
  borderRadius: function() { return ["50%", anime.random(40, 12) + "6%"]},
  scale: .4,
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ6Anim,
  triggerHook: "onEnter",
  duration: 200
})
let circ4Anim = anime({
  targets: ".train1 .circ4",
  translateX: 500,
  translateY: 800,
  easing: "easeInOutSine",
  background: "rgba(0, 0, 0, 0)",
  delay: 700,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circ4Anim,
  triggerHook: "onEnter",
  duration: 200
})




let line1Anim = anime({
  targets: ".stairs .line1",
  translateX: [800, 200],
  easing: "easeInOutQuad",
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line1Anim,
  triggerHook: "onEnter",
  duration: 200
})
let line2Anim = anime({
  targets: ".stairs .line2",
  translateX: [0, 300],
  easing: "easeInOutQuad",
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line2Anim,
  triggerHook: "onEnter",
  duration: 200
})

let line3Anim = anime({
  targets: ".stairs .line3",
  width: [0, 900],
  easing: "easeOutQuad",
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line3Anim,
  triggerHook: "onEnter",
  duration: 200
})

let line4Anim = anime({
  targets: ".stairs .line4",
  width: [0, 250],
  easing: "easeInOutQuad",
  delay: anime.stagger(100),
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line4Anim,
  triggerHook: "onEnter",
  duration: 200
})
let line5Anim = anime({
  targets: ".stairs .line5",
  translateX: [0, 700],
  easing: "easeInOutQuad",
  delay: anime.stagger(100),
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line5Anim,
  triggerHook: "onEnter",
  duration: 200
})
let line6Anim = anime({
  targets: ".line6",
  translateX: [0, -700],
  easing: "easeInOutQuad",
  delay: anime.stagger(100),
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line6Anim,
  triggerHook: "onEnter",
  duration: 200
})

let line7Anim = anime({
  targets: ".line7",
  translateX: [0, -1000],
  easing: "easeInOutQuad",
  delay: anime.stagger(100),
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line7Anim,
  triggerHook: "",
  duration: 200
})

.addTo(controller)
.on("enter", ()=>{
  train1Anim.play()
  train2Anim.play()
  circ1Anim.play()
  circ8Anim.play()
  circ5Anim.play()
  circ2Anim.play()
  circ7Anim.play()
  circ6Anim.play()
  circ4Anim.play()
  circ3Anim.play()
  // svgMotion.play()
  line1Anim.play()
  line2Anim.play()
  line3Anim.play()
  line4Anim.play()
  line5Anim.play()
  line6Anim.play()
  line7Anim.play()
})









// let tween = new TimelineMax()
// .to(".train", 1, {top: "-=200",
// onStart: function()})

// let trainAnim2 = anime({
//   targets: ".train",
//   translateXY: 200,
//   easing: "easeOutSine"
// })
// // let tween = TweenMax.staggerFromTo(".train", 2, {top: 1000, ease: "easeInOutQuad"}, 0.15)
// new ScrollMagic.Scene({
//   triggerElement: trainAnim2,
//   triggerHook: 0.5,
//   duration: 200,
//   offset: -100
// })
// .addTo(controller)
// .on("leave", ()=> {
//   trainAnim2.play()
// })
//
// let trainAnim = anime({
//   targets: ".train",
//   translateX: [0, 300],
//   easing: "easeOutSine"
// })
//
// new ScrollMagic.Scene({
//  triggerElement: trainAnim,
//  triggerHook: 0.1,
//  duration: 200,
//  offset: -100
// })
// .addTo(controller)
// .on("enter", ()=> {
// trainAnim.play()
// })
