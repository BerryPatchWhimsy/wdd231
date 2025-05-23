const joinbutton = document.querySelector("#join");

const temp = document.querySelector("current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("#weather-description");

const apiKey = "fef381b00dd5f7bf318e599f2bac";
const latitude = 40.71;
const longitude = -116.10;
const units = "imperial";

const url = `//api.openweathermap.org/data/2.5/wether?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
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
apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const 
}