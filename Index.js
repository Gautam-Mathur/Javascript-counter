// this is the javascript code 

let count = 0; // Initialize count variable

// Function to update count display
function updateCount() {
  document.getElementById("Countlabel").textContent = count;
}

// Event listeners for button clicks
document.getElementById("Decreasebtn").addEventListener("click", function() {
  count--;
  updateCount();
});

document.getElementById("ressetbtn").addEventListener("click", function() {
  count = 0;
  updateCount();
});

document.getElementById("increasebtn").addEventListener("click", function() {
  count++;
  updateCount();
});

updateCount(); // Call updateCount initially to display initial value (0)
