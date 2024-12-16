// Getting the button and message element
let button = document.getElementById("showMessageButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
    if (message.style.display === "none" || message.style.display === "") { //We do this so that we can toggle between showing and hiding the message on the screen
        message.style.display = "block"; // Show the message
    } else {
        message.style.display = "none"; // Hide the message
    }
});