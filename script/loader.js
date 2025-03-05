    // Check if it's the user's first visit
    const isFirstVisit = localStorage.getItem('visited') === null;

    if (isFirstVisit) {
        // Mark the user as visited
        localStorage.setItem('visited', 'true');

        // Keep the loader visible for 3 seconds
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        }, 3000); // 3 seconds
    } else {
        // Immediately hide the loader for subsequent visits
        document.getElementById('loader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }