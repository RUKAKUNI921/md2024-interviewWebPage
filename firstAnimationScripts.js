gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     markers: true,
// });

let meHi = document.getElementById("meHiAnimation");

let titleAnimation = document.getElementById("titleAnimation");

if (window.matchMedia("(max-width: 450px)").matches) {
    meHi.style.display = "none";
    titleAnimation.style.display = "none";
    
    gsap.to("#subTitleG", {
        scrollTrigger: {
            trigger: "#subTitleG",
            start: "top top",
            end: "bottom top",
            // pin: true,
            pinSpacing: false,
            scrub: 1,
        },
        opacity: 0,
        // ease: "power4.out",
    });
} else {
    gsap.set(["#teaIconAG", "#meAG", "#meHiG"], {
        opacity: 0,
    });

    gsap.to("#subTitleG", {
        scrollTrigger: {
            trigger: "#subTitleG",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: 0.8,
        },
        opacity: 0,
        // ease: "power4.out",
    });
    
    const meHiAnimationTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#meHiAnimation",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true,
        },
    });
    
    gsap.set("#meHiG", {
        scale: 0,
    });
    
    gsap.set(["#me-hi-smile", "#me-hi-hi"], {
        opacity: 0,
    });
    
    gsap.set("#me-hi-hi", {
        scale: 0,
    });
    
    meHiAnimationTl
        .to("#meHiG", {
            // duration: 0.15,
            opacity: 1,
            scale: 1,
            // ease: "power4.out",
        })
        .to("#me-hi-r-hand", {
            duration: 0.25,
            x: 15,
            y: -55,
        })
        // .set("#me-hi-smile", {
        //     opacity: 1,
        // }, "<")
        // .set("#me-hi-normal", {
        //     opacity: 0,
        // }, "<")
        .to("#me-hi-hi", {
            opacity: 1,
            scale: 1,
        }, "-=0.75")
        .to("#me-hi-r-hand", {
            // duration: 0.25,
            x: 0,
            y: 0,
        })
        .to("#me-hi", {
            opacity: 0,
        })
    ;
    
    const titleAnimationTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#titleAnimation",
            start: "top top",
            end: "+=4500",
            pin: true,
            scrub: true,
        }
    });
    
    gsap.set(["#onshiG", "#dialogueA1G", "#dialogueA2G", "#dialogueA3G"], {
        opacity: 0,
    });
    
    titleAnimationTl
        .to("#meAG", {
            duration: 0.1,
            opacity: 1,
        })
        .to("#dialogueA1G", {
            duration: 0.15,
            opacity: 1,
        })
        .to("#teaIconAG", {
            opacity: 1,
            rotateY: 360,
        }, "+=0.25")
        .to("#teaIconAG", {
            x: 250,
        })
        .to("#onshiG", {
            opacity: 1,
        }, "<")
        .to("#me-a-r-hand", {
            keyframes: [{y: -35, duration: 0.35,}, {y: 0, duration: 0.15,}],
        }, "<")
        .to(["#teaIconAG", "#onshiG"], {
            duration: 0.2,
            opacity: 0,
        }, "+=0.4")
        .to("#dialogueA1G", {
            transformOrigin: "top left",
            y: -150,
            scale: 0.75,
        }, "<")
        .to("#dialogueA2G", {
            opacity: 1
        }, "-=0.05")
        .to("#me-a-r-hand", {
            keyframes: [{y: -35, duration: 0.35,}, {y: 0, duration: 0.15,}],
        }, "<")
        .to("#me-a-head", {
            transformOrigin: "bottom center",
            keyframes: [{rotate: 8, duration: 0.2}, {rotate: 0, duration: 0.2}],
        }, "<")
        .to("#dialogueA2G", {
            transformOrigin: "top left",
            y: -150,
            scale: 0.75,
        }, "+=0.4")
        .to("#dialogueA1G", {
            y: -300,
        }, "<")
        .to("#dialogueA3G", {
            opacity: 1,
        }, "-=0.05")
        .to("#me-a-r-hand", {
            keyframes: [{y: -35, duration: 0.35,}, {y: 0, duration: 0.15,}],
        }, "<")
        .to("#me-a-head", {
            transformOrigin: "bottom center",
            keyframes: [{rotate: 8, duration: 0.2}, {rotate: 0, duration: 0.2}],
        }, "<")
    ;
}