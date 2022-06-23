import Backpack from "./backpack.js";

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


let backpackContents = ["hello", "headlamp", "pen"];

//To add new items
backpackContents.push("pencil", 5);
//To add new item in front of the array index 0
backpackContents.unshift("pencil", 5);
//hello in index 0 will be gone using shift
backpackContents.shift();
//pen in index 2 will be gone using pop
backpackContents.pop();

//Creating a list of items using function
backpackContents.forEach(function (item) {
    item = `<li>${item}</li>`;
    console.log(item);
});

console.log(backpackContents);

//Find an item
const foundItem = backpackContents.find((item) => item === "headlamp");
console.log(foundItem);

//Remove an item
let remove = "pencil"
backpackContents.splice(backpackContents.indexOf(remove), 1)
console.log(`Array with "${remove}" removed: `, backpackContents);

var numbers = [1,2,3,4,5];
numbers.push(6); // [1,2,3,4,5,6]
numbers.unshift(7); // [7,1,2,3,4,5,6]
numbers.pop(); // [7,1,2,3,4,5]
numbers.shift(); // [1,2,3,4,5]

