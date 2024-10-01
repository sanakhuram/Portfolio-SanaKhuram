document.addEventListener('DOMContentLoaded', () => {
    const moonToggle = document.querySelector('.moon-toggle-container');

    moonToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        console.log("Dark mode toggled");  // This helps confirm that the click is being detected
    });
});

// Number of stars to generate
const numberOfStars = 100;

// Select the stars container
const starsContainer = document.querySelector('.stars');

// Function to generate random values
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Generate stars dynamically
for (let i = 0; i < numberOfStars; i++) {
    // Create a new div element for the star
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Set random position for the star
    const top = getRandomValue(0, 100); 
    const left = getRandomValue(0, 100); 
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;

   
    const delay = getRandomValue(0, 5); 
    const duration = getRandomValue(2, 4); 
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;


    starsContainer.appendChild(star);
}
