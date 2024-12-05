let inventory = [];

function addProduct(name, quantity, price) {
    inventory.push({
        name,
        quantity,
        price
    });
}

function removeProduct(productName) {
    const productIndex = inventory.findIndex((product)=>
        product.name === productName
    )
    if(productIndex!=-1){
        inventory.splice(productIndex, 1);
    }else{
        console.log("Product not found");
    }
}

function updateQuantity(productName, productQuantity) {
    const productIndex = inventory.findIndex((product)=>
        product.name === productName
    )
    if(productIndex != -1){
        inventory[productIndex].quantity = productQuantity;
    }else{
        console.log("Product not found");
    }
}

function totalInventoryValue() {
    const totalValue = inventory.reduce((sum, element) => 
        sum+(element.quantity * element.price) , 0
    )
    return totalValue;
}

addProduct("Pen", 600, 10);
addProduct("Eraser", 400, 5);

console.log(inventory);
// Output
// [
//     { product: 'Pen', quantity: 600, price: 10 },
//     { product: 'Eraser', quantity: 400, price: 5 }
// ]

removeProduct("Eraser");
console.log(inventory) // [ { name: 'Pen', quantity: 800, price: 10 } ]

updateQuantity("Pen", 800);

console.log(inventory);
//Output
// [
//     { name: 'Pen', quantity: 800, price: 10 }
// ]

console.log(totalInventoryValue());// 8000
