var bottombar, topbar;
var player_width, player_height;
var speed;
var x, y;
var gravity;
var current_acceleration, jump_acceleration;
var jump, base, on_blue;
var blue_x, blue_y;

var level_create, level_create_play;
var horizontal_division, vertical_division;
var unit_width, unit_heigh;

var section;
var game_start, level;

function setup() {
	createCanvas(windowWidth,windowHeight);
	if (windowHeight < 500 || windowWidth < 500){
		$('.screen_size_dependent').hide();
	}
	initialize_variables();
	noStroke();
	frameRate(60);
}

function draw() {
	background(0);
	background_setup();
	game_setup();
}

function game_setup(){
	if(level_create == true) {
		draw_level(level_create_array);
		lines();
	} else {
		if (level_create_play == true){
			draw_level(level_create_array);
		} else {
			if (game_start == true) run();
			draw_level(play_level());
			draw_player();
		}
		
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
	gravity = -2;
	on_blue = false;
	
	level_create = level_create_play = false;
	horizontal_division = 30;
	vertical_division = 45;
	game_start = false;
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	
	level = 1;
	jump_acceleration = (Math.sqrt(-gravity*((unit_height*5)-player_width)*2))+gravity;
	suvat_s = 0;
	suvat_u = jump_acceleration;
	suvat_a = -1*gravity;
	t = ((-2*suvat_u) - Math.sqrt((Math.pow(2*suvat_u,2) + (4*suvat_a*2*suvat_s))))/(2*suvat_a);                                                                                                                         
	speed = -1*(5*unit_width)/t;
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
			draw_1(i);
			if (section == 1) hit_check(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1, 1);
		}
		if (l_array[i] == 2){
			fill(255);
			draw_2(i);
			if (section == 1) hit_check(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1, 2);
		}
	} else if (i >= 2*(horizontal_division/3)*vertical_division){
		if (l_array[i] == 1){
			fill(255);
			draw_1(i);
			
			if (section == 3) hit_check(Math.floor((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width+1), Math.floor(unit_height+1), 1);
		}
		if (l_array[i] == 2){
			fill(255);
			draw_2(i);	
			if (section == 3) hit_check(Math.floor((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1, 2);
		}
	} else {
		if (l_array[i] == 1){
			fill(0);
			draw_1(i);
			if (section==2) hit_check(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1, 1);
		}
		if (l_array[i] == 2){
			fill(0);
			draw_2(i);
			if (section==2) hit_check(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1, 2);
		}
	}
}

function draw_1(i){
	rect(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height)+1);
}

function draw_2(i){
	rect(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar) + Math.floor(unit_height/3), unit_width+1, unit_height+1 - Math.floor(unit_height/3));
	fill(65, 105, 225);
	rect(Math.ceil((i % vertical_division)*unit_width), Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar), Math.floor(unit_width)+1, Math.floor(unit_height/3)+1);
}