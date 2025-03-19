const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

// OpenWeatherMap API key (replace with your own key)
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data
async function fetchWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === 200) {
            // Display weather data
            cityName.textContent = `${data.name}, ${data.sys.country}`;
            temperature.textContent = `${data.main.temp}°C`;
            description.textContent = data.weather[0].description;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            wind.textContent = `Wind: ${data.wind.speed} m/s`;
            weatherInfo.style.display = 'block';
        } else {
            alert('City not found!');
        }
    } catch (error) {
        alert('Error fetching weather data!');
    }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    }
});

// Optional: Allow pressing "Enter" to search
cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
