/* =========================================================
   PRIME FITNESS
   JAVASCRIPT
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 900);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");

});


/* Close menu when navigation link is clicked */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        menuBtn.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,5,0.94)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,0.70)";

    }

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();

        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   IMAGE ERROR PROTECTION
========================================================= */

document.querySelectorAll(".hero-bg, .image-break, .training-image, .facility-image, .final-cta-bg")
    .forEach(element => {

        element.addEventListener("error", () => {

            element.style.backgroundImage = "none";
            element.style.backgroundColor = "#151818";

        });

    });