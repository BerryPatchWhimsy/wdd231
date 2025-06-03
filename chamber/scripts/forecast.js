

const APIKey = "fef381b00dd5f7ee47bf318e599f2bac";
const lat = 40.71;
const lon = -116.10;
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
    const currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = ` ${data.main.temp} &deg;F`;

    const iconImg = document.querySelector("#weather-icon");
    iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2.png`;
    iconImg.setAttribute('src', iconSrc);
    const description = data.weather[0].description;
    iconImg.setAttribute('alt', description);
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
    data.list.forEach((day) => {
        if (day.dt_txt.includes("00:00:00")) {
            const date = new Date(day.dt * 1000);
            const options = { weekday: "long" };
            const dayName = new Intl.DateTimeFormat("en-US", options).format(date);

            const temperature = day.main.temp;

            const iconSrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2.png`;
            const description = day.weather[0].description;

            const forecastDay = document.querySelector(".days");

            const dayContainer = document.createElement("div");
            dayContainer.classList.add("daily");
            dayContainer.innerHTML = `
        <p>${dayName}, ${date.toLocaleDateString()}</p>
        <img src="${iconSrc}" alt="${description}">
        <p>${temperature}&deg;F</p>
        `;

            forecastDay.appendChild(dayContainer);
        }
    });
}