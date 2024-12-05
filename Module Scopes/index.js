let globalVariable = "Good Evening";

function helloWorld() {
    console.log(`${globalVariable}`); //printing global variable inside a function
    let myNum = 100;
}
helloWorld();

//console.log(`${myNum}`); -> ReferenceError: myNum is not defined
let num = 600;
if(num % 2 === 0){
    console.log("Even number");
    let blockVariable1 = "insideBlock";
    const blockVariable2 = "constInsideBlock";
}
//console.log(`${blockVariable1}`); ReferenceError: blockVariable1 is not defined
//console.log(`${blockVariable2}`); ReferenceError: blockVariable2 is not defined

//Scope chaining

function parent() {
    const parentVariable = "outsideChildFunction";
    console.log(`${number}`); // parent is trying to access child functions variable which gives a reference error
    function child(){
        console.log(`${parentVariable}`); //child accessing parent variable is possible
        const number = 10; 
    };
}
//child(); -->child is undefined error because child function is outside the global execution context