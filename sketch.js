function setup() {
  // put setup code here
  createCanvas(1280, 720);
  background(32);
}
function generateRandomColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
  //random color
}


function draw() {
  fill(generateRandomColor());
  ellipse(mouseX, mouseY, 50, 50);
}

