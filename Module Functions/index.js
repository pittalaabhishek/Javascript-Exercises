// Function Declaration

// 1->Function declarations are hoisted, meaning you can call the function before its definition in the code.
// 2->Named Functions: They are always named, which is useful for debugging and stack traces.

// Function Expression

// 1->Function expressions are not hoisted, so you must define the function before calling it.
// 2->They can be anonymous or named, offering flexibility for inline or callback functions.


// Syntax rules for arrow functions

// param => expression;
// (param1, param2) => expression;

// let add = (x, y) => x + y;
// console.log(add(3, 5));  Output: 8

//Arrow function to subtract 2 numbers.--------------------------------------------------------

// const subtract = (a,b) => {
//     return a-b;
// };

// console.log(subtract(9,3));

//----------------------------CALCULATOR--------------------------------------------------------

function calculate(a, b, operator) {
    if(operator === "add") {
        return a+b;
    }
    else if(operator === "subtract") {
        return a-b;
    }
    else if(operator === "multiply") {
        return a*b;
    }
    return a/b;
}

console.log(calculate(3, 5, "multiply")); //15
console.log(calculate(6, 9, "add")); //15
console.log(calculate(24, 9, "subtract")); //15
console.log(calculate(30, 2, "multiply")); //15

//-----------------------------------------------------------------------------------------------

(function(str) {
    const reversedString = str.split("").reverse().join("");
    console.log(reversedString);
}
)("Hello");  // Output is: 0lleH