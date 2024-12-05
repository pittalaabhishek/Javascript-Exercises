const tasks = [
    (index, callback)=>{
        setTimeout(callback(), 1000);
    },
    (index, callback)=>{
        setTimeout(callback(), 3000);
    },
    (index, callback)=>{
        setTimeout(callback(), 5000);
    },
    (index, callback)=>{
        setTimeout(callback(), 7000);
    }
];

function taskScheduler(tasks) {
    callback(0, tasks);
}

function callback(index, tasks) {
    console.log(`Task ${index} completed`);
    if(++index < tasks.length) {
        return callback(index, tasks);
    }
}
taskScheduler(tasks);