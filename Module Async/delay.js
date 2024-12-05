function delay() {
    setTimeout(()=>{
        console.log("delayed message")
    },3000);
    console.log("Inside delayed function");
}

delay();
console.log("outside delay function");