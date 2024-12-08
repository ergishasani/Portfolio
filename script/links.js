document.addEventListener("DOMContentLoaded", () => {
    // Function to add smooth scrolling
    const smoothScroll = (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = event.currentTarget.getAttribute("href").substring(1); // Get target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // Attach smooth scrolling to nav links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    // Attach smooth scrolling to footer links
    const footerLinks = document.querySelectorAll(".footer_links li a");
    footerLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });
});
