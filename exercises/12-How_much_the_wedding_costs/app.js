
let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50) {
        return 4000;
    } else if (guests >= 51 && guests <= 100) {
        return 10000;
    } else if (guests >= 101 && guests <= 200) {
        return 15000
    } else {
        return 20000
    }

    
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
