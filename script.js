const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'API_KEY'; // Ingresar la API Key de OpenWeatherMap
const diffKelvin = 273.15;


document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Por favor, ingresa una ciudad válida');
    }
});

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
        };


function showWeatherData(data) {
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;
    
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `Temperatura: ${Math.floor(temp - diffKelvin)}°C`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humedad: ${humidity}%`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `http://openweathermap.org/img/w/${icon}.png`;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = description;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);
}