
async function apiFetch() {
    const apiKey = "fef381b00dd5f7ee47bf318e599f2bac";
    const latitude = 40.71;
    const longitude = -116.10;
    const units = "imperial";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
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


const weatherContainer = document.querySelector(".current");

function displayResults(data) {
    const temp = data.main.temp;
    const iconsrc = data.weather[0].icon;
    const desc = data.weather[0].description;

    weatherContainer.innerHTML = `
        <h2>Current Weather</h2>
        <h3 id="town">Carlin, Nevada</h3>
        <p>The current temperature is: ${temp}&deg;F</p>
        <img src="${iconsrc}" alt="${desc}">
        <figcaption>${desc}</figcaption>
    `;




    // const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}`;
    // const desc = data.weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', data.weather[0].description);
    // caption.textContent = `${desc}`;
}
apiFetch();
