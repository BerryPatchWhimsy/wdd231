import { updateCurrentYear, updateLastModified } from "./getdate.mjs";
import { createCurrentSpecialCard, createUpcomingSpecialCard } from "./deals-cards.mjs";

document.querySelector("#name").innerHTML = "Leafy Treetops";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

const dealsContainer = document.querySelector(".dealsInfo");

createCurrentSpecialCard();
dealsContainer.appendChild(createCurrentSpecialCard());

createUpcomingSpecialCard();
dealsContainer.appendChild(createUpcomingSpecialCard());


