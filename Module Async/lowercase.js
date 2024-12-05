function promise(message, delay) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(message)
        },delay)
    });
}

let message = "BEAUTIFUL CODE";
console.log(`${message}`);
promise(message, 5000).
    then(
        ()=>{
            message = message.toLowerCase();
            console.log(`${message}`);
        }
    )
