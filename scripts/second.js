
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
