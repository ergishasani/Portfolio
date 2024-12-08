document.addEventListener("DOMContentLoaded", () => {
    const testimonialsSection = document.getElementById("testimonials");
    const stars = document.querySelectorAll(".stars");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stars.forEach((star) => {
              star.classList.add("filled");
            });
            observer.disconnect(); // Stops observing after filling stars
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );
  
    observer.observe(testimonialsSection);
  });
  