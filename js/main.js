let circleBigAnim = anime({
  targets: '.circle_big',
  background: "rgba(8, 37, 103)",
  duration: 2000,
  delay: 1000,
  direction: "alternate",
  loop: true
})
let rectAnim = anime({
  targets: ".rect",
  background: "rgba(255, 201, 56)",
  duration: 2000,
  delay: 1000,
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

  // let blackFatAnim = anime({
  //   targets: ".black_fat",
  //   rotate: [100],
  //   duration: 1600,
  //   direction: "alternate",
  //   loop: true
  // })
