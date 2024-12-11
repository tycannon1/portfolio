window.onload = () => {
    // Fade in images
    const images = document.querySelectorAll('.floating-img');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('fade-in'); // Add the fade-in class after a slight delay
        }, index * 200); // Stagger the delay for each image
    });

    // Fade in text box
    const textBox = document.querySelector('.hero-text');
    setTimeout(() => {
        textBox.classList.add('fade-in'); // Fade in the text box
    }, images.length * 200); // Delay text box fade-in after all images
};
