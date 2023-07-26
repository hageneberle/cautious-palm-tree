// script.js
const possibleHeadlines = [
  // Include your list of 100 potential headlines here (positive, negative, and neutral).
  // Example:
  "Breakthrough in Fusion Energy Technology Solves Global Energy Crisis",
  "World Leaders Unite to Implement Comprehensive Climate Action Plan",
  // ...and so on...
];

function displayRandomHeadline() {
  const randomIndex = Math.floor(Math.random() * possibleHeadlines.length);
  const generatedHeadline = possibleHeadlines[randomIndex];
  document.getElementById("headline").innerText = generatedHeadline;
}

// Display the first headline immediately
displayRandomHeadline();

// Set interval to display a new headline every 10 minutes (600,000 milliseconds)
setInterval(displayRandomHeadline, 600);
