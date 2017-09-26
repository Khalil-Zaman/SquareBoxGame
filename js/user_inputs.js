/*
Screen 1: Main main
Screen 3: Level select from blue levels
Screen 4: Play a level
*/

function keyPressed() {
	if (keyCode == UP_ARROW || keyCode == 32) {
		if (screen == 1){
			screen1();
		} else if (screen == 2){
			screen2();
		} else if (screen == 3){
			screen3();
		} else if (screen == 4){
			screen4();
		} else if (screen == 5){
			screen3();
		}
	}
}

function mousePressed() {
	hide_google_ad();
	if (mouse_in_canvas()){
		if (mouse_in_back_btn()) go_back_screen();
		else if (screen == 1)	screen1();
		else if (screen == 2) screen2();
		else if (screen == 3)	screen3();
		else if (screen == 5) screen3();
		else if (screen == 4){
			if (level_create == true){
				change_unit();
			} else {
				screen4();
			}
		}
	}
}

function screen_level_complete_options(){
	if (mouseY >= windowHeight/2 + unit_height*7 && mouseY <= windowHeight/2 + unit_height*9){
		if (mouseX >= windowWidth/2 - unit_width*9 && mouseX <= windowWidth/2 - 4*unit_width){
			complete_reset();
		} else if (mouseX >= windowWidth/2 - 3*unit_width && mouseX <= windowWidth/2 + 3*unit_width){
			go_back_screen();
		} else if (mouseX >= windowWidth/2 + 4*unit_width && mouseX <= windowWidth/2 + 9*unit_width){
			level++;
			complete_reset();
		}
	}
}

function screen4(){
	if (options_showing == true){
		screen_level_complete_options();
	} else {
		if (!tutorial_running){
			if (game_start == false) { game_start = true; running = true;}
			else if (jump == false && game_start == true) player_jump();
		} else {

			can_jump = true;
			if (tutorial_tips[tutorial_counter] == 1){
				//tutorial_running = false;
				if (tutorial_counter == 0) can_jump = false;
				if (tutorial_counter == 1) can_jump = true;
				if (tutorial_counter == 2) can_jump = false;
				if (tutorial_counter == 3) can_jump = false;
				if (tutorial_counter == 4) {can_jump = false; tutorial_running = false;}
				tutorial_counter++;
			}
			if (can_jump && game_start) player_jump();
			game_start = true;
			running = true;
		}
	}
}

function go_back_screen(){
	if (backscreen.length > 0){
		screen = backscreen[backscreen.length - 1];
		complete_reset();
		if (backscreen.length > 0){
			backscreen.length -= 1;
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
	screen = 2;
}

function screen2(){
	backscreen.push(screen);
	if (mouseY <= windowHeight/3) {screen = 3; initialize_blue_variables();}
	else if (mouseY <= 2*windowHeight/3) {screen = 5; initialize_purple_variables();}
}

function screen3(){
	backscreen.push(screen);
	initialize_tutorial_variables();
	click_levels();
	initialize_complete_variables();
	initialize_star_variables();
	reset_death();
}

function click_levels(){
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
				/*if (level_playable(level_no, x1, y1, box_dimension) == 0){
					message = "You need to obtain more stars to play this level";
				} else if (level_playable(level_no, x1, y1, box_dimension) == 1){
					message = "You need to complete the previous level to play this level";
				} else {
					level = level_no;
					screen = 4;
				}*/
				level = level_no;
				screen = 4;
			}
			level_no++;
		}
	}
}

function mouse_in_back_btn(){
	if (mouseX >= 5 && mouseX <= 30 && mouseY >= 5 && mouseY <= 30) return true;
	return false;
}
