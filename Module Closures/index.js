function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const closureExample = outerFunction("outside"); // Create a closure
closureExample("inside"); 
// Output:
// Outer Variable: outside
// Inner Variable: inside