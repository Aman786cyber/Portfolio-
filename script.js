/* ==========================================
   AOS INITIALIZATION
========================================== */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.querySelector("#typing");

if (typingElement) {
    new Typed("#typing", {
        strings: [
            "Software Engineer",
            "Full Stack Developer",
            "Python Developer",
            "Cyber Security Enthusiast",
            "AI Developer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* ==========================================
   STICKY NAVBAR
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 0 20px cyan";

    }
    else{

        header.style.background = "rgba(5,8,22,.85)";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }
    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   SMOOTH SCROLL FOR NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
   PARTICLES.JS
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {

            value:80

        },

        color: {

            value:"#00ffff"

        },

        shape: {

            type:"circle"

        },

        opacity: {

            value:0.5

        },

        size: {

            value:3

        },

        line_linked: {

            enable:true,

            distance:150,

            color:"#00ffff",

            opacity:0.4,

            width:1

        },

        move: {

            enable:true,

            speed:2

        }

    },

    interactivity: {

        events: {

            onhover: {

                enable:true,

                mode:"repulse"

            },

            onclick: {

                enable:true,

                mode:"push"

            }

        }

    },

    retina_detect:true

});

/* ==========================================
   PROJECT CARD HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   CURRENT YEAR IN FOOTER (OPTIONAL)
========================================== */

const yearElement = document.querySelector(".copyright");

if(yearElement){

    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Aman Singh. All Rights Reserved.`;

}

/* ==========================================
   PAGE LOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   END OF SCRIPT.JS
========================================== */