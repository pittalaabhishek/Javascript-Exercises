let userName = "John"; // Primitive string data type
console.log(`Hello, ${userName}!`); // Can be used to store strings

let age = 25; // Primitive number data type
console.log(`You are ${age} years old.`); // Use case: Displaying a user's age

let isAdult = true; // Primitive boolean data type
if (isAdult) console.log("Access granted!"); // Use case: Decision-making based on conditions

let person = { name: "John", age: 25 }; // Non-primitive object data type
console.log(`${person.name} is ${person.age} years old.`); // Use case: Store related data together

let numbers = [1, 2, 3, 4, 5]; // Non-primitive array data type
console.log(numbers.map(num => num * 2)); // Use case: Store and manipulate lists of items

let greet = function(name) { return `Hello, ${name}!`; }; // Non-primitive function
console.log(greet("John")); // Use case: Encapsulate reusable logic

let set = new Set([1, 2, 2, 3]); // Non-primitive Set object
console.log(set); // Use case: Store unique values

let map = new Map(); // Non-primitive Map object
map.set("name", "John");
console.log(map.get("name")); // Use case: Store key-value pairs with any data type as a key

//-------------------------------------OPERATORS--------------------------------------------------------

let sum = 5 + 3; // Addition
console.log(sum); // Use case: Calculate total price or sum of numbers

let difference = 10 - 4; // Subtraction
console.log(difference); // Use case: Calculate remaining balance or difference

let product = 6 * 7; // Multiplication
console.log(product); // Use case: Calculate areas or product of numbers

let quotient = 20 / 4; // Division
console.log(quotient); // Use case: Distribute items evenly

let remainder = 10 % 3; // Modulo
console.log(remainder); // Use case: Find if a number is even or odd

let power = 2 ** 3; // Exponentiation
console.log(power); // Use case: Calculate powers or growth rates

let isEqual = (5 == "5"); // Loose equality (type conversion allowed)
console.log(isEqual); // Use case: Check if values are the same (loosely)

let isStrictEqual = (5 === "5"); // Strict equality (no type conversion)
console.log(isStrictEqual); // Use case: Check exact value and type

let isNotEqual = (5 != "6"); // Loose inequality
console.log(isNotEqual); // Use case: Check if values differ (loosely)

let isStrictNotEqual = (5 !== "5"); // Strict inequality
console.log(isStrictNotEqual); // Use case: Check for type-safe inequality

let isGreater = (7 > 3); // Greater than
console.log(isGreater); // Use case: Validate age limits (e.g., above 18)

let isLess = (3 < 7); // Less than
console.log(isLess); // Use case: Determine ranking or limits

let isAtLeast = (5 >= 5); // Greater than or equal
console.log(isAtLeast); // Use case: Validate minimum requirements

let isAtMost = (3 <= 5); // Less than or equal
console.log(isAtMost); // Use case: Check if value is within limits

let canVote = (age >= 18 && isCitizen); // Logical AND
console.log(canVote); // Use case: Combine conditions for eligibility

let isWeekend = (day === "Saturday" || day === "Sunday"); // Logical OR
console.log(isWeekend); // Use case: Check if it's a weekend

let isNotWeekend = !(day === "Saturday" || day === "Sunday"); // Logical NOT
console.log(isNotWeekend); // Use case: Negate a condition

let num = 6;
if(num % 6 === 0) { //Truthy condition
    console.log(`${num} is an even number`);
}else {            // Executed when if statement evaluates to false condition
    console.log(`${num} is an odd number`);
}

let email = "john.doe@example.com";
let username = email.slice(0, email.indexOf("@"));  //SLICING
console.log(username); // Output: "john.doe"

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation with `+`
console.log(fullName); // Output: "John Doe"

let password = "12345";
if (password.length < 8) {
    console.log("Password is too short! It must be at least 8 characters.");
} else {
    console.log("Password is valid.");
}
// Output: "Password is too short! It must be at least 8 characters."

//---------------------TYPE CONVERSIONS---------------------------------

let str = "123";
let nums = Number(str); // Convert string to number
console.log(nums); // Output: 123
console.log(typeof nums); // Output: "number"

str = "true";
let bool = (str === "true"); // Convert string to boolean
console.log(bool); // Output: true
console.log(typeof bool); // Output: "boolean"

let dateStr = "2023-12-02";
let dateObj = new Date(dateStr); // Convert string to Date object
console.log(dateObj); // Output: Sat Dec 02 2023 ...

let strr = "apple,banana,cherry";
let arr = strr.split(","); // Convert string to array
console.log(arr); // Output: ["apple", "banana", "cherry"]

let numb = 456;
let stri = String(num); // Convert number to string
console.log(stri); // Output: "456"
console.log(typeof str); // Output: "string"

let truthy = true;
let string = String(bool); // Convert boolean to string
console.log(string); // Output: "true"

let array = ["red", "green", "blue"];
let s = arr.join(", "); // Convert array to string
console.log(s); // Output: "red, green, blue"



