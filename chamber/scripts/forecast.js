const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
const icon3 = document.querySelector("#icon3");

const apiKey = "fef381b00dd5f7ee47bf318e599f2bac";
const latitude = 40.71;
const longitude = -116.10;
const units = "imperial";

const url = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;



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
    const day1Data = data.list[0];
    const day2Data = data.list[1];
    const day3Data = data.list[2];

    temp1.innerHTML = `${day1Data.main.temp}&deg;F`;
    temp2.innerHTML = `${day2Data.main.temp}&deg;F`;
    temp3.innerHTML = `${day3Data.main.temp}&deg;F`;

    const iconSrc1 = `https://openweathermap.org/img/wn/${day1Data.weather[0]}@2x.png`;
}