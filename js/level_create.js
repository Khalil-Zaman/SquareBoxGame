var level_create_array =[];

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

