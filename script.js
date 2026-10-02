// ========================================
// MENU MOBILE
// ========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        const isOpen = nav.classList.toggle("show");
        menuBtn.setAttribute("aria-expanded", String(isOpen));

    });

}


// ========================================
// TUTUP MENU MOBILE
// ========================================

const navLinks = document.querySelectorAll(".navbar nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("show");
            if (menuBtn) {
                menuBtn.setAttribute("aria-expanded", "false");
            }
        }

    });

});


// ========================================
// ANIMASI SAAT SCROLL
// ========================================

const animatedElements = document.querySelectorAll(
    ".education-card, .skill-card, .hobby-card, .project-card, .contact-card"
);


if ("IntersectionObserver" in window && animatedElements.length) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    animatedElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// ========================================
// CONSOLE
// ========================================

console.log(
    "Welcome to Zira Zahira's Portfolio ♡"
);