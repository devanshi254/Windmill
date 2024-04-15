// Define the canvas element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions to the full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the windmill dimensions and coordinates
const windmillWidth = 15; // Reduced width
const windmillHeight = 150; // Length kept same
const windmillX = canvas.width * 0.5;
const windmillY = canvas.height * 0.6; // Shifted up

// Define the blade dimensions and coordinates
const bladeLength = 150;
const bladeWidth = 20;
const bladeX = windmillX - bladeLength / 2;
const bladeY = windmillY - windmillHeight / 2;

// Define the pivot point dimensions
const pivotSize = 5; // Size of the pivot point

// Define the animation loop
let angle = 0;
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the windmill blades
  ctx.save();
  ctx.translate(windmillX, windmillY - windmillHeight / 2);
  ctx.rotate(angle);

  // Draw the first blade
  drawBlade(bladeLength, bladeWidth, '#FF0000'); // Red color

  // Draw the second blade
  ctx.rotate((2 * Math.PI) / 3); // Rotate 120 degrees for the second blade
  drawBlade(bladeLength, bladeWidth, '#FF0000'); // Red color

  // Draw the third blade
  ctx.rotate((2 * Math.PI) / 3); // Rotate another 120 degrees for the third blade
  drawBlade(bladeLength, bladeWidth, '#FF0000'); // Red color

  ctx.restore();

  // Draw the windmill body as a rectangle starting from the pivot of blades
  ctx.beginPath();
  ctx.moveTo(windmillX - windmillWidth / 2, windmillY - windmillHeight / 2);
  ctx.lineTo(windmillX + windmillWidth / 2, windmillY - windmillHeight / 2);
  ctx.lineTo(windmillX + windmillWidth / 2, windmillY + windmillHeight / 2);
  ctx.lineTo(windmillX - windmillWidth / 2, windmillY + windmillHeight / 2);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();

  // Draw the pivot point
  ctx.beginPath();
  ctx.arc(windmillX, windmillY - windmillHeight / 2, pivotSize, 0, 2 * Math.PI);
  ctx.fillStyle = '#FFFF00'; // Yellow color for pivot
  ctx.fill();

  // Increment the angle for the next frame
  angle += 0.01;

  // Request the next frame
  requestAnimationFrame(animate);
}

// Function to draw a blade
function drawBlade(length, width, color) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(length / 2, -width / 2);
  ctx.lineTo(length, 0);
  ctx.lineTo(length / 2, width / 2);
  ctx.closePath();

  // Fill the blade with the specified color
  ctx.fillStyle = color;
  ctx.fill();
}

// Start the animation loop
animate();