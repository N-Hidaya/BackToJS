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
                    <li>Lid status: ${everydayPack.lidOpen}</li>
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

//Add a navigation section to the DOM
const navContent = `
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Backpacks</a></li>
    <li><a href="#">Other things</a></li>
    <li><a href="#">Contact</a></li>

`;

const mainNav = document.createElement("nav")
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList)

document.querySelector(".sideheader").append(mainNav);

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
    let titleColor = "blue";
    document.querySelector(".title").style.color = titleColor;
    console.log("inside scope:", titleColor);
}

headingColor();
//console.log("Outside scope:", titleColor); Gives error due to titleColor is Let variable


document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

//Handling Arrays
let item = "flashlight";
const collection = ["Piggy", item, 5, true];

collection[2] = "camera"; //changes the value 5 into camera
collection[collection.length] = "New item"; //collection.length would be 4 which creates new index
collection[9] = "at the end"; //you may skip index
console.log(collection[8]);
console.log(collection);

//using Join method
console.log(collection.join(","));

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