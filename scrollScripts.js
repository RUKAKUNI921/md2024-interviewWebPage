if (window.matchMedia("(max-width: 450px)").matches) {
    gsap.set(["#meG", "#teaG"], {
        autoAlpha: 0,
    });
} else {
    gsap.set(["#meG", "#teaG"], {
        autoAlpha: 0,
    });

    gsap.set(["#meMouseOpen", "#teaMouseOpen"], {
        opacity: 0,
    });

    gsap.timeline({repeat: -1, repeatDelay: 0.9})
        .to("#meMouseOpen", {
            duration: 0.1,
            opacity: 1,
            ease: "power4.out",
        })
        .to("#meMouseOpen", {
            duration: 0.1,
            opacity: 0,
            ease: "power4.out",
        })
        .to("#meMouseOpen", {
            duration: 0.1,
            opacity: 1,
            ease: "power4.out",
        })
        .to("#meMouseOpen", {
            duration: 0.1,
            opacity: 0,
            ease: "power4.out",
        })
        .to("#meHead", {
            transformOrigin: "bottom center",
            keyframes: [{rotate: 8, duration: 0.2}, {rotate: 0, duration: 0.2}],
        })
    ;

    gsap.timeline({repeat: -1, repeatDelay: 0.6})
        .to("#teaMouseOpen", {
            duration: 0.15,
            opacity: 1,
            ease: "power4.out",
        })
        .to("#teaMouseOpen", {
            duration: 0.15,
            opacity: 0,
            ease: "power4.out",
        })
        .to("#teaMouseOpen", {
            duration: 0.15,
            opacity: 1,
            ease: "power4.out",
        })
        .to("#teaMouseOpen", {
            duration: 0.15,
            opacity: 0,
            ease: "power4.out",
        })
        .to("#tea-l-hand", {
            keyframes: [{y: -35, duration: 0.25,}, {y: 0, duration: 0.25,}],
        })
    ;


    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter1Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter1End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter2Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter2End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter3Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter3End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter4Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter4End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter5Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter5End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter6Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter6End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter7Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter7End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
    
    gsap.to(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter8Start",
            start: "top center",
            // toggleActions: "restart none none none",
            scrub: 0.9,
        },
        // duration: 0.25,
        autoAlpha: 1,
    });
    
    gsap.from(["#meG", "#teaG"], {
        scrollTrigger: {
            trigger: "#chapter8End",
            start: "top center",
            end: "top",
            // toggleActions: "restart none none none",
            scrub: true,
        },
        opacity: 1,
    });
}