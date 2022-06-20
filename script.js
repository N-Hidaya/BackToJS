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
        <main>
            <article>
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
            </article>
        </main>
`;

document.body.innerHTML = content;
