

//Your code above ^^^
const sing = () => {
    let lyrics = "";
    const chorusLines = ["let it be, ", "there will be an answer, ", "whisper words of wisdom, " ];
    
    // Repeat chorus lines 4 times
    for (let i = 0; i < 4; i++) {
        lyrics += chorusLines[0]; 
    }
    
    lyrics += chorusLines[1]; 

    // Repeat chorus lines 5 times
    for (let i = 0; i < 5; i++) {
        lyrics += chorusLines[0]; 
    }

    lyrics += chorusLines[2]; 

    

    lyrics += "let it be"; 

    return lyrics;
};

console.log(sing());
