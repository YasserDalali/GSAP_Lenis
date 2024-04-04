let tl = gsap.timeline()
tl.to('.animated-element', {x:800})


/* ----------------------------------------- */
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)