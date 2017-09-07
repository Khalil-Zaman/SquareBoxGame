var level_create_array =[];

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

function lines(){
	if (level_create == true){
		// vertical lines
		stroke(123);
		for (i = 0; i<vertical_division; i++){
			line(i*unit_width, topbar, i*unit_width, windowHeight-bottombar);
		}
		// horizontal lines
		for (i = 0; i<horizontal_division; i++){
			line(0, (i*unit_height)+topbar, windowWidth, (i*unit_height)+topbar);
		}
		noStroke();
	}
}