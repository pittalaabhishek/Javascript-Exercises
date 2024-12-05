class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);//This adds element to the end of the queue
    }

    dequeue() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items.shift(); // This operation removes first element in the queue
    }

    front() {
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty() {
        if(this.items.length===0){
            return true;
        }
        return false;
    }
}

const myQueue = new Queue();

myQueue.enqueue(1); //Have added six numbers into the queue
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);

console.log(`Number ${myQueue.dequeue()} is removed`);
console.log(`First element of the queue is ${myQueue.front()}`);
console.log(myQueue.isEmpty());
console.log(`Number ${myQueue.dequeue()} is removed`);
console.log(`First element of the queue is ${myQueue.front()}`);

/*
Output in the console:

Number 1 is removed
First element of the queue is 2
false
Number 2 is removed
First element of the queue is 3

*/