var bottombar, topbar;
var player_width, player_height;
var speed;
var x, y;
var gravity;
var current_acceleration, jump_acceleration;
var jump;

var level_create, level_create_play;
var horizontal_division, vertical_division;
var unit_width, unit_heigh;

var section;
var game_start, level;

function setup() {
	createCanvas(windowWidth,windowHeight);
	initialize_variables();
	noStroke();
	frameRate(60);
}

function draw() {
	background(0);
	background_setup();
	if(level_create == true) {
		draw_level(level_create_array);
		lines();
	} else {
		if (level_create_play == true){
			draw_level(level_create_array);
		} else {
			draw_level(play_level());
		}
		if (game_start == true) run();
		else draw_player();
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
	
	level_create = level_create_play = false;
	horizontal_division = 30;
	vertical_division = 45;
	game_start = false;
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	
	level = 1;
	jump_acceleration = Math.sqrt(gravity*((unit_height*5)-player_width)*2);
	suvat_s = 0;
	suvat_u = jump_acceleration;
	suvat_a = -gravity;
	t = ((-2*suvat_u) - Math.sqrt((Math.pow(2*suvat_u,2) + (4*suvat_a*2*suvat_s))))/(2*suvat_a);                                                                                                                         
	speed = (5*unit_width)/t;
	reset();
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
			line(i*unit_width, topbar, i*unit_width, windowHeight-bottombar);
		}
		// horizontal lines
		for (i = 0; i<horizontal_division; i++){
			line(0, (i*unit_height)+topbar, windowWidth, (i*unit_height)+topbar);
		}
		noStroke();
	}
}

function draw_level(l_array = []){
	// Starts from 0, from top left to bottom right
	noStroke();
	for (i = 0; i < l_array.length; i++){
		draw_unit(i, l_array);
	}
}

function draw_unit(i, l_array){
	if (i<(horizontal_division/3)*vertical_division){
		if (l_array[i] == 1){
			fill(255);
			rect(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
			if (section == 1) hit_check(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
		}
	} else if (i >= 2*(horizontal_division/3)*vertical_division){
		if (l_array[i] == 1){
			fill(255);
			rect(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
			if (section == 3) hit_check(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
		}
	} else {
		if (l_array[i] == 1){
			fill(0);
			rect(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
			if (section==2) hit_check(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
		}
	}
}