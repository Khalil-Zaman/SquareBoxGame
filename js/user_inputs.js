function keyPressed() {
	if (keyCode == UP_ARROW || keyCode == 32) {
		if (screen == 1){
			screen1();
		} else if (screen == 3){
			screen3();
		} else if (screen == 4){
			if(jump == false && game_start == true) player_jump();
			if (game_start == false) game_start = true;
		}
	}
}

var pressed = false;
function mousePressed() {
	if (mouse_in_canvas()){
		if (screen == 1){
			screen1();
		} else if (screen == 3){
			screen3();
		} else if (screen == 4){
			if (level_create == true){
				change_unit();
			} else {
				if(jump == false && game_start == true && pressed == false) player_jump();
				if (game_start == false) { game_start = true; pressed = true; }
			}
		}
	
	}
}

function mouseReleased() {
	if (screen == 4) pressed = false;
}

function screen1(){
	screen = 3;
}

function screen3(){
	width = Math.floor(windowWidth/7);
	height = Math.floor(windowHeight/7);
	box_dimension = width;
	if (height<width) box_dimension = height;
	level_no = 1;
	for (iy = 1; iy < 6; iy+=2){
		for (i = 1; i < 7; i+=2){
			x1 = width*i;
			y1 =  Math.floor(iy*windowHeight/6)-Math.floor(box_dimension/2);
			rect(x1, y1, box_dimension, box_dimension);
			if (mouseX > x1 && mouseX < x1+box_dimension && mouseY > y1 && mouseY < y1+box_dimension){
				level = level_no;
				screen = 4;
			}
			level_no++;
		}
	}
}