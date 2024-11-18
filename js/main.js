gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    effects: true,
});
const leftSculpture = $('#left_hero_sculpture');
const rightSculpture = $('#right_hero_sculpture');
const leftEllipse = $('#left_hero_ellipse');
const rightEllipse = $('#right_hero_ellipse');
const arrowDown = $('.hero__arrow-down');

const leftImage = $('#hero_left_image');
const rightImage = $('#hero_right_image');

const leftPanel = gsap.utils.toArray('.content__left-info');
const rightPanel = gsap.utils.toArray('.content__right-info');

$(document).ready(function() {
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
    )

    gsap.fromTo(arrowDown,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.3,
        }
    )

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
            ease: 'power2.out',
            delay: 0.3
        }
    )

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
            ease: 'power2.out',
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
            ease: 'power2.out',
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
            ease: 'power2.out',
            delay: 0.1
        }
    );
});

if (ScrollTrigger.isTouch !== 1) {
    gsap.fromTo(leftImage,
        {
            opacity: 1,
            x: 0,
        },
        {
            opacity: 0,
            x: -100,
            scrollTrigger: {
                trigger: leftImage,
                start: 'top',
                end: 'bottom',
                scrub: true,
            }
        }
    );
    gsap.fromTo(rightImage,
        {
            opacity: 1,
            x: 0,
        },
        {
            opacity: 0,
            x: 100,
            scrollTrigger: {
                trigger: rightImage,
                start: 'top',
                end: 'bottom',
                scrub: true,
            }
        }
    );

    leftPanel.forEach(item => {
        gsap.fromTo(item,
            {
                opacity: 0,
                x: -70,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-600',
                    end: '-100',
                    scrub: true,
                }
            }
        );
    });

    rightPanel.forEach(item => {
        gsap.fromTo(item,
            {
                opacity: 0,
                x: 70,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-600',
                    end: '-100',
                    scrub: true,
                }
            }
        );
    });

    $('#skills_header').lettering();
    gsap.fromTo(
        '#skills_header span',
        {
            y: '200%',
            opacity: 0,
        },
        {
            y: '0%',
            opacity: 1,
            ease: 'bounce.out',
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top 65%',
                toggleActions: 'play none none reverse'
            }
        }
    );
} else {
    $('.hero__arrow-down').remove();
}
