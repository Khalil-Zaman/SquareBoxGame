p5.disableFriendlyErrors = true;
var screen = 1, backscreen = [];

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
	else if (screen == 3){	blue_levels(); coin_reset()}
	else if (screen == 4){	game_setup(); }
	back_btn();
}

function back_btn(){
	if( backscreen.length > 0){
		fill(123);
		stroke(255);
		rect(5,5,30,30);
		fill(0);
		line(10,20,30,20);
		line(10,20,20,10);
		line(10,20,20,30);
		noStroke();
	}
}

function mouse_in_back_btn(){
	if (mouseX >= 5 && mouseX <= 30 && mouseY >= 5 && mouseY <= 30) return true;
	return false;
}