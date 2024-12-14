// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamically update the footer with the last modified date
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const lastModified = document.lastModified;
    if (footer) {
        const updatedDate = document.createElement('p');
        updatedDate.textContent = `Last updated: ${lastModified}`;
        footer.appendChild(updatedDate);
    }
});
