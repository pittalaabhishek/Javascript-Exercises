const nums = [1,2,3,4,5];

let index = nums.length-1;

while(index >= 0) {
    console.log(nums[index--]);
}

//Difference between for..in and for..of

// for..in --------------------------------------------------------------------------

// 1) Iterates over the keys (property names or indices) of an object.
// 2) Used to iterate over enumerable properties (keys) of an object.

// Example:
// const array = [10, 20, 30];
// for (const index in array) {
//   console.log(index, array[index]);
// }
// Output:
// 0 10
// 1 20
// 2 30

// for..of ---------------------------------------------------------------------------

// 1) Used to iterate over iterable objects (e.g., arrays, strings, maps, sets, etc.).
// 2) Iterates over the values of the iterable, not the keys or indexes.

// Example:

// const array = [10, 20, 30];
// for (const value of array) {
//   console.log(value);
// }
// Output: 10, 20, 30

