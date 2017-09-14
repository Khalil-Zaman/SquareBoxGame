var y_animation, main_menu_clicked;
var reverse;

function initialize_main_menu_variables(){
	y_animation = 0;
	main_menu_clicked = false;
	reverse = false;
}

function main_menu_setup(){
	main_menu_animation();
}

function main_menu_animation(){
	if (main_menu_clicked == true){
		main_menu_background();
		if (reverse == false){
			y_animation+=2;
			y_bottom = (windowHeight - Math.floor(ythird)) - y_animation;
			y_top = Math.ceil(ythird)+y_animation;
			if (y_bottom < (y_top-70)){
				reverse = true;
			}
			main_menu_play_btn();
		} else {
			y_animation-=3;
			y_bottom = (windowHeight - Math.floor(ythird)) - y_animation;
			y_top = Math.ceil(ythird)+y_animation;
			if (y_animation <= 0){
				screen = 3;
			}
		}
	} else {
		main_menu_background();
		main_menu_play_btn();
	}
}

function main_menu_background(){
	background(255);
	fill(0);
	ythird = (windowHeight-topbar-bottombar)/3;
	rect(0, 0, windowWidth, Math.ceil(ythird)+y_animation);
	rect(0, (windowHeight - Math.floor(ythird)) - y_animation, windowWidth,  Math.ceil(ythird) + y_animation);
	
}

function main_menu_play_btn(){
	fill(0);
	textSize((windowHeight-topbar-bottombar)/3);
	textAlign(CENTER, CENTER);
	text("PLAY", windowWidth/2, windowHeight/2);
	rectMode(CORNER);
}