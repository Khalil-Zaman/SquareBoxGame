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
var unit_width = 45;
var unit_height = 45;
var vertical_division = 45;
var game_start = false;
function setup() {
	createCanvas(windowWidth,windowHeight);
	initialize_variables();
	noStroke();
}

function draw() {
	background(0);
	background_setup();
	draw_level();
	if(level_create == false) {
		if (game_start == true) run();
		else draw_player();
	} else {
		lines();
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW || keyCode == 32) {
		if(jump == false && game_start == true) player_jump();
		if (game_start == false) game_start = true;
	} 
}

function initialize_variables(){
	bottombar = (windowHeight - (((windowWidth / 45)/2)*30))/2;
	topbar = bottombar;
	player_width = windowWidth/60;
	player_height = player_width;
	gravity = 2;
	
	
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	
	jump_acceleration = Math.sqrt(gravity*((unit_height*5)-player_width)*2);
	suvat_s = 0;
	suvat_u = jump_acceleration;
	suvat_a = -gravity;
	t = ((-2*suvat_u) - Math.sqrt((Math.pow(2*suvat_u,2) + (4*suvat_a*2*suvat_s))))/(2*suvat_a);                                                                                                                         
	speed = (6*unit_width)/t;
	alert(t);
	alert(speed);
	reset();
	
	alert(unit_width);
}

function background_setup(){
	fill(157);
	rect(0, windowHeight-bottombar, windowWidth, bottombar);
	fill(157);
	rect(0, 0, windowWidth, topbar);
	fill(255);
	rect(0, (windowHeight-bottombar-topbar)/3 + topbar, windowWidth, (windowHeight-bottombar - topbar)/3);
}

function lines(){
	if (level_create == true){
		// vertical lines
		stroke(123);
		for (i = 0; i<vertical_division; i++){
			line(i*(windowWidth/vertical_division), topbar, i*(windowWidth/vertical_division), windowHeight-bottombar);
		}
		// horizontal lines
		for (i = 0; i<horizontal_division; i++){
			line(0, i*((windowHeight-bottombar-topbar)/horizontal_division)+topbar, windowWidth, i*((windowHeight-bottombar-topbar)/horizontal_division)+topbar);
		}
		noStroke();
	}
}