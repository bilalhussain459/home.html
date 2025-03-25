// hero video play/pause function start
const video = document.getElementById("myVideo-inner");
const playIcon = document.querySelector(".play-icon");

playIcon.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playIcon.src = "asstes/images/pause-icon.png"; // Change to pause icon when playing
  } else {
    video.pause();
    playIcon.src = "asstes/images/play-icon.png"; // Change back to play icon when paused
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
        slide.classList.add("active"); // Centered slide
      } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
        slide.classList.add("left"); // Left slide
      } else if (index === (currentIndex + 1) % slides.length) {
        slide.classList.add("right"); // Right slide
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

  // Auto-slide every 3 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }, 6000);

  updateSlides(); // Initial setup
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
var swiper = new Swiper(".sswiper-container", {
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
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
  }
});
// News and insights sec slider function end
