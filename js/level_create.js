var level_create_array =[];
var pressed = false;
function mousePressed() {
	if (mouse_in_canvas()){
		if (level_create == true){
			change_unit();
		} else {
			if(jump == false && game_start == true && pressed == false) player_jump();
			if (game_start == false) { game_start = true; pressed = true; }
		}
	}
}

function mouseReleased() {
  pressed = false;
}

function mouse_in_canvas(){
	return ((mouseY < windowHeight - bottombar) && (mouseY > topbar));
}

function change_unit(){	
	unit_y = Math.floor((mouseY - topbar)/unit_height);
	unit_x = Math.floor(mouseX/unit_width);

	pos = (unit_y*vertical_division) + unit_x;
	if (level_create_array[pos] == 0) level_create_array[pos] = 1;
	else if (level_create_array[pos] == 1) level_create_array[pos] = 2;
	else if (level_create_array[pos] == 2) level_create_array[pos] = 0;
}

