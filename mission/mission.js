// theme = document.getElementById("theme").addEventListener("change");

// Select the dropdown element from the DOM
const themeSelector = document.querySelector('#theme');

// Define the changeTheme function
function changeTheme() {
    // Get the current value of the select element
    const themeValue = themeSelector.value;

    // Get the body element
    const body = document.body;

    // Get the logo image element
    const logo = document.querySelector('.logo');

    if (themeValue === 'dark') {
        // Apply the dark theme
        body.classList.add('dark');
        logo.src = 'mission-logo-white.png'; // Replace with the actual path to the white logo image
    } else {
        // Revert to the light theme
        body.classList.remove('dark');
        logo.src = 'mission-logo.png'; // Replace with the actual path to the blue/light logo image
    }
}

// Add an event listener to the dropdown element
themeSelector.addEventListener('change', changeTheme);