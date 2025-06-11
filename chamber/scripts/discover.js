// const itemsOfInterest = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/items-of-interest.json";
import { items } from "../data/items-of-interest.mjs"

// console.log(items);

const itemCards = document.querySelector(".itemCards");

const displayItems = (items) => {
    items.forEach((item) => {
        let itemCard = document.createElement("section");

        let itemTitle = document.createElement("h2");
        itemTitle.classList.add = "title";
        itemTitle.textContent = item.name;
        itemCard.appendChild(itemTitle);

        let itemFigure = document.createElement("figure");
        itemFigure.classList.add = "itemFig";
        itemFigure.setAttribute("width", "300px");
        itemFigure.setAttribute("width", "200px");

        let itemImg = document.createElement("img");
        itemImg.src = item.photoURL;
        itemImg.alt = item.name;
        itemImg.setAttribute("width", "100%");
        itemImg.setAttribute("height", "auto");
        itemFigure.appendChild(itemImg);

        itemCard.appendChild(itemFigure);

        let itemAddress = document.createElement("address");
        itemAddress.classList.add = "itemAdd";
        let address = item.address;
        let email = item.email;
        let phone = item.phone;
        let website = item.webpage;

        itemAddress.innerHTML = `
            <p>Contact At:</p>
            <p>${address}</p>
            <a href="tel:${phone}">${phone}</a>
            <a href="mailto:${email}">${email}</a>
        `

        itemCard.appendChild(itemAddress);

        let itemDescription = document.createElement("p");
        itemDescription.classList.add = "itemDescrip";
        itemDescription.textContent = item.description;
        itemCard.appendChild(itemDescription);

        let itemButton = document.createElement("button");
        itemButton.classList.add = "itemButton";
        itemButton.textContent = "Learn more";
        
        itemButton.addEventListener("click", () => {
            window.location.href = website;
        });
        
        itemCard.appendChild(itemButton);

        itemCards.appendChild(itemCard);

    })
}

displayItems(items);