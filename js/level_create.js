function mousePressed() {
	if (level_create == true && mouse_in_canvas()){
		change_unit();
	}
}

function mouse_in_canvas(){
	return ((mouseY < windowHeight - bottombar) && (mouseY > topbar));
}

function change_unit(){	
	unit_y = Math.floor((mouseY - topbar)/unit_height);
	unit_x = Math.floor(mouseX/unit_width);

	pos = (unit_y*vertical_division) + unit_x;
	if (level_create_array[pos] == 0) level_create_array[pos] = 1;
	else if (level_create_array[pos] == 1) level_create_array[pos] = 0;
}

function draw_level(){
	// Starts from 0, from top left to bottom right
	noStroke();
	for (i = 0; i < level_create_array.length; i++){
		draw_unit(i);
	}
}

function draw_unit(i){
	if (i<(horizontal_division/3)*vertical_division || i >= 2*(horizontal_division/3)*vertical_division){
		if (level_create_array[i] == 1){
			fill(255);
			rect(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
			hit_check(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
		}
	} else {
		if (level_create_array[i] == 1){
			fill(0);
			rect(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
			hit_check(Math.ceil((i % vertical_division)*unit_width), (Math.floor(i/vertical_division)*unit_height) +  topbar, unit_width+1, unit_height+1);
		}
	}
}

function collision_detection(sx, sy, w, h){
	condxl = (x > sx && x < sx + w); 								// left most x coordinates of player is in the obstacles x range
	condxr = (x + player_width > sx && x + player_width < sx + w);	// right most x coordinates of player is in the obstacles x range
	
	condyt = (y > sy && y < sy + h);								// top most coordinates of player is in the obstacles y range
	condyb = (y + player_height > sy && y + player_height < sy + h);// bottom most coordinates of player is in the obstacles y range
	
	if (condxl && (condyb || condyt)){
		return true;
	}
	if (condxr && (condyb || condyt)){
		return true;
	}
	return false;
}

function hit_check(sx, sy, w, h){
	if (collision_detection(sx, sy, w, h)) reset();
}

function reset(){
	x = 0;
	section = 3;
	y = windowHeight-player_height-bottombar;
	current_acceleration = jump_acceleration;
	jump = false;
	game_start = false;
}