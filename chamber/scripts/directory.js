const membersCC = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(membersCC);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
}
);

listbutton.addEventListener("click", showlist); 

function showlist() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");

        let name = document.createElement("h2");
        name.textContent = member.businessName;
        card.appendChild(name);

        let picture = document.createElement("img");
        picture.src = member.imageurl;
        picture.alt = name;
        picture.loading = `lazy`;
        picture.setAttribute('width', '150px');
        picture.setAttribute('height', '75px');
        card.appendChild(picture);

        let address = document.createElement("p");
        address.textContent = `${member.address}`;
        card.appendChild(address);

        let phone = document.createElement("p");
        phone.textContent = `${member.phone}`;
        card.appendChild(phone);

        let website = document.createElement("a");
        website.setAttribute("href", member.url);
        // website.setAttribute("title", "_blank");

        cards.appendChild(card);
    });
}