p5.disableFriendlyErrors = true;
screen = 1; 

function setup() {
	createCanvas(windowWidth,windowHeight)
	if (windowHeight < 500 || windowWidth < 500){
		$('.screen_size_dependent').hide();
	}
	initialize_game_variables();
	initialize_main_menu_variables();
	noStroke();
	frameRate(60);
}

function draw() {
	background(0);
	background_setup();
	if (screen == 1) { main_menu_setup(); }
	else if (screen == 3){	blue_levels(); }
	else if (screen == 4){	game_setup(); }
	//var fps = frameRate();
	//$('#frame-rate').html(fps.toFixed(2));
}