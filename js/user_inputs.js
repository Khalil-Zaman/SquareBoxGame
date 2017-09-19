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

function mousePressed() {
	if (mouse_in_canvas()){
		if(mouse_in_back_btn() && backscreen.length > 0){
			screen = backscreen[backscreen.length - 1];
			section = 3;
			base = windowHeight-player_height-bottombar;
			reset();
			if (backscreen.length > 0){
				backscreen.length -= 1;
			}
		}
		else if (screen == 1){
			screen1();
		} else if (screen == 3){
			screen3();
		} else if (screen == 4){
			if (level_create == true){
				change_unit();
			} else {
				if(jump == false && game_start == true) player_jump();
				if (game_start == false) { game_start = true;}
			}
		}
	}
}
/*
var been_pressed = false, been_released = true;

function mouseReleased() {
	$('#messages').html(count + " released");
	if (screen == 4) 
	been_released = true;
	been_pressed = false;
}*/

function screen1(){
	backscreen.push(screen);
	screen = 3;
}

function screen3(){
	backscreen.push(screen);
	width = Math.floor(windowWidth/7);
	height = Math.floor(windowHeight/7);
	box_dimension = width;
	if (height<width) box_dimension = height;
	level_no = 1;
	for (iy = 1; iy < 6; iy+=2){
		for (i = 1; i < 7; i+=2){
			x1 = width*i;
			y1 =  Math.floor(iy*windowHeight/6)-Math.floor(box_dimension/2);
			if (box_dimension < width){
				x1 = x1 + width/2 - box_dimension/2;
			}
			if (mouseX > x1 && mouseX < x1+box_dimension && mouseY > y1 && mouseY < y1+box_dimension){
				level = level_no;
				screen = 4;
			}
			level_no++;
		}
	}
	reward_initiliazation();
}

function mouse_in_back_btn(){
	if (mouseX >= 5 && mouseX <= 30 && mouseY >= 5 && mouseY <= 30) return true;
	return false;
}