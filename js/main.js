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
function setup() {
	createCanvas(windowWidth,windowHeight);
	initialize_variables();
	alert(frameRate());
	noStroke();
}

function draw() {
	background(0);
	background_setup();
	run();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		if(jump == false){ player_jump(); }
	}
}

function initialize_variables(){
	alert(((windowWidth / 45)/2)*60);
	alert(((windowWidth / 45)/2)*30);
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
	// vertical lines
	m_x = 45;
	for (i = 0; i<m_x; i++){
		stroke(123);
		line(i*(windowWidth/m_x), topbar, i*(windowWidth/m_x), windowHeight-bottombar);
	}
	// horizontal lines
	m_x = 30;
	for (i = 0; i<m_x; i++){
		stroke(123);
		line(0, i*((windowHeight-bottombar-topbar)/m_x)+topbar, windowWidth, i*((windowHeight-bottombar-topbar)/m_x)+topbar);
	}
	noStroke();
}