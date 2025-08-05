const readline = require('readline');



//Question 1: Let's play florist. Declare six variables, remembering to name them according to their purpose:

  //  the price of a single rose (8) and the number of roses you have (70)
  //  the price of a single lily (10) and the number of lilies you have (50)
  //  the price of a single tulip (2) and the number of tulips you have (120)

//Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. 
// Insert the corresponding values into the variables using the variables declared in the previous step. Finally, 
// declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 
// Display all inventory information in the console in the following form:

/*
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
*/


/*
//Question 2: Modify the code from the previous example.
//Assume that the prices of flowers will be constant (they will not change). 
// Declare and initialize the remaining variables in the same way as in the previous example. 
// Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.
// Display all the collected information in the console again.


const ROsePrice = 8;
const lilyprice = 10;
const tulipPrice = 2;

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
console.log("=== Inventario inicial ===");
console.log("Roses  - Price: $" + priceRose + " | Quantity: " + quantityRose + " | Total: $" + totalPriceRoses);
console.log("Lilies - Price: $" + priceLily + " | Quantity: " + quantityLily + " | Total: $" + totalPriceLilies);
console.log("Tulips - Price: $" + priceTulip + " | Quantity: " + quantityTulip + " | Total: $" + totalPriceTulips);
console.log("Total inventory value: $" + totalFlowers);

quantityRose -=20;
quantityLily -=30;

totalPriceRoses = priceRose * quantityRose;
totalPriceLilies = priceLily * quantityLily;
otalPriceTulips = priceTulip * quantityTulip;

// Total inventory value
totalFlowersotalFlowers = totalPriceRoses + totalPriceLilies + totalPriceTulips;

console.log("======inventario actualizado======")

console.log("Roses - Price: $"+ priceRose + "| Quantity:" + quantityRose +" | Total: $" + totalPriceRoses);
console.log("Lilies - Price: $" + priceLily + " | Quantity: " + quantityLily + " | Total: $" + totalPriceLilies);
console.log("Tulips - Price: $" + priceTulip + " | Quantity: " + quantityTulip + " | Total: $" + totalPriceTulips);
console.log("Total inventory value: $" + totalFlowers);
*/


//Estimated time
//15-30 minutes
//Level of difficulty
//Easy
//Objectives
//Familiarize the student with:
//variables (i.e. naming, declaring, initializing and modifying their values)
//Scenario
//Our task will be to create a list of contacts. Initially, the list will be quite simple: 
// we will only write three people to it using the data shown
//  in the table below. In the rest of the course, 
//you will return to this script and systematically extend it 
//with new functionality, using the newly learned elements of
//JavaScript.
//Declare and initialize the variables where you will store
//all the information (nine variables in total). Display in the
//console information about the first and last contact in the
//form: name/phone/email.

/*
let name = "Maxwell Wrigth"
let phone = "(0191) 719 6459"
let email = " CuraBitur.egestas.nunc@nunumanyac.co.uk"

let name1 = "Raja Villareal"
let phone1 = "0866 398 2895"
let email1 = "posuere.vulputate@sed.com"

let name2 = "Helen Richards"
let phone2 = "0800 1111"
let email2= "libero@convalis.edu"

console.log(name + " / " + phone + " / " + email);

console.log(name1 + " / " + phone1 + " / " + email1);

console.log(name2 + " / " + phone2 + " / " + email2);
*/