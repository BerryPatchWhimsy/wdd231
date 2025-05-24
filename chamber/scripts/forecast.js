const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");

const APIKey = "fef381b00dd5f7ee47bf318e599f2bac";
const lat = 40.71;
const lon = -116.10;
const uni = "imperial";

const forecastURL = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${uni}`;



async function APIFetch() {
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
APIFetch();

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