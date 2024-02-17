//task 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your 
//message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
const personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);


//task 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.

let person: string = "Ahmed Khan";

// Convert to uppercase
console.log(`Uppercase: ${person.toUpperCase()}`);

// Convert to lowercase
console.log(`Lowercase: ${person.toLowerCase()}`);

// Convert to title case
console.log("Titlecase:", person.split(" ") // Split into words
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
            .join(" ")); // Join words back with spaces


//task 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let author: string = "Steve Jobs";
let quote: string = "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.";

console.log(`${author} once said, "${quote}"`);

//task 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
//in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person: string = "Steve Jobs";

console.log(`${famous_person} once said, "${quote}"`);

//task 6
//Stripping Names: Store a person’s name, and include some whitespace characters
//at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after
//striping the white spaces.
let originalName: string = "\t Huzaifa khan \n"; // Includes tabs and newlines
let trimmedName: string = originalName.trim(); // Remove leading and trailing whitespace

console.log(`Original Name: "${originalName}"`);
console.log(`Trimmed Name: "${trimmedName}"`);
//task 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.

//Addition(8 = 5 + 3):
console.log("8 = " + (5 + 3));
//Subtraction (8 = 10 - 2):
console.log("8 = " + (10 - 2));
//Multiplication (8 = 4 * 2):
console.log("8 = " + (4 * 2));
//Division (8 = 16 / 2):
console.log("8 = " + (16 / 2));

//task 8
//You should create four lines that look like this:
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//task 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber: number = 8; // My favorite number is 8
console.log(`My favorite number is ${favoriteNumber}.`);

//task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.

// Program by: [Ahmed khan]
// Date: 2024-02-17
let myDate = new Date();
console.log(myDate.toLocaleString());
// Description: [This program is for viewing real-time history]

//task 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Create an array of friends' names
let names: string[] = ["Ahmed", "Bilal", "Areeb", "Zaid", "Hamza"];

// Print each name one at a time
for (let friend of names) {
    console.log(`Friend's name: ${friend}`);
}

//task 12
//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Print each name one at a time
for (const friend of names) {
    console.log(`Hello, ${friend}! Have a great day!`);
}
//task 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Create an array of transportation modes
let transportationModes: string[]  = ["Honda car", "Suzuki bicycle", "Honda bicycle","Audi"];

// Print statements about each mode
for (let mode of transportationModes) {
    console.log(`I would like to own a ${mode}.`);
}


//task 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner

// Create an array of guests' names
let guestList: string[] = ["Bilal", "Areeb", "Zaid" ];

// Print personalized invitations for each guest
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!`);
}


//task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

// Print personalized invitations for each guest
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!`);
}

// One of the guests can't make it
let guestWhoCantMakeIt: string = "Areeb";
console.log(`${guestWhoCantMakeIt} regrets that they cannot attend.`);

// Replace the guest who can't make it with a new guest
let newGuest: string = "Hamza";
let updatedGuestList: string[] = guestList.map(guest => (guest === guestWhoCantMakeIt) ? newGuest : guest);

// Print second set of invitations
for (let guest of updatedGuestList) {
    console.log(`Dear ${guest}, you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!`);
};
//task 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table. More space is available!");

// Add one new guest to the beginning of the array
guestList.unshift("khzair");

// Add one new guest to the middle of the array
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "saad");

// Use push() to add one new guest to the end of the list
guestList.push("Ahsan");

// Print invitation messages for each person in the updated list
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to the dinner party!`);
}
//task 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



// Inform everyone about the smaller dinner table
console.log("Important update: Due to unforeseen circumstances, we can only invite two guests for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Print invitations for the remaining two guests
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to our dinner party. Please join us for an evening of delightful conversation and good food!`);
}

// Empty the list
guestList.length = 0;
console.log("Guest list is now empty:", guestList);

//task 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Declare the array of locations
let travelWishList: string[] = [
    "Great Barrier Reef, Australia",
    "Tokyo, Japan",
    "Iceland",
    "Amazon Rainforest, Brazil",
    "Petra, Jordan"
];

// Print the original order
console.log(travelWishList);

// Print the array in alphabetical order without modifying it
console.log(travelWishList.slice().sort());

// Print the original order again to show it's unchanged
console.log(travelWishList);

// Print the array in reverse alphabetical order (without modifying it)
console.log(travelWishList.slice().sort().reverse()); // Sorts and reverses a copy

// Print the original order again to show it's unchanged
console.log(travelWishList);

// Reverse the order of the list and print it
travelWishList.reverse();
console.log(travelWishList);

// Reverse the order again to get back to the original order and print it
travelWishList.reverse();
console.log(travelWishList);

// Sort the array alphabetically and print it
travelWishList.sort();
console.log(travelWishList);

// Sort the array in reverse alphabetical order and print it
travelWishList.sort().reverse();
console.log(travelWishList);

//task 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.// Create an array of guests' names
let guestLists: string[] = ["bilal", "areeb", "zaid", "hamza", "saad", "khazir", "ahsan"];

// Print the total number of guests
let totalGuests: number = guestLists.length;
console.log(`Number of people invited to dinner: ${totalGuests}`);

//task 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of mountain names
let mountains: string[] = [
    "Mount Everest",
    "K2",
    "Matterhorn",
    "Denali",
    "Cho Oyu",
    "Manaslu"
];

// Print the mountain names
console.log("List of magnificent mountains:");
for (let mountain of mountains) {
    console.log(mountain);
};

//task 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface Book {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
}
const book1: Book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: 1954,
};
console.log(book1); 

//task 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
const myArray: string[] = ["apple", "banana", "orange"];
console.log(myArray[3]);

//task 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 1. String comparison (True)
let car: string = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");

// 2. Number equality (True)
let age: number = 30;
console.log("Is age === 30? I predict True.");
console.log(age === 30);

// 3. Type difference (False)
let fullName: string = "Alice";
console.log("Is name === 123? I predict False.");
console.log(fullName === "123"); 

// 4. Inequality (True)
let temperature: number = 25;
console.log("Is temperature != 40? I predict True.");
console.log(temperature != 40); 

// 5. Greater than (False)
let score: number = 75;
console.log("Is score > 90? I predict False.");
console.log(score > 90);  

// 6. Less than or equal to (True)
let distance: number = 100;
console.log("Is distance <= 100? I predict True.");
console.log(distance <= 100); 

// 7. Logical AND (True)
let isLoggedIns: boolean = true;
let isAdmins: boolean = true;
console.log("Is isLoggedIn && isAdmin? I predict True.");
console.log(isLoggedIns && isAdmins);

// 8. Logical OR (False)
let haveCompletedTasks: boolean = false;
let hasEarnedReward: boolean = false;
console.log("Is hasCompletedTask || hasEarnedReward? I predict False.");
console.log(haveCompletedTasks || hasEarnedReward);

// 9. Negation (True)
let isInactive: boolean = false;
console.log("Is !isInactive? I predict True.");
console.log(!isInactive);

// 10. Type checking (False)
let value: string = "hello";
let number: Number = 123;
console.log("Is str instanceof Number? I predict False.");
console.log(typeof value ===  typeof number);


//task 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//•Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array


//string tests
let city1: string = "New York";
let city2: string = "New York";
console.log("city1 == city2:", city1 == city2); // True

let word1: string = "hello";
let word2: string = "Hello";
console.log("word1 === word2:", word1 === word2); // False

//Lowercase Function Tests:
// True - Convert to lowercase and compare
let Names: string = "ALICE";
let lowercaseName: string = Names.toLowerCase();
console.log("lowercaseName === 'alice':", lowercaseName === "alice"); // True

// False - Different characters after lowercase
let mixedCase: string = "TeSt";
let loweredMixedCase: string = mixedCase.toLowerCase();
console.log("loweredMixedCase === mixedCase:", loweredMixedCase === mixedCase); // False


//Numerical Tests:
// Equality/Inequality
let ages: number = 35;
console.log("age == 35:", ages == 35); // True
console.log("age != 40:", ages != 40); // True

// Comparisons
let nums: number = 88;
console.log("score > 90:", nums > 90); // False
console.log("score >= 80:", nums >= 80); // True
console.log("score < 75:", nums < 75); // False
console.log("score <= 88:", nums <= 88); // True



//Logical Operators:
// AND - Both conditions must be true
let isLoggedout: boolean = true;
let isAdmin: boolean = false;
console.log("isLoggedIn && isAdmin:", isLoggedout && isAdmin); // False

// OR - At least one condition must be true
let hasCompletedTask: boolean = true;
let hasEnoughPoints: boolean = false;
console.log("hasCompletedTask || hasEnoughPoints:", hasCompletedTask || hasEnoughPoints); // True

//Array
// Item in Array - Exists as a property
let fruits: string[] = ["apple", "banana", "orange"];
let fruit: string = "banana";
console.log("fruit in fruits:", fruit in fruits); // True

// Item Not in Array - Doesn't exist as a property
let colors: string[] = ["red", "green", "blue"];
let color: string = "purple";
console.log("color in colors:", color in colors); // False

//task 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Passing version:
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
//Failing version:
let alien_colors: string = 'yellow'; // or 'red'

if (alien_colors === 'green') {
    console.log("Player just earned 5 points.");
}
  //task 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
let alienColor: string = 'yellow'; // Change to 'green', 'yellow', or 'red'

if (alienColor === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
} else {
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
};

//task 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//If the alien is green:
let alienColor1: string = 'green';

if (alienColor === 'green') {
    console.log("You earned 5 points for shooting the green alien.");
} else if (alienColor === 'yellow') {
    console.log("You earned 10 points for shooting the yellow alien.");
} else if (alienColor === 'red') {
    console.log("You earned 15 points for shooting the red alien.");
}
//If the alien is yellow:
let alienColor2: string = 'yellow';

if (alienColor === 'green') {
    console.log("You earned 5 points for shooting the green alien.");
} else if (alienColor === 'yellow') {
    console.log("You earned 10 points for shooting the yellow alien.");
} else if (alienColor === 'red') {
    console.log("You earned 15 points for shooting the red alien.");
}
//If the alien is red:

let alienColor3: string = 'red';

if (alienColor === 'green') {
    console.log("You earned 5 points for shooting the green alien.");
} else if (alienColor === 'yellow') {
    console.log("You earned 10 points for shooting the yellow alien.");
} else if (alienColor === 'red') {
    console.log("You earned 15 points for shooting the red alien.");
}

//task 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
let ageOfPerson: number = 30; // You can set the age to any value for testing

if (ageOfPerson < 2) {
    console.log("The person is a baby.");
} else if (ageOfPerson >= 2 && ageOfPerson < 4) {
    console.log("The person is a toddler.");
} else if (ageOfPerson >= 4 && ageOfPerson < 13) {
    console.log("The person is a kid.");
} else if (ageOfPerson >= 13 && ageOfPerson < 20) {
    console.log("The person is a teenager.");
} else if (ageOfPerson >= 20 && ageOfPerson < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

//task 29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ['apple', 'banana', 'strawberry'];

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}

//task 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames: string[] = ['admin', 'Bilal', 'Zaid', 'Areeb', 'Hamza'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//task 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.
let users: string[] = []; 
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    users = []; 
}
//task 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.//

let current_users: string[] = ["Ahmed", "Bilal", "Zaid", "Areeb", "Ahsan"];

let new_users: string[] = ["ahmed", "bilal", "zaid", "areeb", "ahsan"];

for (let new_user of new_users) {
    let usernameTaken = false;
    for (let existing_user of current_users) {
        if (new_user.toLowerCase() === existing_user.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(`Username "${new_user}" is not available. Please choose another one.`);
    } else {
        console.log(`Username "${new_user}" is available.`);
        current_users.push(new_user);
    }
}

//task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
    let ordinalEnding: string;

    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${number}${ordinalEnding}`);
}

//task 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

//task 35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Array of animals
let animals: string[] = ["Lion", "Tiger", "Panda"];

for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

//task 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
make_shirt("medium", "I love DarkBlue!");

 //task 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt_default(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
make_shirt_default();
make_shirt_default("Medium"); 
make_shirt_default("Small", "Hello, World!");

//task 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan"); 
describe_city("New Delhi", "India");
describe_city("New York"," United States of America (USA)");

//task 39
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("New York", "USA"));
console.log(cityCountry("Tokyo", "Japan"));

//task 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artistName: string, albumTitle: string, numTracks?: number): Album {
    let album: Album = { artist: artistName, title: albumTitle };
    if (numTracks !== undefined) {
        album.tracks = numTracks;
    }
    return album;
}

let album1: Album = makeAlbum('Atif Aslam', 'Rustom',6);
let album2: Album = makeAlbum('Armaan Malik', 'Aaja Na Ferrari Mein', 5); 
let album3: Album = makeAlbum('Arijit Singh', 'Animal',3);

console.log(album1);
console.log(album2);
console.log(album3);
//task 41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}
let magicians: string[] = ['Penn and Teller', 'David Blaine', 'David Copperfield', 'Criss Angel'];
showMagicians(magicians);

//task 42
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function makeGreat(magicians: string[]): void {
magicians.forEach((magician, index) => {
    magicians[index] = `${magician} the Great`;
});
}
makeGreat(magicians);
console.log(magicians);

//task 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function makeGreatCopy(magicians: string[]): string[] {
    return magicians.map((magician) => `${magician} the Great`);
}
let greatMagicians = makeGreatCopy(magicians.slice());

console.log(magicians);
console.log(greatMagicians);

//task 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Sandwich is ready!");
}

makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Bacon");
makeSandwich("Peanut Butter", "Jelly");

//task 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCarInfo(manufacturer: string, model: string, ...optionalInfo: [string, any][]): { manufacturer: string; model: string; [key: string]: any } {
    return { manufacturer, model, ...Object.fromEntries(optionalInfo) };
}

let car1 = createCarInfo("Toyota", "Camry", ["color", "red"], ["year", 2024]);
let car2 = createCarInfo("Honda", "Civic", ["mileage", 20000], ["features", ["sunroof", "heated seats"]]);
let car3 = createCarInfo("Tesla", "Model S", ["color", "white"], ["range", 400]);

console.log(car1);
console.log(car2);
console.log(car3);