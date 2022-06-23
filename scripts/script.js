import Backpack from "./backpack.js";
import backpackObjectArray from "./data.js";

//use constant so that object is not accidentally altered or overwritten
const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since acquired:", everydayPack.backpackAge());

//Create a Backpack object, populate some HTML to display its properties

const updateBackPack = (update) => {
                 let main = document.querySelector("main");
    main.innerHTML = markup(backpack);
    console.info(update);
};  

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
        updateBackPack('Lid status changed. ');
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
};

console.log("The backpack object: ", backpack);
//access object properties
console.log("Pocketnum value: ", backpack.pocketNum);
console.log("Strap length Left before: ", backpack.strapLength.left);
//using methods
backpack.newStrapLength(10, 15);
console.log("Strap length Left after: ", backpack.strapLength.left);

console.log("Pocketnum value: ", backpack["pocketNum"]);
//bracket notations are more flexible, especially with hyphens
var query = "pocketNum";
console.log("The pocketNum value: ", backpack[query]);

const content = `

                <h1>${everydayPack.name}</h1>
                <ul>
                    <li>Volume: ${everydayPack.volume}</li>
                    <li>Color: ${everydayPack.color}</li>
                    <li>Age: ${everydayPack.backpackAge()}</li>
                    <li>Number of pockets: ${everydayPack.pocketNum}</li>
                    <li>Left strap length: ${everydayPack.strapLengthL}</li>
                    <li>Right strap length: ${everydayPack.strapLengthR}</li>
                    <li>Lid status: ${everydayPack.lidOpen ? "open" : "closed"}</li>
                </ul>
        
`;

//document.body.innerHTML = content;

const main = document.querySelector(".maincontent");
//main.innerHTML = content; 

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);

if (everydayPack.lidOpen === true) {
    console.log("Lid is open");
} else {
    console.log("Lid is closed");
}

console.log(everydayPack.lidOpen ? "open" : "closed");

//switch statements
const usedStatus = () => {
    let age = everydayPack.age;
    age = 100;
    let description;

    switch(true) {
        case age < 30:
            description = "new";
            break;
        case age >= 30 && age < 365:
            description = "lightly used";
            break;
        case age >= 365 && age < 1095:
            description = "used";
            break;
        case age >= 1095:
            description ="old";
            break;
        default:
            console.log("There is no description")
    }

    console.log(`
        Age: ${age} days
        Status: ${description}
    `);
};

usedStatus();

const addPack = (currentPack) => {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
        <h1>${currentPack.name}</h1>
        <ul>
            <li>Volume: ${currentPack.volume}</li>
            <li>Color: ${currentPack.color}</li>
            <li>Number of pockets: ${currentPack.pocketNum}</li>
        </ul>
    `;
    return newArticle;
}

const theArticle = addPack(backpack);
console.log(theArticle);
main.append(addPack(backpack));

//creating event listeners
//import backpackObjectArray
const backpackList = backpackObjectArray.map((backpack) => {
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("backpack");
    backpackArticle.setAttribute("id", backpack.id);

    backpackArticle.innerHTML = `
        <figure class="backpack__image">
            <img src=${backpack.image} alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">Everyday Backpack</h1>
        <ul class="backpack__features">
            <li class="feature backpack__volume">Volume:<span> ${backpack.volume}</span></li>
            <li class="feature backpack__color">Color: <span> ${backpack.color}</span></li>
            <li class="feature backpack__age">Age: <span> ${backpack.age}</span></li>
            <li class="feature backpack__pockets">Number of pockets:<span> ${backpack.pocketNum}</span></li>
            <li class="feature backpack__strap">Left strap length:<span>${backpack.strapLength.left} inches</span></li>
            <li class="feature backpack__strap">Right strap length:<span>${backpack.strapLength.right} inches</span></li>
            <li class="feature backpack__lid">Lid status: <span> ${backpack.lidOpen ? "open" : "closed"}</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
    `;

    const button = backpackArticle.querySelector(".lid-toggle");
    const status = backpackArticle.querySelector(".backpack__lid open");

    //callback funtion lidToggle
    button.addEventListener("click", lidToggle)

    return backpackArticle;
});

//Advanced event listeners function using "this"
const lidToggle = function (event) {
    console.log(event);
    //Find the current backpack object in backpackObjectArray
    let backpackObject = backpackObjectArray.find( ({id}) => id === this.parentElement.id);

    //Toggle lidOpen status
    backpackObject.lidOpen == true ? backpackObject.lidOpen = false : backpackObject.lidOpen = true;

    //Toggle button text
    this.innerText == "Open lid" ? this.innerText = "Close lid" : this.innerText = "Open lid";

    //Set visible property status text
    let status = this.parentElement.querySelector(".backpack__lid span");
    status.innerText == "closed" ? (status.innerText = "open") : (status.innerText = "closed");
}

const maincontent = document.querySelector(".maincontent");
backpackList.forEach((backpack) => {
    maincontent.append(backpack);
});