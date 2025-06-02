// This is a basic JavaScript file for the Chamber of Commerce website.
const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

document.querySelector("#name").innerHTML = "Carlin";