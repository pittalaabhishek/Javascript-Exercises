function rangeIterator(start, end) {
    return {
        current: start,
        last: end,
        next() {
            if (this.current <= this.last) {
                return { value: this.current++, done: false };
            } else {
                return { done: true };
            }
        },
        [Symbol.iterator]() {
            return this;
        }
    };
}

// Create an iterator for numbers from 1 to 10
const range = rangeIterator(1, 10);

// Convert iterator to an array for higher-order functions
const sequence = [...range];

// Perform operations using higher-order functions

// Map: Multiply each number by 2
const doubled = sequence.map(num => num * 2);

// Filter: Get only even numbers
const evens = sequence.filter(num => num % 2 === 0);

// Reduce: Calculate the sum of the sequence
const sum = sequence.reduce((acc, num) => acc + num, 0);

console.log("Original Sequence:", sequence); // [1, 2, 3, ..., 10]
console.log("Doubled:", doubled);           // [2, 4, 6, ..., 20]
console.log("Even Numbers:", evens);        // [2, 4, 6, 8, 10]
console.log("Sum:", sum);                   // 55
