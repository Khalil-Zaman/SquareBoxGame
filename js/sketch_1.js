var bottombar = 30;

function setup() {
  //createCanvas(640, 480);
  createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(0);
	background_setup();
	if (mouseIsPressed) {
	fill(0);
	} else {
	fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
}

function background_setup(){
	fill(157);
	rect(0, windowHeight-bottombar, windowWidth, bottombar);
	fill(255);
	rect(0, (windowHeight-bottombar)/3, windowWidth, (windowHeight-bottombar)/3);
	fill(0);
}

function level_1(){
	
}