/* DARK MODE TOGGLE */

const darkModeToggle =
document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

});

/* BACK TO TOP BUTTON */
const backToTop =
document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});

});

/* SCROLL REVEAL */
const reveals =
document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((element) => {
        const windowHeight =
        window.innerHeight;
        const revealTop =
    element.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });

});

/* MOBILE MENU */
const menuToggle =
document.getElementById("menuToggle");
const navbar =
document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
/* =========================================
   AUTO PRODUCT SLIDER
========================================= */

const sliderTrack =
document.getElementById("sliderTrack");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");


let scrollAmount = 0;

const slideWidth = 320;

const maxScroll =
sliderTrack.scrollWidth -
sliderTrack.clientWidth;


/* NEXT SLIDE */
function nextSlide() {
  scrollAmount += slideWidth;
  if (scrollAmount > maxScroll) {
    scrollAmount = 0;
  }
  sliderTrack.style.transform =
  `translateX(-${scrollAmount}px)`;
}

/* PREVIOUS SLIDE */
function prevSlide() {
  scrollAmount -= slideWidth;
  if (scrollAmount < 0) {
    scrollAmount = maxScroll;
  }
  sliderTrack.style.transform =
  `translateX(-${scrollAmount}px)`;
}

/* BUTTON EVENTS */
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* AUTO SLIDE */
setInterval(nextSlide, 3000);
/*  LIVE PRODUCT SEARCH */
const searchInput =
document.getElementById("searchInput");
const products =
document.querySelectorAll(".searchable");
searchInput.addEventListener("keyup", () => {
  const searchValue =
  searchInput.value.toLowerCase();
  products.forEach((product) => {
    const productText =
    product.innerText.toLowerCase();
    if (productText.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });

});
