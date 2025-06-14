// const weatherContainer = document.querySelector(".current");
const lat = 35.7942;
const lon = -82.6773;
// Marshal, NC coordinates

// async function fetchWeather() {
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         const currentTemp = data.current_weather.temperature;
//         const weatherDescriptions = {
//             0: "Clear sky",
//             1: "Mainly clear",
//             2: "Partly cloudy",
//             3: "Overcast",
//             45: "Fog",
//             48: "Depositing rime fog",
//             51: "Light drizzle",
//             53: "Moderate drizzle",
//             55: "Dense drizzle",
//             61: "Slight rain",
//             63: "Moderate rain",
//             65: "Heavy rain",
//             71: "Slight snow",
//             73: "Moderate snow",
//             75: "Heavy snow",
//             80: "Rain showers",
//             81: "Heavy showers",
//             95: "Thunderstorm",
//             99: "Thunderstorm with hail",
//         };

//         const currentCode = data.current_weather.weathercode;
//         const weatherDesc = weatherDescriptions[currentCode] || "Unknown";

//         const forecastDates = data.daily.time.slice(1, 4);
//         const tempsMax = data.daily.temperature_2m_max.slice(1, 4);
//         const tempsMin = data.daily.temperature_2m_min.slice(1, 4);

//         const forecastHTML = forecastDates.map((date, i) => {
//             return `<li>${new Date(date).toLocaleDateString(undefined, { weekday: 'short' })}:
//         ${tempsMin[i]}°C – ${tempsMax[i]}°C</li>`;
//         }).join("");

//         weatherContainer.innerHTML = `
//   <p><strong>Current Temperature:</strong> ${currentTemp}°C</p>
//   <p><strong>Condition:</strong> ${weatherDesc}</p>
//   <p><strong>3-Day Forecast:</strong></p>
//   <ul>${forecastHTML}</ul>
//     `;
//     } catch (err) {
//         console.error("Failed to load weather:", err);
//         weatherContainer.innerHTML = "<p>Error loading weather data.</p>";
//     }
// }

// fetchWeather();



const APIKey = "fef381b00dd5f7ee47bf318e599f2bac";
// const lat = 40.71;
// const lon = -116.10;
const uni = "imperial";

const currentURL = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${uni}`;

async function currentAPIFetch() {
    try {
        const response = await fetch(currentURL);
        if (response.ok) {
            const currentData = await response.json();
            displayCurrentWeather(currentData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
currentAPIFetch();

function displayCurrentWeather(data) {
    const currentTemp = document.querySelector(".current");
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const description = data.weather[0].description;
    
    currentTemp.innerHTML = `
       <img src="${iconSrc}" alt="${description}" loading="lazy">
       <p>${data.main.temp} &deg;F</p>
    `;
}


const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${uni}`;

async function forecastAPIFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
forecastAPIFetch();

function displayResults(data) {
    const threeDayForecast = data.list.slice(0, 24);
    threeDayForecast.forEach((day) => {
        if (day.dt_txt.includes("00:00:00")) {
            const date = new Date(day.dt * 1000);
            const options = { weekday: "long" };
            const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

            const temperature = day.main.temp;

            const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const description = day.weather[0].description;

            const forecastDay = document.querySelector(".days");

            const dayContainer = document.createElement("div");
            dayContainer.classList.add("daily");
            dayContainer.innerHTML = `
        <p>${dayName}, ${date.toLocaleDateString()}</p>
        <img src="${iconSrc}" alt="${description}" loading="lazy">
        <p>${temperature}&deg;F</p>
        `;

            forecastDay.appendChild(dayContainer);
        }
    });
}