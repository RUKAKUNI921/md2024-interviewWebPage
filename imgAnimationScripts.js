const titleMoveTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#titleMove",
        start: "top center",
    },
});

gsap.set(["#titleArt", "#titleShade", "#title1", "#title2"], {
    opacity: 0,
});

titleMoveTl
    .fromTo("#titleArt", {
        x: 150,
    }, {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "power4.inOut",
    })
    .fromTo("#titleShade", {
        x: 150,
    }, {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: "power4.inOut",
    }, "<0.45")
    .fromTo("#title1", {
        x: -100,
    }, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    }, "-=0.1")
    .fromTo("#title2", {
        x: -100,
    }, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    })
;

const art1MoveTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#art1Move",
        start: "center center",
        // toggleActions: "restart none none none",
        pin: true,
    },
});

gsap.set(["#line1", "#artARUBAITO", "#artKYOMU", "#artGENZAI", "#textARUBAITOJIDAI", "#textKYOMUJIDAI", "#textGENZAI"], {
    opacity: 0,
});

art1MoveTl
    .fromTo("#line1", {
        x:-200,
    }, {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    })
    .fromTo("#textARUBAITOJIDAI", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    }, "-=0.3")
    .fromTo("#artARUBAITO", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power2.out",
    }, "-=0.5")
    .fromTo("#textKYOMUJIDAI", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    }, "-=0.3")
    .fromTo("#artKYOMU", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power2.out",
    }, "-=0.5")
    .fromTo("#textGENZAI", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power4.out",
    }, "-=0.3")
    .fromTo("#artGENZAI", {
        x: -100,
    }, {
        duration: 0.75,
        x: 0,
        opacity: 1,
        ease: "power2.out",
    }, "-=0.5")
;

const art2MoveTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#art2Move",
        start: "center center",
        pin: true,
    },
});

gsap.set(["#cloudL1", "#cloudL2", "#cloudLBig", "#cloudR1", "#cloudR2", "#cloudRBig"], {
    opacity: 0,
});

art2MoveTl
    .to("#teaHeadNodding", {
        transformOrigin: "bottom center",
        keyframes: [{rotate: -8, duration: 0.65},{rotate: 8, duration: 0.65}],
        ease: "power2.out",
    })
    .to("#cloudL1", {
        opacity: 1,
        // ease: "power4.out",
    }, "<")
    .to("#cloudL2", {
        opacity: 1,
        // ease: "power4.out",
    }, "<0.3")
    .to("#cloudLBig", {
        duration: 3,
        opacity: 1,
        // ease: "power4.out",
    }, "<0.3")
    .to("#cloudR1", {
        // duration: 0.5,
        opacity: 1,
    }, "<0.5")
    .to("#cloudR2", {
        opacity: 1,
    }, "<0.3")
    .to("#cloudRBig", {
        duration: 3,
        opacity: 1,
    }, "<0.3")
    
;

const art3MoveTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#art3Move",
        start: "center center",
        pin: true,
    },
});

let staticImage1 = document.querySelector(".static-image1");
let animatedGif1 = document.querySelector(".animation-gif1");

ScrollTrigger.create({
  trigger: "#gif1",
  start: "center center",
  end: "bottom top",
  pin: true,
  onEnter: () => {
    gsap.to(staticImage1, { opacity: 0, duration: 0 });
    animatedGif1.src = `images/art4ForAfterEffectsGIF.gif?${Date.now()}`;
    gsap.to(animatedGif1, { opacity: 1, duration: 0 });
  },
  onLeaveBack: () => {
    gsap.to(staticImage1, { opacity: 1, duration: 0 });
    gsap.to(animatedGif1, { opacity: 0, duration: 0 });
  },
});

let staticImage2 = document.querySelector(".static-image2");
let animatedGif2 = document.querySelector(".animation-gif2");

ScrollTrigger.create({
  trigger: "#gif2",
  start: "center center",
  end: "bottom top",
  pin: true,
  onEnter: () => {
    gsap.to(staticImage2, { opacity: 0, duration: 0 });
    animatedGif2.src = `images/art5ForAE.gif?${Date.now()}`;
    gsap.to(animatedGif2, { opacity: 1, duration: 0 });
  },
  onLeaveBack: () => {
    gsap.to(staticImage2, { opacity: 1, duration: 0 });
    gsap.to(animatedGif2, { opacity: 0, duration: 0 });
  },
});

let staticImage3 = document.querySelector(".static-image3");
let animatedGif3 = document.querySelector(".animation-gif3");

ScrollTrigger.create({
  trigger: "#gif3",
  start: "center center",
  end: "bottom top",
  pin: true,
  onEnter: () => {
    gsap.to(staticImage3, { opacity: 0, duration: 0 });
    animatedGif3.src = `images/art6forAE.gif?${Date.now()}`;
    gsap.to(animatedGif3, { opacity: 1, duration: 0 });
  },
  onLeaveBack: () => {
    gsap.to(staticImage3, { opacity: 1, duration: 0 });
    gsap.to(animatedGif3, { opacity: 0, duration: 0 });
  },
});

const art7MoveTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#art7Move",
        start: "center center",
        pin: true,
    },
});

gsap.set(["#art7Hybrid", "#art7Shudan", "#art7Kobetu", "#art7Arrow"], {
    opacity: 0,
})

art7MoveTl
    .fromTo("#art7Shudan", {
        x: -50,
        y: 50,
    }, {
        duration: 0.4,
        x: 0,
        y: 0,
        opacity: 1,
    })
    .fromTo("#art7Kobetu", {
        x: 50,
        y: -50,
    }, {
        duration: 0.4,
        x: 0,
        y: 0,
        opacity: 1,
    })
    .to("#art7Arrow", {
        duration: 0.2,
        opacity: 1,
    })
    .fromTo("#art7Hybrid", {
        scale: 0,
    }, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
    })
;