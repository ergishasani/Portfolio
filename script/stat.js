document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".number");
  
    const startCounting = () => {
      counters.forEach((counter) => {
        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText;
          const increment = target / 200; // Adjust the speed here (200 = slower, lower = faster)
  
          if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10); // Adjust interval speed here
          } else {
            counter.innerText = target;
          }
        };
  
        updateCounter();
      });
    };
  
    // Detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect(); // Stop observing once triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
  
    const statsSection = document.querySelector(".statistics-section");
    observer.observe(statsSection);
  });
  