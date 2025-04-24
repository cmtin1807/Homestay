'use strict';

var theme = {

    // THEME FUNTIONS
    init: function () {

        // Background image
        theme.bgImage();

        // Background image (mobile)
        theme.bgImageMobile();

        // Scroll to top
        theme.scrollTop();

        // header stiked
        theme.headerSticked();

        // Close Offcanvas Navbar
        theme.CloseOffcanvasNavbar();

        // Animation 
        theme.scrollCue();

        // splide slider
        theme.splideSlider();

        // Glightbox
        theme.gLightbox();

        // Bootstrap validation
        theme.bsValidation();

        // preloader
        theme.preloader();
        theme.splideSlider1();


    },

    // BACKGROUND IMAGE
    bgImage: () => {
        // Select all elements with class 'bg-image'
        let bg = document.querySelectorAll(".bg-image");
        for (let i = 0; i < bg.length; i++) {
            let url = bg[i].getAttribute('data-image-src');
            bg[i].style.backgroundImage = "url('" + url + "')";
        }
    },

    // BACKGROUND IMAGE (MOBILE)
    bgImageMobile: () => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|MacIntel/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (isMobile) {
            const imageWrappers = document.querySelectorAll(".image-wrapper");
            imageWrappers.forEach((element) => {
                element.classList.add("mobile");
            });
        }
    },

    // SCROLL TO TOP 
    scrollTop: () => {
        // Select the scroll-top element
        const scrollTop = document.querySelector('.scroll-top');
        if (scrollTop) {
            const toggleScrollTop = () => scrollTop.classList.toggle('active', window.scrollY > 150);
            const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            window.addEventListener('load', toggleScrollTop);
            document.addEventListener('scroll', toggleScrollTop);
            scrollTop.addEventListener('click', scrollToTop);
        }
    },

    // HEADER STICKED
    headerSticked: () => {
        // Select the header element with id 'header'
        const header = document.querySelector('#header');
        if (header) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY > 120;
                header.classList.toggle('header-sticked', scrolled);
                header.classList.toggle('bg-opacity-100', scrolled);
                header.classList.toggle('bg-opacity-0', !scrolled);
            });
        }
    },

    // CLOSE OFFCANVAS NAVBAR
    CloseOffcanvasNavbar: () => {
        const closeOffcanvas = document.querySelectorAll('[data-close-offcanvas]');
        const offcanvasNavBar = new bootstrap.Offcanvas(document.querySelector('#ocvNavbar'));

        closeOffcanvas.forEach((link) => {
            link.addEventListener('click', () => {
                offcanvasNavBar.hide();
            });
        });
    },

    // ANIMATION - SCROLLCUE
    // assets/css/vendors/scrollcue.min.css
    // assets/css/vendors/scrollcue.min.js
    // https://github.com/prjct-samwest/scrollCue
    scrollCue: () => {
        scrollCue.init({
            interval: -200,
            duration: 600,
            percentage: 0.8
        });
        scrollCue.update();
    },

    // SPLIDE SLIDER
    // assets/vendors/splide/splide.min.css
    // assets/vendors/splide/splide.min.js
    // https://github.com/Splidejs/splide
    splideSlider: () => {

        // Room slider
        if (document.querySelector('.room-slider')) {
            new Splide('.room-slider', {
                perPage: 2,
                gap: '1rem',
                speed: 800,
                focus: 0,
                omitEnd: true,
                type: 'loop',
                breakpoints: {
                    1200: {
                        gap: '0.75rem',
                    },
                    992: {
                        perPage: 1,
                    },
                }
            }).mount();
        }

        // Service slider
        if (document.querySelector('.service-slider')) {
            new Splide('.service-slider', {
                perPage: 3,
                gap: '1rem',
                speed: 800,
                focus: 0,
                omitEnd: true,
                type: 'loop',
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    992: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                    },
                }
            }).mount();
        }

        // Testimonial slider
        if (document.querySelector('.testimonial-slider')) {
            new Splide('.testimonial-slider', {
                perPage: 3,
                gap: '1rem',
                speed: 800,
                type: 'loop',
                focus: 0,
                omitEnd: true,
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    992: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                    },
                }
            }).mount();
        }
    },

    splideSlider1: () => {

        // Room slider
        if (document.querySelector('.room-slider')) {
            new Splide('.room-slider1', {
                perPage: 2,
                gap: '1rem',
                speed: 800,
                focus: 0,
                omitEnd: true,
                type: 'loop',
                breakpoints: {
                    1200: {
                        gap: '0.75rem',
                    },
                    992: {
                        perPage: 1,
                    },
                }
            }).mount();
        }

        // Service slider
        if (document.querySelector('.service-slider')) {
            new Splide('.service-slider1', {
                perPage: 3,
                gap: '1rem',
                speed: 800,
                focus: 0,
                omitEnd: true,
                type: 'loop',
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    992: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                    },
                }
            }).mount();
        }

        // Testimonial slider
        if (document.querySelector('.testimonial-slider')) {
            new Splide('.testimonial-slider1', {
                perPage: 3,
                gap: '1rem',
                speed: 800,
                type: 'loop',
                focus: 0,
                omitEnd: true,
                breakpoints: {
                    1200: {
                        perPage: 2,
                    },
                    992: {
                        perPage: 2,
                    },
                    768: {
                        perPage: 1,
                    },
                }
            }).mount();
        }
    },

    // GLIGHTBOX & PLYR
    // assets/vendors/glightbox/glightbox.min.css
    // assets/vendors/glightbox/glightbox.min.js
    // assets/vendors/plyr/plyr.min.css
    // assets/vendors/plyr/plyr.min.js
    // https://github.com/sampotts/plyr
    // https://github.com/biati-digital/glightbox
    gLightbox: () => {

        let photoLightbox = GLightbox({
            selector: '.glightbox'
        });

        let mediaLightbox = GLightbox({
            selector: '.media-glightbox',
            touchNavigation: true,
            loop: false,
            zoomable: false,
            autoplayVideos: true,
            moreLength: 0,
            slideExtraAttributes: {
                poster: ''
            },
            plyr: {
                config: {
                    ratio: '16:9',
                    muted: false,
                    hideControls: true,
                    youtube: {
                        noCookie: false,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        speed: true,
                        transparent: false
                    }
                }
            },
        });
    },

    // BOOTSTRAP VALIDATION
    // https://getbootstrap.com/docs/5.3/forms/validation/#how-it-works
    bsValidation: () => {
        const forms = document.querySelectorAll('.needs-validation');
        forms.forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    },

    // PRELOAD
    preloader: () => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            function removePreloader() {
                preloader.remove();
            }
            setTimeout(() => {
                window.requestAnimationFrame(removePreloader);
            }, 350);
        }
    },
}

window.onload = function () {
    if (document.readyState === 'complete') {
        theme.init();
    }
};

