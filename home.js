// hero video play/pause function start
const video = document.getElementById("myVideoInner");
const playIcon = document.querySelector(".play-icon");

playIcon.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.src = "asstes/images/pause-icon.png";
  } else {
    video.pause();
    playIcon.src = "asstes/images/play-icon.png";
  }
});
// hero video play/pause function end

// about us sec counter function start
// Counter animation function
function animateCounter(id, target, speed) {
  let counter = document.getElementById(id);
  let count = 0;
  let increment = Math.ceil(target / speed);

  function updateCounter() {
    count += increment;
    if (count >= target) {
      counter.textContent = target + "+";
    } else {
      counter.textContent = count + "+";
      setTimeout(updateCounter, 35);
    }
  }

  updateCounter();
}

// Function to trigger animation when the section is visible
function startCounterWhenVisible() {
  const counterSection = document.getElementById("counter-section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter("nationalitiesCounter", 25, 50);
          animateCounter("customersCounter", 500, 30);
          animateCounter("countriesCounter", 100, 40);
          observer.unobserve(counterSection); // Stop observing after animation starts
        }
      });
    },
    { threshold: 0.7 } // Start when 70% of the section is visible
  );

  observer.observe(counterSection);
}

// Start the observer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", startCounterWhenVisible);

// about us sec counter function end

// our services sec tabs function start
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "left", "right");

      if (index === currentIndex) {
        slide.classList.add("active");
      } else if (
        index ===
        (currentIndex - 1 + slides.length) % slides.length
      ) {
        slide.classList.add("left");
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add("right");
      }
    });
  }

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }, 4000);

  updateSlides();
});
// our services sec tabs function end

// loader function start
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// loader function end

// case study function js code start
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// case study function js code end

// News and insights sec slider function start
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// News and insights sec slider function end

// responsive mobile sticky function start
$(window).on("scroll", function () {
  const sc = $(window).scrollTop();
  $("#main-navbar").toggleClass("navbar-scroll", sc > 150);
});

// Toggle menu on mobile/tablet
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const navMenu = document.getElementById("nav-menu");
  const dropdown = document.querySelector(".dropdown");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  if (dropdown) {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        this.classList.toggle("open");
      }
    });
  }
});

// responsive mobile sticky function end