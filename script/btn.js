// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the button
    const hireMeButton = document.querySelector(".btn");

    // Add a click event listener to the button
    hireMeButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior

        // Get the target element by its ID
        const targetElement = document.querySelector("#contact_sc");

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});
