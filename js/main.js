p5.disableFriendlyErrors = true;

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
	//var fps = frameRate();
	//$('#frame-rate').html(fps.toFixed(2));
}