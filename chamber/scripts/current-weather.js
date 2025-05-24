const weatherContainer = document.querySelector(".weather");

const temp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("#weather-description");

const apiKey = "fef381b00dd5f7ee47bf318e599f2bac";
const latitude = 40.71;
const longitude = -116.10;
const units = "imperial";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
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
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    caption.textContent = `${desc}`;
}


// <h3>Carlin Museum</h3>
// <p>Location: 123 Maple St, Carlin, NV 89822</p>
// <p>Description: An informative little museum full of rich history of Carlin and its people.</p>
// <p>Website: <a href="https://carlinhistoricalsociety.com/museum-exhibits/" target="_blank">carlinmuseum.com</a></p>
