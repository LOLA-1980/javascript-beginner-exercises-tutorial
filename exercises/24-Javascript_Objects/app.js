var person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]   
};

// Change the fourth luckyNumber of John Doe to 33
family.members[0].luckyNumbers[3] = 33;

// Create a new person and add it to the family object
var jimmy = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};
family.members.push(jimmy);

// Function to calculate the sum of all lucky numbers in the family
function addAllFamilyLuckyNumbers(anArray){
    let sumOfAllLuckyNumbers = 0;

    for (let person of anArray) {
        for (let luckyNumber of person.luckyNumbers) {
            sumOfAllLuckyNumbers += luckyNumber;
        }
    }

    return sumOfAllLuckyNumbers;
}

// Print the sum of all lucky numbers in the family
console.log(addAllFamilyLuckyNumbers(family.members));
