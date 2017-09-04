function setup() {
  //createCanvas(640, 480);
  createCanvas(windowWidth - 10,windowHeight);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}