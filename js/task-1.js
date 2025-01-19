function makeTransaction(quantity, pricePerDroid) {
     let finalPrice = pricePerDroid*quantity
     return "You ordered " + quantity + " droids worth " + finalPrice + " credits!"
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500)); 
