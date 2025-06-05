const membersCC = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/members.json";

async function fetchMemberData() {
    try {
        const response = await fetch(membersCC);
        const memberData = await response.json();
        return memberData;
        //displayRandomMemberData(memberData.members);
    } catch (error) {
        console.error("Error fetching data:", error);
    } 
}

function getRandomMemberData(memberData) {
    const randomMembers = [];
    const selectedIndexes = new Set();

    while (randomMembers.length < 3 && selectedIndexes.size < memberData.length) {
        const randomIndex = Math.floor(Math.random() * memberData.length);
        if (!selectedIndexes.has(randomIndex)) {
            selectedIndexes.add(randomIndex);
            randomMembers.push(memberData[randomIndex]);
        }
    }
    return randomMembers;
}
const memberData = fetchMemberData();
const randomMembers = getRandomMemberData(memberData);

const displayRandomMembersData = (randomMembers) => {
    randomMembers.forEach((member) => {
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

displayRandomMembersData(memberData.randomMembers);
    
    


// async function main() {
//     const cards = document.querySelector(".business");
//     const data = await fetchData();
//     if (data) {
//         const randomMembers = getRandomMemberData(data);
//         const displayRandomMembers = (randomMembers)
//     }
// }
// main();

// const cards = document.querySelector(".business");


// async function getRandomMemberData() {
//     const response = await fetch(membersCC);
//     const data = await response.json();
//     const randomMembers = [];
//     const usedIndices = new Set();
//     while (randomMembers.length < 3) {
//         const randomIndex = Math.floor(Math.random() * data.length);
//         if (!usedIndices.has(randomIndex)) {
//             randomMembers.push(data[randomIndex]);
//             usedIndices.add(randomIndex);
//         }
//     }
//     displayRandomMembers(data.members);
// }
// getRandomMemberData();

// const displayRandomMembers = (members) => {
//     cards.innerHTML = ``;
//     members.forEach((member) => {

//         let card = document.createElement("section");

//         let name = document.createElement("h2");
//         name.textContent = member.businessName;
//         card.appendChild(name);

//         let picture = document.createElement("img");
//         picture.src = member.imageurl;
//         picture.alt = name;
//         picture.loading = `lazy`;
//         picture.setAttribute('width', '150px');
//         picture.setAttribute('height', '75px');
//         card.appendChild(picture);

//         let address = document.createElement("p");
//         address.textContent = `${member.address}`;
//         card.appendChild(address);

//         let phone = document.createElement("p");
//         phone.textContent = `${member.phone}`;
//         card.appendChild(phone);

//         let website = document.createElement("a");
//         website.setAttribute("href", member.url);
//         // website.setAttribute("title", "_blank");

//         cards.appendChild(card);
//     });
// }
