$(document).ready(function () {

    /* ================= PRELOADER ================= */
    setTimeout(function () {
        $(".preloader").fadeOut(500);
    }, 700);

    /* ================= MOBILE MENU ================= */
    $(".menu-toggle").on("click", function () {
        $(".main-nav").toggleClass("open");
        $("body").toggleClass("menu-open");
        $(this).find("i").toggleClass("fa-bars fa-xmark");
    });

    $(".main-nav a").on("click", function () {
        $(".main-nav").removeClass("open");
        $("body").removeClass("menu-open");
        $(".menu-toggle i").removeClass("fa-xmark").addClass("fa-bars");
    });

    /* ================= HEADER ================= */
    function updateHeader() {
        if ($(window).scrollTop() > 30) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    }
    updateHeader();
    $(window).on("scroll", updateHeader);

    /* ================= ACTIVE NAV ================= */
    var sections = $("main section[id]");
    $(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop() + 160;

        sections.each(function () {
            var top = $(this).offset().top;
            var bottom = top + $(this).outerHeight();
            var id = $(this).attr("id");

            if (scrollPos >= top && scrollPos < bottom) {
                $(".main-nav a").removeClass("active");
                $('.main-nav a[href="#' + id + '"]').addClass("active");
            }
        });
    });

    /* ================= REVEAL ON SCROLL ================= */
    function revealOnScroll() {
        $(".reveal").each(function () {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height() - 80;

            if (elementTop < viewportBottom) {
                $(this).addClass("visible");
            }
        });
    }

    revealOnScroll();
    $(window).on("scroll", revealOnScroll);

    /* ================= COUNTER ================= */
    var counterDone = false;

    function runCounters() {
        var aboutTop = $(".hero-proof").offset().top;
        var viewportBottom = $(window).scrollTop() + $(window).height();

        if (!counterDone && aboutTop < viewportBottom) {
            $(".counter").each(function () {
                var $this = $(this);
                $({ countNum: 0 }).animate(
                    { countNum: $this.data("target") },
                    {
                        duration: 1300,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            });
            counterDone = true;
        }
    }
    runCounters();
    $(window).on("scroll", runCounters);

    /* ================= PROJECT SLIDER ================= */
    var currentProject = 0;
    var projectSlides = $(".project-slide");
    var projectDots = $(".dot");

    function showProject(index) {
        if (index < 0) index = projectSlides.length - 1;
        if (index >= projectSlides.length) index = 0;

        currentProject = index;
        projectSlides.removeClass("active").eq(index).addClass("active");
        projectDots.removeClass("active").eq(index).addClass("active");
    }

    $(".next").on("click", function () {
        showProject(currentProject + 1);
    });

    $(".prev").on("click", function () {
        showProject(currentProject - 1);
    });

    projectDots.on("click", function () {
        showProject($(this).data("slide"));
    });

    // Auto-advance the project slider
    var projectTimer = setInterval(function () {
        showProject(currentProject + 1);
    }, 6500);

    $(".project-slider").on("mouseenter", function () {
        clearInterval(projectTimer);
    }).on("mouseleave", function () {
        projectTimer = setInterval(function () {
            showProject(currentProject + 1);
        }, 6500);
    });

    /* ================= TESTIMONIAL SLIDER ================= */
    var currentTestimonial = 0;
    var testimonials = $(".testimonial");

    function showTestimonial(index) {
        if (index < 0) index = testimonials.length - 1;
        if (index >= testimonials.length) index = 0;

        currentTestimonial = index;
        testimonials.removeClass("active").eq(index).addClass("active");
        $(".t-count").text("0" + (index + 1) + " / 0" + testimonials.length);
    }

    $(".t-next").on("click", function () {
        showTestimonial(currentTestimonial + 1);
    });

    $(".t-prev").on("click", function () {
        showTestimonial(currentTestimonial - 1);
    });

    var testimonialTimer = setInterval(function () {
        showTestimonial(currentTestimonial + 1);
    }, 5500);

    $(".testimonial-slider").on("mouseenter", function () {
        clearInterval(testimonialTimer);
    }).on("mouseleave", function () {
        testimonialTimer = setInterval(function () {
            showTestimonial(currentTestimonial + 1);
        }, 5500);
    });

    /* ================= CONTACT FORM ================= */
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        var name = $.trim($('[name="name"]').val());
        var email = $.trim($('[name="email"]').val());
        var project = $('[name="project"]').val();
        var message = $.trim($('[name="message"]').val());

        var subject = encodeURIComponent("New Artiste@ web IT Project Inquiry — " + project);
        var body = encodeURIComponent(
            "Hello Israt,\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Project type: " + project + "\n\n" +
            "Project details:\n" + message + "\n\n" +
            "Sent from the Artiste@ web IT website."
        );

        window.location.href =
            "mailto:shima.zia287@gmail.com?subject=" + subject + "&body=" + body;
    });

    /* ================= BACK TO TOP ================= */
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 600) {
            $(".back-top").addClass("show");
        } else {
            $(".back-top").removeClass("show");
        }
    });

    $(".back-top").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 700);
    });

    /* ================= CURRENT YEAR ================= */
    $("#year").text(new Date().getFullYear());

});
