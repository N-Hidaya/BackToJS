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

//for...in loop and objects
for (const singleObject in nestedObjects) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`
    stuffList.append(listItem);
}

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

//Function declaration
function doSomeMath(a, b) {
    let c = a + b
    return c;
}

//Function expression
const doMoreMath = function (a, b)  {
    let c = a*b;
    return c;
};

console.log(doSomeMath(5,6));
console.log(doMoreMath(5,6));

//Immediately invoked function expression (IIFE)
(function () {
    let a = 4;
    let b = 6;
    let c = doSomeMath(a, b);
    console.log(`The sum of a and b is ${c}`);
})();

//Arrow function with few parameters
const tipCalculator = (sum, percentage, currency, prefix) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    if(prefix){
        console.log(`
            Sum before tip: ${currency}${sum}
            Tip percentage: ${percentage}%
            Tip:            ${currency}${tip.toFixed(2)}
            Total:          ${currency}${total.toFixed(2)}
        `);
    } else {
        console.log(`
            Sum before tip: ${sum}${currency}
            Tip percentage: ${percentage}%
            Tip:            ${tip.toFixed(2)}${currency}
            Total:          ${total.toFixed(2)}${currency}
        `);
    }
};

tipCalculator(29.95, 28, "$", true);

//Using country currencies formatter
const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,

    }).format(value);
    return formattedValue;
};

const finalCalculator = (locale, currency, sum, percentage, callback) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    const finalTip = {
        sum: formatter(locale, currency, sum),
        percentage: percentage + "%",
        tip: formatter(locale, currency, tip),
        total: formatter(local, currency, total)
    };
    callback(finalTip);
};

finalCalculator("de-DE", "EUR", 29.95, 18, printCalculator);

//creating HTML interface with callback
const printCalculator = (finalTip) => {
    const tipTable = document.createElement("table");
    tipTable.innerHTML = `
        <tr>
            <td>Sum before tip</td>
            <td>${finalTip.sum}</td>
        </tr>
        <tr>
            <td>Tip percentage</td>
            <td>$finalTip.percentage</td>
        </tr>
        <tr>
            <td>Tip:</td>
            <td>${finalTip.tip}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>${finalTip.total}</td>
        </tr>
    `;
    document.querySelector("main").append(tipTable);
};