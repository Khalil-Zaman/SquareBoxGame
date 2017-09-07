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

var sect_1_i, sect_3_i;

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
	
	sect_1_i = (horizontal_division/3)*vertical_division;
	sect_3_i = 2*(horizontal_division/3)*vertical_division;
	
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

function game_setup(){
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
		draw_player();
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW || keyCode == 32) {
		if(jump == false && game_start == true) player_jump();
		if (game_start == false) game_start = true;
	} 
}

var pressed = false;
function mousePressed() {
	if (mouse_in_canvas()){
		if (level_create == true){
			change_unit();
		} else {
			if(jump == false && game_start == true && pressed == false) player_jump();
			if (game_start == false) { game_start = true; pressed = true; }
		}
	}
}

function mouseReleased() {
  pressed = false;
}