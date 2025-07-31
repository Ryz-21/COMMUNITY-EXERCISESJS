const readline = require('readline');



//Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

  //  the price of a single rose (8) and the number of roses you have (70)
  //  the price of a single lily (10) and the number of lilies you have (50)
  //  the price of a single tulip (2) and the number of tulips you have (120)

//Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. 
// Insert the corresponding values into the variables using the variables declared in the previous step. Finally, 
// declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 
// Display all inventory information in the console in the following form:


// Prices per flower
let priceRose = 8;
let priceLily = 10;
let priceTulip = 2;

// Quantities
let quantityRose = 70;
let quantityLily = 50;
let quantityTulip = 120;

// Total price per type
let totalPriceRoses = priceRose * quantityRose;
let totalPriceLilies = priceLily * quantityLily;
let totalPriceTulips = priceTulip * quantityTulip;

// Total inventory value
let totalFlowers = totalPriceRoses + totalPriceLilies + totalPriceTulips;

// Output
console.log("");
console.log("Roses  - Price: $" + priceRose + " | Quantity: " + quantityRose + " | Total: $" + totalPriceRoses);
console.log("Lilies - Price: $" + priceLily + " | Quantity: " + quantityLily + " | Total: $" + totalPriceLilies);
console.log("Tulips - Price: $" + priceTulip + " | Quantity: " + quantityTulip + " | Total: $" + totalPriceTulips);
console.log("");
console.log("Total inventory value: $" + totalFlowers);
