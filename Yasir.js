"use strict";
//     
//  Assignment #1
// Completed all Installations
//Assighnment #2:
console.log("Hello Word");
let p1 = "Sir Nazeer Ahmed ,";
console.log("Dear " + p1 + " Thank you for inspiring me every day and helping me become the best version of myself");
//     //Assignment #3:
let p2 = "Yasir Ali";
console.log(p2.toString());
console.log(p2.toUpperCase());
console.log(p2.toLowerCase());
//     //Assighnment #4:
let famousQuote1 = "Albert Einstein once said, A person who never made a mistake never tried anything new";
console.log(famousQuote1);
//     //Assighnment #5:
const famousPerson = "Albert Einstein ";
const famousQuote = " A person who never made a mistake never tried anything new";
const message1 = `${famousPerson} once said, "${famousQuote}"`;
console.log(message1);
// Assignment #6
let myName = "\t \n Yasir Ali \n \t";
console.log("\t \n \t \n", myName);
let strippedName = myName.trim();
console.log("", strippedName);
// Assignment #7
console.log("Addition", 5 + 3);
console.log("Subtraction", 10 - 2);
console.log("Multiplication", 4 * 2);
console.log("Division", 16 / 2);
// Asssignment #8
console.log(6 + 2);
console.log(12 - 4);
console.log(4 * 2);
console.log(24 / 3);
//         Assignment #9
let favouriteNumber = 12;
let message = `My favourite Number is ${favouriteNumber} ,`;
console.log(message);
//     Assingnment #10
const Names = ["Azhar", "Abbas", "Hammad", "Asghar"];
console.log(Names[3]);
const names1 = ["Azhar", "Abbas", "Hammad", "Asghar"];
for (const name of names1) {
    console.log(`Hello ${name} Have a great day.`);
}
//        Assignment #11
const Names2 = ["Azhar", "Abbas", "Hammad", "Asghar"];
console.log(Names2[3]);
//  Assignment #12
const names = ["Azhar", "Abbas", "Hammad", "Asghar"];
for (const name of names) {
    console.log(`Hello ${name} Have a great day.`);
}
//  Assignment #13
//  Motercycle  Transportation
let motercycles = ["Honda", "Unique", "United", "Express"];
let randomindex = Math.floor(Math.random() * motercycles.length);
console.log("I would Like to own a " + motercycles[randomindex] + " Motorcycle.");
//  Assignment #14   
//         Guest list Dinner invitation 
let Guestlists = ["Shahid", "Zakir", "Ayaz"];
for (const Guestlist of Guestlists) {
    console.log(` ${Guestlist} " You are Invited to dinner this evening. You are wisdom and insights have been a source of inspiration to us, and we would be honoured to have you as our guest."`);
}
// Assignment #15  
// Original guest list
let guestList2 = ["Shahid", "Zakir", "Ayaz"];
// Print the name of the guest who can't make it
console.log(guestList2[1] + " can't make it to the dinner.");
// Replace the name of the guest who can't make it with a new person you are inviting
const newPerson2 = "Danish";
guestList2[1] = newPerson2;
// Print a second set of invitation messages
console.log("----- Updated Invitation List -----");
for (let i = 0; i < guestList2.length; i++) {
    console.log(`Dear ${guestList2[i]}, you are invited to dinner. Please join us!`);
}
//            ASSIGNMENT #16
// Original guest list
let guestList1 = ["Shahid", "Zakir", "Ayaz"];
// Print the name of the guest who can't make it
console.log(guestList1[1] + " can't make it to the dinner.");
// Replace the name of the guest who can't make it with a new person you are inviting
const newPerson1 = "Danish";
guestList1[1] = newPerson1;
// Print a second set of invitation messages
console.log("----- Updated Invitation List -----");
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are invited to dinner. Please join us!`);
}
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of your array
const firstGuest1 = "Asif";
guestList1.unshift(firstGuest1);
// Add one new guest to the middle of your array
const middleIndex1 = Math.floor(guestList2.length / 2);
const middleGuest1 = "Hafeez";
guestList1.splice(middleIndex1, 0, middleGuest1);
// Use push() to add one new guest to the end of your list 
const lastGuest1 = "Sagar";
guestList1.push(lastGuest1);
console.log("----- Additional Guests Invited -----");
for (let i = 0; i < guestList1.length; i++) {
    console.log(`Dear ${guestList1[i]}, you are invited to dinner. Please join us!`);
}
// ASSIGNMENT #17
let guestList3 = ["Alice", "Bob", "Charlie"];
// Print the name of the guest who can't make it
console.log(guestList3[1] + " can't make it to the dinner.");
// Replace the name of the guest who can't make it with a new person you are inviting
const newPerson3 = "David";
guestList3[1] = newPerson3;
// Print a second set of invitation messages
console.log("----- Updated Invitation List -----");
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Dear ${guestList3[i]}, you are invited to dinner. Please join us!`);
}
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of your array
const firstGuest3 = "Eve";
guestList3.unshift(firstGuest3);
// Add one new guest to the middle of your array
const middleIndex3 = Math.floor(guestList3.length / 2);
const middleGuest3 = "Frank";
guestList3.splice(middleIndex3, 0, middleGuest3);
// Use push() to add one new guest to the end of your list 
const lastGuest3 = "Grace";
guestList3.push(lastGuest3);
console.log("----- Additional Guests Invited -----");
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Dear ${guestList3[i]}, you are invited to dinner. Please join us!`);
}
console.log("Sorry, we can only invite two people for dinner.");
while (guestList3.length > 2) {
    const removedName = guestList3.pop();
    if (removedName) {
        console.log(`Sorry ${removedName}, we can't invite you to dinner anymore.`);
    }
}
console.log("----- Final Invitation List -----");
for (let i = 0; i < guestList3.length; i++) {
    console.log(`Dear ${guestList3[i]}, you are still invited to dinner. Please join us!`);
}
guestList3.splice(0); // Remove all elements from the list
console.log("----- Empty Guest List -----");
if (guestList3.length === 0) {
    console.log("The final list is empty.");
}
else {
    console.log(guestList3.join(", "));
}
// ASSIGNMENT #18
// Store the locations in an array
let placesToVisit = ["UAE", "Canada", "Paris", "Ireland", "Itally"];
// Print the array in its original order
console.log("----- Original Order -----");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying it
console.log("----- Alphabetical Order -----");
console.log([...placesToVisit].sort());
// Show that the array is still in its original order by printing it again
console.log("----- Original Order (Unchanged) -----");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original order 
console.log("----- Reverse Alphabetical Order -----");
console.log([...placesToVisit].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("----- Original Order (Unchanged) -----");
console.log(placesToVisit);
// Reverse the order of the list and print it to show that its order has changed
placesToVisit.reverse();
console.log("----- Reversed Order -----");
console.log(placesToVisit);
// Reverse the order of the list again and print it to show that it's back to its original order
placesToVisit.reverse();
console.log("----- Original Order (Restored) -----");
console.log(placesToVisit);
// Sort the array so it's stored in alphabetical order and print it to show that its order has changed
placesToVisit.sort();
console.log("----- Sorted Alphabetical Order -----");
console.log(placesToVisit);
// Sort the array to change its order into reverse alphabetical and print it to show that its changed.
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("----- Sorted Reverse Alphabetical Order ----- ");
console.log(placesToVisit);
// ASSIGNMENT #19
let guestList4 = ["Shahid", "Zakir", "Ayaz"];
// Print the name of the guest who can't make it
console.log(guestList4[1] + " can't make it to the dinner.");
// Replace the name of the guest who can't make it with a new person you are inviting
const newPerson4 = "Danish";
guestList4[1] = newPerson4;
// Print a second set of invitation messages
console.log("----- Updated Invitation List -----");
for (let i = 0; i < guestList4.length; i++) {
    console.log(`Dear ${guestList4[i]}, you are invited to dinner. Please join us!`);
}
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of your array
const firstGuest4 = "Asif";
guestList4.unshift(firstGuest4);
// Add one new guest to the middle of your array
const middleIndex4 = Math.floor(guestList4.length / 2);
const middleGuest4 = "Hafeez";
guestList4.splice(middleIndex4, 0, middleGuest4);
// Use push() to add one new guest to the end of your list 
const lastGuest4 = "Sagar";
guestList4.push(lastGuest4);
console.log("----- Additional Guests Invited -----");
for (let i = 0; i < guestList4.length; i++) {
    console.log(`Dear ${guestList4[i]}, you are invited to dinner. Please join us!`);
}
console.log(`There will be ${guestList4.length} people at dinner.`);
// ASSIGNMAENT #20
// Create an array to store a list of programming languages
let programmingLanguages5 = ["JavaScript", "Python", "Java", "TypeScript", "C++"];
// Print the list of programming languages
console.log("List of Programming Languages:");
for (let i = 0; i < programmingLanguages5.length; i++) {
    console.log(programmingLanguages5[i]);
}
// ASSIGNMENT #21
// Create an object to store information about countries
let country1 = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 245209815.,
    language: "Urdu"
};
let country2 = {
    name: "China",
    capital: "Beijing",
    population: 1425213088.,
    language: "Mandarin"
};
let country3 = {
    name: "Turkey",
    capital: "Ankara",
    population: 86101467.,
    language: "Turkish"
};
// Print the information about each country
console.log("Country Information:");
console.log("Name:", country1.name);
console.log("Capital:", country1.capital);
console.log("Population:", country1.population);
console.log("Language:", country1.language);
console.log();
console.log("Name:", country2.name);
console.log("Capital:", country2.capital);
console.log("Population:", country2.population);
console.log("Language:", country2.language);
console.log();
console.log("Name:", country3.name);
console.log("Capital:", country3.capital);
console.log("Population:", country3.population);
// ASSIGNMENT #22
// Create an array to store a list of programming languages
let programmingLanguages6 = ["JavaScript", "Python", "Java", "TypeScript", "C++"];
// Try to access an element at an invalid index (out of bounds)
console.log(programmingLanguages6[4]); // Intentional error: trying to access index 5
// Print the list of programming languages
console.log("List of Programming Languages:");
for (let i = 0; i < programmingLanguages6.length; i++) {
    console.log(programmingLanguages6[i]);
}
// ASSIGNMENT #23
let car7 = 'Honda';
// Test 1
console.log("Is car == 'Honda'? I predict True.");
console.log(car7 == "Honda"); // True
let car2 = 'Toyota';
// Test 2
console.log("Is car == 'Toyota'? I predict False.");
console.log(car2 == 'Toyota'); // False
// Test 3
console.log("Is car != 'Suzuki'? I predict True.");
console.log(car7 != 'Suzuki'); // True
// Test 4
console.log("Is car != 'Honda'? I predict False.");
console.log(car7 != 'Honda'); // False
// Test 5
let age1 = 18;
console.log("Is age > 20? I predict False.");
console.log(age1 > 20); // False
// Test 6
let temperature = -8;
console.log("Is temperature < 0? I predict True.");
console.log(temperature < 0); // True
// Test 7
let isRaining = true;
let isSunny = false;
console.log("Is it raining && not sunny? I predict True.");
console.log(isRaining && !isSunny); // True
// Test 8
let x1 = null;
let y1 = undefined;
console.log("Are x and y both false values? I predict true.");
console.log(x1 && !y1);
// ASSIGNMENT #24
// Tests for equality and inequality with strings
let str1 = "hello";
let str2 = "world";
// Equality
console.log(str1 === str2); // False
// Inequality
console.log(str1 !== str2); // True
// Tests using the lower case function
let upperCaseStr = "HELLO";
// Convert to lower case
console.log(upperCaseStr.toLowerCase() === "hello"); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
// Greater than
console.log(num1 > num2); // False
// Less than
console.log(num1 < num2); // True
// Greater than or equal to
console.log(num1 >= num2); // False
// Less than or equal to
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
let x = 5;
let y = 10;
let z = 15;
// "And" operator
console.log(x < y && y < z); // True
// "Or" operator
console.log(x < y || x > z); // True
// Test whether an item is in an array
let array = [1, 2, 3, 4, 5];
// Check if 3 is in the array
console.log(array.includes(3)); // True
// Test whether an item is not in an array
// Check if 6 is not in the array
console.log(!array.includes(6)); // True
// ASSIGNMENT #25
let alien1_color = 'green'; // Alien's color is green
// If statement to test whether the alien’s color is green
if (alien1_color === 'green') {
    console.log('Player just earned 5 points');
}
let alien_color = 'red'; // Alien's color is red
// If statement to test whether the alien’s color is green
if (alien_color === 'green') {
    console.log('Player just earned 5 points');
}
let alien_Color2 = 'green'; // Alien's color is green
// If-else chain to determine points earned based on alien's color
if (alien_Color2 === 'green') {
    console.log('Player just earned 5 points for shooting the alien');
}
else {
    console.log('Player just earned 10 points');
}
let alienColor5 = 'red'; // Alien's color is red
// If-else chain to determine points earned based on alien's color
if (alienColor5 === 'green') {
    console.log('Player just earned 5 points for shooting the alien');
}
else {
    console.log('Player just earned 10 points');
}
// ASSIGNMENT #26
let alien_Color = 'green'; // Alien's color is green/
// If-else chain to determine points earned based on alien's color
if (alien_Color === 'green') {
    console.log('Player just earned 5 points for shooting the alien');
}
else {
    console.log('Player just earned 10 points');
}
let alienColor = 'red'; // Alien's color is red
// If-else chain to determine points earned based on alien's color
if (alienColor === 'green') {
    console.log('Player just earned 5 points for shooting the alien');
}
else {
    console.log('Player just earned 10 points');
}
// ASSIGNMENT #27
// Version 1: Alien is green (5 points)
let alienColor2 = 'green'; // Alien's color is green
// If-else chain to determine points earned based on alien's color
if (alienColor2 === 'green') {
    console.log('Player just earned 5 points');
}
else if (alienColor2 === 'yellow') {
    console.log('Player just earned 10 points');
}
else if (alienColor2 === 'red') {
    console.log('Player just earned 15 points');
}
// Version 2: Alien is yellow (10 points) 
let alienColor3 = 'yellow'; // Alien's color is yellow
// If-else chain to determine points earned based on alien's color
if (alienColor3 === 'green') {
    console.log('Player just earned 5 points');
}
else if (alienColor3 === 'yellow') {
    console.log('Player just earned 10 points');
}
else if (alienColor3 === 'red') {
    console.log('Player just earned 15 points');
}
// Version 3: Alien is red (15 Points)
let alienColor4 = 'red'; // Alien's color is red
// If-else chain to determine points earned based on alien's color
if (alienColor4 === 'green') {
    console.log('Player just earned 5 points');
}
else if (alienColor4 === 'yellow') {
    console.log('Player just earned 10 poins');
}
else if (alienColor4 == "red") {
    console.log("player jut earnned 15 points");
}
// ASSIGNMENT #28
let age = 20; // Set the person's age
// If-else chain to determine the person's stage of life based on their age
if (age < 3) {
    console.log('The person is a baby');
}
else if (age >= 3 && age < 5) {
    console.log('The person is a toddler');
}
else if (age >= 5 && age < 12) {
    console.log('The person is a kid');
}
else if (age >= 12 && age < 18) {
    console.log('The person is a teenager');
}
else if (age >= 18 && age < 65) {
    console.log('The person is an adult');
}
else {
    console.log('The person is an elder');
}
// ASSIGNMENT #29
// Array of favorite fruit
let favoriteFruits = ['banana', 'apple', 'orange'];
// Checking if certain fruits are in the array using independent if statements
if (favoriteFruits.includes('banana')) {
    console.log('You really like bananas!');
}
if (favoriteFruits.includes('apple')) {
    console.log('You really like apples!');
}
if (favoriteFruits.includes('orange')) {
    console.log('You really like oranges!');
}
if (favoriteFruits.includes('strawberry')) {
    console.log('You really like strawberries!');
}
if (favoriteFruits.includes('mango')) {
    console.log('You really like mangoes!');
}
// ASSIGNMENT #30
// Array of usernames
let usernames1 = ['Yasir', 'Raza', 'Sagar', 'Abbas', 'Shahid'];
// Loop through the array and print a greeting to each user
for (let username of usernames1) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// ASSIGNMENT #31
// Array of usernames
let usernames = [];
// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the array and print a greeting to each user
    for (let username of usernames1) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// ASSIGNMENT #32
// List of current usernames
let current_users = ['Yasir', 'Sagar', 'admin', 'Abbas', 'Shahid'];
// List of new usernames
let new_users = ['Raza', 'Hafeez', 'Asif', 'Yasir'];
// Convert all usernames to lowercase for case-insensitive comparison
let lowerCaseCurrentUsers = current_users.map(username => username.toLowerCase());
// Loop through each new username and check if it has been used
for (let newUsername of new_users) {
    let lowerCaseNewUsername = newUsername.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lowerCaseCurrentUsers.includes(lowerCaseNewUsername)) {
        console.log(`The username '${newUsername}' is not available. Please enter a different username.`);
    }
    else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
// ASSIGNMENT #33
// Array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through each number in the array
for (let num of numbers) {
    // Variable to store the ordinal ending
    let ordinal;
    if (num === 1) {
        ordinal = "st";
    }
    else if (num === 2) {
        ordinal = "nd";
    }
    else if (num === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    // Print the number with its ordinal ending
    console.log(`${num}${ordinal}`); // Print the number with its ordinal ending
}
// ASSIGNMENT #34
let pizzas = ["pepperoni", "margherita", "supreme"]; // Array of pizza names
// Loop through each pizza in the array
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`); // Print a sentence using the name of the pizza
}
// Additional line expressing love for pizza
console.log("I really love pizza!");
// ASSIGNMENT #35
// Array of animal names
let animals = ["dog", "cat", "rabbit"];
// Loop through each animal in the array
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// ASSIGNMENT #36
function make_shirt1(size, message) {
    console.log(`The shirt size is ${size} and it says "${message}" on it.`);
}
make_shirt1("XL", "Hello World!"); // Call the function with arguments for size and message
// ASSIGNMENT #37
function make_shirt2(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it says "${message}" on it.`);
}
make_shirt2(); // Large shirt with default message
make_shirt2("medium"); // Medium shirt with default message
make_shirt2("small", "Hello World!"); // Custom-sized shirt with custom message
// ASIIGNMENT #38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi"); // City in default country
describe_city("Lahore"); // City in default country
describe_city("New York", "USA"); // City not in default country
// ASSIGNMENT #39
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("New York", "USA"));
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Ed Sheeran", "Divide", 10);
console.log(album1); // Output: { artist: 'Ed Sheeran', title:'Divide' }
let album2 = make_album("Taylor Swift", "1989", 16);
console.log(album2); // Output:{ artist:'Taylor Swift', title:'1989', tracks:16 }
let album3 = make_album("Post Malone", "Hollywood's Bleeding", 17);
console.log(album3); // Output:{ artist:'Post Malone', title:'Hollywood's Bleeding', tracks:17 }
// ASSIGNMENT #41
function show_magicians8(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians9 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
show_magicians(magicians9);
// ASSIGNMENT #42
function make_great9(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians9(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicians);
show_magicians(magicians);
// ASSIGNMENT #43
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians2 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let greatMagicians = make_great([...magicians]);
show_magicians(magicians);
console.log("------------------------");
show_magicians(greatMagicians);
console.log();
// make_great([...magicians]);
// ASSIGNMENT #44
function orderSandwich(...items) {
    console.log("Sandwich Order Summary:");
    console.log("------------------------");
    console.log("Bread: " + items[0]);
    if (items.length > 1) {
        console.log("Meat: " + items[1]);
        if (items.length > 2) {
            console.log("Toppings:");
            for (let i = 2; i < items.length; i++) {
                console.log("- " + items[i]);
            }
        }
    }
    console.log("------------------------");
}
orderSandwich("Wheat Bread", "Turkey", "Lettuce", "Tomato");
console.log();
orderSandwich("White Bread", "Ham");
console.log();
orderSandwich("Multigrain Bread", "Chicken", "Mayonnaise");
function createCar(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    if (options.length > 0) {
        car.options = Object.assign({}, ...options);
    }
    return car;
}
let car1 = createCar("Toyota", "Camry", { color: "Silver", sunroof: true });
console.log(car1);
let myCar = createCar("Honda", "Civic", { color: "Red" });
console.log(myCar);
let car3 = createCar("Ford", "Mustang");
console.log(car3);
