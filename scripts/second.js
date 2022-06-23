
const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser"];
//Looping through content
const article = document.querySelector("article");
let stuffList = document.createElement("ul");

for (let i=0; i<stuff.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = stuff[i];
    stuffList.append(listItem);
}

//another modern JS method
for (const item of stuff) {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
}

//foreach array method
stuff.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    stuffList.append(listItem);
});

//map() array method
const stuffItems = stuff.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    return listItem;
});

stuffItems.forEach((item) => {
    stuffList.append(item);
});

console.log("stuff: ", stuff);
console.log("stuffItem: ", stuffItems)

const nestedObjects = ["piggy", "headlamp", "pen", "pencil", "eraser"];

//for...in loop and objects
for (const singleObject in nestedObjects) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`
    stuffList.append(listItem);
}

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


//DOM events event handler
const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

//Log when the button is clicked 
button.addEventListener("click", () => {
    button.classList.toggle("active");
    console.log("Button was clicked!");
}, false);

//Update the X and Y displays to show the current mouse position
const mousePosition = (event) => {
    posX.innerText = event.pageX;
    posY.innerText = event.pageY;
};

window.addEventListener("mousemove", mousePosition, false);

//change the color of the box when the mouse enters
container.addEventListener(
    "mouseenter",
    () => {
        container.classList.add("blue");
    },
    false
);

container.addEventListener(
    "mouseleave",
    () => {
        container.classList.remove("blue");
    },
    false
);


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