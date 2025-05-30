const memberLevels = "https://BerryPatchWhimsy.github.io/wdd231/chamber/data/member-levels.json";

const memberCards = document.querySelector(".membershipCards");

const displayMemberLevels = (levels) => {
    memberCards.innerHTML = "";
    levels.forEach((level) => {
        let levelCard = document.createElement("section");
        levelCard.classList.add = "levelCard";

        let name = document.createElement("h2");
        name.textContent = level.levelType;
        levelCard.appendChild(name);

        let info = document.createElement("button");
        info.classList.add = "levelButton";
        info.textContent = "Learn more";
        levelCard.appendChild(info);

        memberCards.appendChild(levelCard);

        let dialog = document.createElement("dialog");
        dialog.classList.add("memberLevel-dialog");
        dialog.id.add = `${name}`;
        dialog.innerHTML = `
                <h3>${level.levelType}</h3>
                <p>Cost: ${level.cost}</p>
                <p>Benefits: ${level.benefits.join(",")}</p>
                <button class="close-button">ⓧ</button>
            `;
        memberCards.appendChild(dialog);

        info.addEventListener("click", () => {
            dialog.showModal();
        });

        let closeModal = dialog.querySelector(".close-button");
        closeModal.addEventListener("click", () => {
            dialog.close();
        });
    });
}


async function getLevelData() {
    const response = await fetch(memberLevels);
    const levelData = await response.json();
    displayMemberLevels(levelData.levels);
    
}

getLevelData();

const selectElement = document.querySelector("#memberChoice");
const displaySelectElement = (levels) => {
    
    levels.forEach(level => {
        const option = document.createElement("option");
        option.textContent = level.levelType;

        selectElement.appendChild(option);
    });
}

async function  getSelectElementData () {
    const response1 = await fetch(memberLevels);
    const selectData = await response1.json();
    displaySelectElement(selectData.levels);
}

getSelectElementData();
   
