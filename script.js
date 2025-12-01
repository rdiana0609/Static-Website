// NAVBAR ACTIVE LINK
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    
    0: { slidesPerView: 1.1, spaceBetween: 20},
    390: { slidesPerView: 1.3, spaceBetween: 20},
    500:{ slidesPerView: 1.5 , spaceBetween: 20},
    600:{ slidesPerView: 1.8 , spaceBetween: 20},
    768: { slidesPerView: 2, spaceBetween: 10 },
    992: { slidesPerView: 3 }
  }
});

// Function to filter slides
function filterSlides(filter) {
  document.querySelectorAll(".swiper-slide").forEach(slide => {
    const card = slide.querySelector(".menu-card");
    if (card.classList.contains(filter)) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  swiper.update();       // Update Swiper layout
  swiper.slideTo(0);     // Go to first visible slide
}

// Desktop buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Highlight active button
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    filterSlides(filter);
  });
});

// Mobile dropdown
document.getElementById("mobileFilter").addEventListener("change", e => {
  const filter = e.target.value;

  // Sync active button on desktop (optional)
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  filterSlides(filter);
});