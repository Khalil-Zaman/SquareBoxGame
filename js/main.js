p5.disableFriendlyErrors = true;
var screen = 1, backscreen = [];

function setup() {
	createCanvas(windowWidth,windowHeight)
	initialize_variables();
	noStroke();
	frameRate(60);
}

function draw() {
	background_setup();
	if (screen == 1) { main_menu_setup(); }
	else if (screen == 3){	blue_levels(); complete_reset(); display_message(message); }
	else if (screen == 4){	game_setup(); }
	back_btn();
}

function initialize_variables(){
	initialize_background_variables();
	initialize_game_variables();
	initialize_tutorial_variables();
}
