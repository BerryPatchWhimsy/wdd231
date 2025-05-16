const membersCC = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMemberData() {
    const response = await fetch(membersCC);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");

        let name = document.createElement("h2");
        name.textContent = member.businessName;
        card.appendChild(name);

        let address = document.createElement("p");
        address.textContent = `${member.address}`;
        card.appendChild(address);

        let phone = document.createElement("p");
        phone.textContent = `${member.phone}`;
        card.appendChild(phone);

        let website = document.createElement("a");
        website.setAttribute("href", member.url);
        // website.setAttribute("title", "_blank");

        let picture = document.createElement("img");
        picture.src = member.imageurl;
        picture.alt = name;
        picture.loading = `lazy`;
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '150');
        card.appendChild(picture);

        cards.appendChild(card);
    });
}