javascript
/* ========================================
   ROZARIO ATELIER
   Portfolio JavaScript
======================================== */


/* ========================================
   HEADER SCROLL EFFECT
======================================== */

const header = document.getElementById("header");

function handleHeaderScroll() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* ========================================
   MOBILE MENU
======================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navLinks.classList.toggle("mobile-open");

    document.body.classList.toggle("menu-open");

});


/* ========================================
   CLOSE MOBILE MENU
   WHEN CLICKING A LINK
======================================== */

const navItems = document.querySelectorAll(
    ".nav-links a"
);

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        navLinks.classList.remove("mobile-open");

        document.body.classList.remove("menu-open");

    });

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ========================================
   SMOOTH ANCHOR SCROLL
======================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* ========================================
   PROJECT IMAGE FALLBACK
======================================== */

const projectImages =
    document.querySelectorAll(".project-image img");


projectImages.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        image.parentElement.classList.add(
            "image-error"
        );

    });

});


/* ========================================
   CURRENT YEAR
======================================== */

const yearElement =
    document.querySelector("footer span");

if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Jaci / Rozario Atelier`;

}
