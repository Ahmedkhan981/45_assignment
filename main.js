//task 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your 
//message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var personName = "Eric";
console.log("Hello ".concat(personName, ", would you like to learn some Python today?"));
//task 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.
var person = "Ahmed Khan";
// Convert to uppercase
console.log("Uppercase: ".concat(person.toUpperCase()));
// Convert to lowercase
console.log("Lowercase: ".concat(person.toLowerCase()));
// Convert to title case
console.log("Titlecase:", person.split(" ") // Split into words
    .map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); }) // Capitalize first letter of each word
    .join(" ")); // Join words back with spaces
//task 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var author = "Steve Jobs";
var quote = "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//task 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
//in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Steve Jobs";
console.log("".concat(famous_person, " once said, \"").concat(quote, "\""));
//task 6
//Stripping Names: Store a person’s name, and include some whitespace characters
//at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after
//striping the white spaces.
var originalName = "\t Huzaifa khan \n"; // Includes tabs and newlines
var trimmedName = originalName.trim(); // Remove leading and trailing whitespace
console.log("Original Name: \"".concat(originalName, "\""));
console.log("Trimmed Name: \"".concat(trimmedName, "\""));
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
var favoriteNumber = 8; // My favorite number is 8
console.log("My favorite number is ".concat(favoriteNumber, "."));
//task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence 
//describing what the program does.
// Program by: [Ahmed khan]
// Date: 2024-02-17
var myDate = new Date();
console.log(myDate.toLocaleString());
// Description: [This program is for viewing real-time history]
//task 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Create an array of friends' names
var names = ["Ahmed", "Bilal", "Areeb", "Zaid", "Hamza"];
// Print each name one at a time
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var friend = names_1[_i];
    console.log("Friend's name: ".concat(friend));
}
//task 12
//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// Print each name one at a time
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var friend = names_2[_a];
    console.log("Hello, ".concat(friend, "! Have a great day!"));
}
//task 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Create an array of transportation modes
var transportationModes = ["Honda car", "Suzuki bicycle", "Honda bicycle", "Audi"];
// Print statements about each mode
for (var _b = 0, transportationModes_1 = transportationModes; _b < transportationModes_1.length; _b++) {
    var mode = transportationModes_1[_b];
    console.log("I would like to own a ".concat(mode, "."));
}
//task 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
// Create an array of guests' names
var guestList = ["Bilal", "Areeb", "Zaid"];
// Print personalized invitations for each guest
for (var _c = 0, guestList_1 = guestList; _c < guestList_1.length; _c++) {
    var guest = guestList_1[_c];
    console.log("Dear ".concat(guest, ", you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
}
//task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
// Print personalized invitations for each guest
for (var _d = 0, guestList_2 = guestList; _d < guestList_2.length; _d++) {
    var guest = guestList_2[_d];
    console.log("Dear ".concat(guest, ", you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
}
// One of the guests can't make it
var guestWhoCantMakeIt = "Areeb";
console.log("".concat(guestWhoCantMakeIt, " regrets that they cannot attend."));
// Replace the guest who can't make it with a new guest
var newGuest = "Hamza";
var updatedGuestList = guestList.map(function (guest) { return (guest === guestWhoCantMakeIt) ? newGuest : guest; });
// Print second set of invitations
for (var _e = 0, updatedGuestList_1 = updatedGuestList; _e < updatedGuestList_1.length; _e++) {
    var guest = updatedGuestList_1[_e];
    console.log("Dear ".concat(guest, ", you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
}
;
//task 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
// Print personalized invitations for each guest
for (var _f = 0, guestList_3 = guestList; _f < guestList_3.length; _f++) {
    var guest = guestList_3[_f];
    console.log("Dear ".concat(guest, ", you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
}
;
// Inform everyone about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Khazir");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Saad");
// Use push() to add one new guest to the end of the list
guestList.push("Ahsan");
// Print new set of invitations
for (var _g = 0, guestList_4 = guestList; _g < guestList_4.length; _g++) {
    var guest = guestList_4[_g];
    console.log("Dear ".concat(guest, ", you are cordially invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
}
;
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
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner this time."));
}
// Print invitations for the remaining two guests
for (var _h = 0, guestList_5 = guestList; _h < guestList_5.length; _h++) {
    var guest = guestList_5[_h];
    console.log("Dear ".concat(guest, ", you are still invited to our dinner party. Please join us for an evening of delightful conversation and good food!"));
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
var travelWishList = [
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
var guestLists = ["bilal", "areeb", "zaid", "hamza", "saad", "khazir", "ahsan"];
// Print the total number of guests
var totalGuests = guestLists.length;
console.log("Number of people invited to dinner: ".concat(totalGuests));
//task 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of mountain names
var mountains = [
    "Mount Everest",
    "K2",
    "Matterhorn",
    "Denali",
    "Cho Oyu",
    "Manaslu"
];
// Print the mountain names
console.log("List of magnificent mountains:");
for (var _j = 0, mountains_1 = mountains; _j < mountains_1.length; _j++) {
    var mountain = mountains_1[_j];
    console.log(mountain);
}
;
var book1 = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: 1954,
};
console.log(book1);
//task 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var myArray = ["apple", "banana", "orange"];
console.log(myArray[3]);
//task 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// 1. String comparison (True)
var car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
// 2. Number equality (True)
var age = 30;
console.log("Is age === 30? I predict True.");
console.log(age === 30);
// 3. Type difference (False)
var fullName = "Alice";
console.log("Is name === 123? I predict False.");
console.log(fullName === "123");
// 4. Inequality (True)
var temperature = 25;
console.log("Is temperature != 40? I predict True.");
console.log(temperature != 40);
// 5. Greater than (False)
var score = 75;
console.log("Is score > 90? I predict False.");
console.log(score > 90);
// 6. Less than or equal to (True)
var distance = 100;
console.log("Is distance <= 100? I predict True.");
console.log(distance <= 100);
// 7. Logical AND (True)
var isLoggedIns = true;
var isAdmins = true;
console.log("Is isLoggedIn && isAdmin? I predict True.");
console.log(isLoggedIns && isAdmins);
// 8. Logical OR (False)
var haveCompletedTasks = false;
var hasEarnedReward = false;
console.log("Is hasCompletedTask || hasEarnedReward? I predict False.");
console.log(haveCompletedTasks || hasEarnedReward);
// 9. Negation (True)
var isInactive = false;
console.log("Is !isInactive? I predict True.");
console.log(!isInactive);
// 10. Type checking (False)
var value = "hello";
var number = 123;
console.log("Is str instanceof Number? I predict False.");
console.log(typeof value === typeof number);
//task 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//string tests
var city1 = "New York";
var city2 = "New York";
console.log("city1 == city2:", city1 == city2); // True
var word1 = "hello";
var word2 = "Hello";
console.log("word1 === word2:", word1 === word2); // False
//Lowercase Function Tests:
// True - Convert to lowercase and compare
var Names = "ALICE";
var lowercaseName = Names.toLowerCase();
console.log("lowercaseName === 'alice':", lowercaseName === "alice"); // True
// False - Different characters after lowercase
var mixedCase = "TeSt";
var loweredMixedCase = mixedCase.toLowerCase();
console.log("loweredMixedCase === mixedCase:", loweredMixedCase === mixedCase); // False
//Numerical Tests:
// Equality/Inequality
var ages = 35;
console.log("age == 35:", ages == 35); // True
console.log("age != 40:", ages != 40); // True
// Comparisons
var nums = 88;
console.log("score > 90:", nums > 90); // False
console.log("score >= 80:", nums >= 80); // True
console.log("score < 75:", nums < 75); // False
console.log("score <= 88:", nums <= 88); // True
//Logical Operators:
// AND - Both conditions must be true
var isLoggedout = true;
var isAdmin = false;
console.log("isLoggedIn && isAdmin:", isLoggedout && isAdmin); // False
// OR - At least one condition must be true
var hasCompletedTask = true;
var hasEnoughPoints = false;
console.log("hasCompletedTask || hasEnoughPoints:", hasCompletedTask || hasEnoughPoints); // True
//Array
// Item in Array - Exists as a property
var fruits = ["apple", "banana", "orange"];
var fruit = "banana";
console.log("fruit in fruits:", fruit in fruits); // True
// Item Not in Array - Doesn't exist as a property
var colors = ["red", "green", "blue"];
var color = "purple";
console.log("color in colors:", color in colors); // False
//task 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Passing version:
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
//Failing version:
var alien_colors = 'yellow'; // or 'red'
if (alien_colors === 'green') {
    console.log("Player just earned 5 points.");
}
