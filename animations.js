
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
/* ========================== */

function getImageFileName() {
  var imageItem = document.getElementById("imageItem");
  var src = imageItem.src;
  var fileName = src.substring(src.lastIndexOf("/") + 1);
  console.log(fileName)
  return fileName;
}
/*!=========== ======================================= */

function switchItem(link) {
    var imageItem = document.getElementById("imageItem");

    if ('images/'+getImageFileName() != link) {
      gsap.to(imageItem, { opacity: 0, duration: 0.75, x: 900 });
  
  
       gsap.to(imageItem, {
        opacity: 1,
        duration: 0.75,
        x: 0,
        onStart: function () {
          imageItem.src = link;
        },
        delay: 0.25,
      });
    }
  }
  
  /*!=========== ======================================= */
  
/* ------------------------------------------- */
window.addEventListener("load", function () {
  // GSAP Animation
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".animated-title", {

    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".animated-title",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".subtitle", {
    opacity: 0,
    y: -20,
    duration: 1,
    scrollTrigger: {
      trigger: ".animated-title",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".left-col", {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".left-col",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".right-col", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".right-col",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
  });
});




gsap.from(".circle", {
  opacity: 1,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".circle",
    start: "top top", // when the top of the circle reaches the top of the viewport
    end: "bottom bottom", // when the bottom of the circle reaches the bottom of the viewport
    pin: true,
    onUpdate: (self) => {
      const circle = document.querySelector(".circle");
      circle.style.top = `${self.scrollY}px`;
    },
  },
});


gsap.from(".plant-overlay", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".plant-overlay",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
});

let distance = document.querySelector('.articles').getBoundingClientRect().top - document.querySelector('#parfum3d').getBoundingClientRect().bottom;
gsap.registerPlugin(ScrollTrigger);
gsap.to('#parfum3d', {
  y: distance,
  duration: 1,5, // Duration of the animation in seconds
  ease: 'power1.out', // Ease out effect
  scale: .7, // Scale the element to 1.7 times its original size
  scrollTrigger: {
    trigger: '.newbrands',
    start: 'center', // Start the animation when the top of the trigger element reaches the center of the viewport
    end: '+=1000', // End the animation 200 pixels below the start position of the trigger element
    toggleActions: 'play reverse',
  }
});
