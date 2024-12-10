// JavaScript for the fade-in effect on images
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.floating-img');
    
    // Apply fade-in and stagger the effect
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('fade-in');
        }, index * 300); // Staggered fade-in effect
    });
});
