// Your code here:
const bottlesOfMilk = () => {
    let lyrics = "";

    const chorusLines = ["bottles of milk on the wall, ", " bottles of milk. ", "Take one down and pass it around, " ];
    
    // Repeat chorus lines 4 times
    for (let i = 99; i >= 1; i--) {
        lyrics += i + " " + chorusLines[0] + i + chorusLines[1]; 
        if (i == 1) {
            lyrics += chorusLines[2] + (i - 1) + " " + chorusLines[0];
        } else {
            lyrics += "no more bottles of milk on the wall.";
        }
        lyrics += "\n";
    }

    lyrics += "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.";

    return lyrics;
    
}

console.log(bottlesOfMilk());