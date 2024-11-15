$(document).ready(function() {
    const leftSculpture = $('#left_hero_sculpture');
    const rightSculpture = $('#right_hero_sculpture');
    const leftEllipse = $('#left_hero_ellipse');
    const rightEllipse = $('#right_hero_ellipse');
    $('.hero__text h1 span').lettering();

    gsap.timeline()
    .to('.hero__text h1 span span',
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out',
            stagger: 0.05
        }
    );

    gsap.fromTo(
        leftSculpture,
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3
        }
    );
    gsap.fromTo(
        leftEllipse,
        {
            opacity: 0,
            x: -100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.1
        }
    );
    gsap.fromTo(
        rightSculpture,
        {
            opacity: 0,
            x: 100
        },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3
        }
    );
    gsap.fromTo(
        rightEllipse,
        {
            x: 100
        },
        {
            x: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.1
        }
    );
});
