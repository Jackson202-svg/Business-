// Function to handle simple interactions
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add an 'active' class to the current page link
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#2563eb';
            link.style.borderBottom = '2px solid #2563eb';
        }
    });

    console.log("Business website loaded successfully!");
});
