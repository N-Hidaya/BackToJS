//advantage of using a class vs object constructor method: Classes can be extended
//create template using class
class Backpack {
    constructor(
        //defines parameters
        name,
        volume, 
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        dateAcquired
    ) {
        //Define properties
        //this refers to current object created from the class
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLengthL = strapLengthL;
        this.strapLengthR = strapLengthR;
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
    }

    //A function is a standalone function. A method is a function within an object.
    //Add methods like normal functions
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }

    newStrapLength(lengthLeft, lengthRight){
        this.strapLengthL = lengthLeft;
        this.strapLengthR = lengthRight;
    }

    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; //elapsed time in milliseconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        //math.floor to remove decimals
        return daysSinceAcquired;
    }

}

export default Backpack;