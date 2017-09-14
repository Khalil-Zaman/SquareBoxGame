var bottombar = 0, topbar = 0;
var player_width, player_height;
var speed;
var x, y;
var gravity;
var current_acceleration, jump_acceleration;
var jump, base;

var level_create, level_create_play;
var horizontal_division, vertical_division;
var unit_width, unit_heigh;

var section;
var game_start, level;

var sect_1_i, sect_3_i;

function initialize_game_variables(){
	//player_width = windowWidth/60;
	//player_height = player_width;
	
	gravity = -1.5;
	section = 3;
	
	level_create = level_create_play = false;
	horizontal_division = 30;
	vertical_division = 45;
	game_start = false;
	
	sect_1_i = (horizontal_division/3)*vertical_division;
	sect_3_i = 2*(horizontal_division/3)*vertical_division;
	
	topbar_bottombar_dependent();
	reset();
}

function topbar_bottombar_dependent(){
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	alert(unit_width);
	alert(unit_height);
	player_width = unit_width;
	player_height = player_width;
	base = windowHeight-player_height-bottombar;
	jump_acceleration = (Math.sqrt(-gravity*((unit_height*5)-player_width)*2))+gravity;
	suvat_s = 0;
	suvat_u = jump_acceleration;
	suvat_a = -1*gravity;
	t = ((-2*suvat_u) - Math.sqrt((Math.pow(2*suvat_u,2) + (4*suvat_a*2*suvat_s))))/(2*suvat_a);                                                                                                                         
	speed = -1*(4*unit_width)/t;
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
		if (game_start == true) run();
		if (level_create_play == true){
			draw_level(level_create_array);
		} else {
			draw_level(play_level());
		}
		draw_player();
	}
}