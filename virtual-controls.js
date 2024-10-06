// Ensure this code runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for each virtual button to simulate arrow key presses
    document.getElementById('up').addEventListener('click', function() {
        simulateKeyPress("ArrowUp");
    });

    document.getElementById('down').addEventListener('click', function() {
        simulateKeyPress("ArrowDown");
    });

    document.getElementById('left').addEventListener('click', function() {
        simulateKeyPress("ArrowLeft");
    });

    document.getElementById('right').addEventListener('click', function() {
        simulateKeyPress("ArrowRight");
    });

    // Function to simulate a key press event
    function simulateKeyPress(key) {
        const event = new KeyboardEvent('keydown', { key: key });
        document.dispatchEvent(event); // Trigger the event to make the game think an arrow key was pressed
    }
});
