const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()} </span>`;

let lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `Last modified: ${document.lastModified}`;
// // getdates.js
// function getFullYear() {
//     const today = new Date();
//     return today.toDateString();
// }


