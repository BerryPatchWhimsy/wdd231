const itemsOfInterest = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/items-of-interest.json";

const itemCards = document.querySelector(".itemCards");

async function getItemInterestData() {
    const itemsResponse = await fetch(itemsOfInterest);
    const itemsData = await itemsResponse.json();
    displayItems(itemsData.items);
}

getItemInterestData();

const displayItems = (items) => {
    items.forEach((item) => {
        let itemCard = document.createElement("section");

        let itemTitle = document.createElement("h2");
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
        let address = item.address;
        itemAddress.appendChild(address);
        let email = item.email;
        let phone = item.phone;
        let website = item.webpage;

        itemAddress.innerHTML = `
            <p>${address}</p>
            <p>${phone}</p>
            <a href="mailto:${email}">${email}</a>
            <a href="mailto:${website}">${website}</a>
        `
        
        itemCard.appendChild(itemAddress);

        let itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        itemCard.appendChild(itemDescription);

        let itemButton = document.createElement("button");
        itemButton.classList.add = "itemButton";
        itemButton.textContent = "Learn more";
        itemButton.setAttribute("href", `${ website }`);
        itemCard.appendChild(itemButton);

    })
}