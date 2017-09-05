var bottombar;
var player_width;
var player_height;
var speed;
var x;
var y;
var section;
var gravity;
var current_acceleration;
var jump_acceleration;
var jump;

var level_create = false;
var horizontal_division = 30;
var vertical_division = 45;
function setup() {
	createCanvas(windowWidth,windowHeight);
	initialize_variables();
	noStroke();
}

function draw() {
	background(0);
	background_setup();
	if(level_create == false) run();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		if(jump == false){ player_jump(); }
	}
}

function initialize_variables(){
	bottombar = (windowHeight - (((windowWidth / 45)/2)*30))/2;
	topbar = bottombar;
	player_width = windowWidth/45;
	player_height = player_width;
	speed = 1;
	x = 1200;
	section = 3;
	y = windowHeight-player_height-bottombar;
	gravity = 3;
	current_acceleration = jump_acceleration = 19;
	jump = false;
}

function background_setup(){
	fill(157);
	rect(0, windowHeight-bottombar, windowWidth, bottombar);
	fill(157);
	rect(0, 0, windowWidth, topbar);
	fill(255);
	rect(0, (windowHeight-bottombar-topbar)/3 + topbar, windowWidth, (windowHeight-bottombar - topbar)/3);
	
	if (level_create == true){
		// vertical lines
		for (i = 0; i<vertical_division; i++){
			stroke(123);
			line(i*(windowWidth/vertical_division), topbar, i*(windowWidth/vertical_division), windowHeight-bottombar);
		}
		// horizontal lines
		for (i = 0; i<horizontal_division; i++){
			stroke(123);
			line(0, i*((windowHeight-bottombar-topbar)/horizontal_division)+topbar, windowWidth, i*((windowHeight-bottombar-topbar)/horizontal_division)+topbar);
		}
		noStroke();
	}
}