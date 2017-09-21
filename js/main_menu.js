function main_menu_setup(){
	main_menu_background();
	main_menu_play_btn();
}

function main_menu_background(){
	background(255);
	fill(0);
	ythird = (windowHeight-topbar-bottombar)/3;
	rect(0, 0, windowWidth, Math.ceil(ythird));
	rect(0, (windowHeight - Math.floor(ythird)), windowWidth,  Math.ceil(ythird));
}

var myFont;
function preload() {
  myFont = loadFont('js/fonts/Orbitron_Medium.otf');
}

function main_menu_play_btn(){
	fill(0);
	textSize((windowHeight-topbar-bottombar)/3);
	textAlign(CENTER, CENTER);
	textFont(myFont);
	text("PLAY", windowWidth/2, windowHeight/2);
	rectMode(CORNER);
}
