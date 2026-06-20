// ===============================
// Dormitory World
// Homepage JavaScript
// ===============================

console.log("Dormitory World Website Loaded Successfully");

// Navbar Shadow Effect

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    } else {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
    }

});

// Feature Card Animation

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {
    observer.observe(card);
});

// CTA Button

const ctaButton = document.querySelector(".cta-btn");

if (ctaButton) {

    ctaButton.addEventListener("click", () => {

        alert(
            "Welcome to Dormitory World!\n\nBooking system will be available soon."
        );

    });

}

// Hero Button (if present)

const heroButton = document.querySelector(".search-box button");

if (heroButton) {

    heroButton.addEventListener("click", () => {

        alert(
            "Dormitory World is launching soon.\nStart exploring dormitories, hostels, backpacker stays and PG accommodations."
        );

    });

}