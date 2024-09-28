// Function to detect user's country using an API
async function detectCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        document.getElementById('country-message').innerText = `You are in: ${data.country_name}`;
        // Show the country container and hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('country-container').style.display = 'block';
    } catch (error) {
        document.getElementById('country-message').innerText = 'Unable to detect your country.';
        console.error('Error fetching country information:', error);
    }
}

// Simulate loading screen for 3 seconds before detecting country
setTimeout(() => {
    detectCountry();
}, 3000); // 3 seconds delay
