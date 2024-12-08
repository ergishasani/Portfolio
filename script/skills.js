document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll(".skill-fill");
  
    const fillBars = () => {
      skillFills.forEach((fill) => {
        const percentage = fill.getAttribute("data-percentage");
        fill.style.width = `${percentage}%`;
      });
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fillBars();
            observer.disconnect(); // Stops observing after animation
          }
        });
      },
      { threshold: 0.5 }
    );
  
    observer.observe(document.querySelector(".skills-section"));
  });
  