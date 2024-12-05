function createCounter() {
    let count = 0;
    document.getElementById("increment").addEventListener(
        "click", 
        function increase() {
            count++;
            document.getElementById("output").innerHTML = count;
        }
    )
    document.getElementById("decrement").addEventListener(
        "click", 
        function decrease() {
            count--;
            document.getElementById("output").innerHTML = count;
        }
    );
}
createCounter();
