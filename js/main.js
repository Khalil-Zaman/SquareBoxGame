p5.disableFriendlyErrors = true;
var screen = 1, backscreen = [];

function setup() {

	var canvas = createCanvas(900,450);
	canvas.parent('canvas-holder');
	windowWidth = 20*45;
	windowHeight = 15*30;
	initialize_variables();
	noStroke();
	frameRate(60);
}

function draw() {
	background_setup();
	//alert(unit_width + " - " +  unit_height);
	if (screen == 1) { main_menu_setup(); }
	else if (screen == 2){ arc_selection_setup(); }
	else if (screen == 3){ blue_levels(); complete_reset(); display_message(message); }
	else if (screen == 4){ game_setup(); }
	else if (screen == 5){ purple_levels(); }
	back_btn();
}

function initialize_variables(){
	initialize_background_variables();
	initialize_game_variables();
	initialize_tutorial_variables();
}
