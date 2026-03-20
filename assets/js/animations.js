// animations.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Fade up animations for elements with .gs-reveal
        const revealElements = document.querySelectorAll('.gs-reveal');
        revealElements.forEach((el) => {
            gsap.fromTo(el, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Elegant image reveal
        const imageReveals = document.querySelectorAll('.gs-image-reveal');
        imageReveals.forEach((el) => {
            gsap.fromTo(el,
                { scale: 1.05, opacity: 0, filter: "blur(5px)" },
                {
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                    }
                }
            );
        });
    }
});
