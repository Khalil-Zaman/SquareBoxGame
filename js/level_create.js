function mousePressed() {
	if (mouse_in_canvas()){
		unit_number();
	}
}

function mouse_in_canvas(){
	return ((mouseY < windowHeight - bottombar) && (mouseY > topbar));
}

function unit_number(){
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	
	unit_y = Math.floor((mouseY - topbar)/unit_height);
	unit_x = Math.floor(mouseX/unit_width);
	
	alert(unit_y);
	alert(unit_x);
}

function change_unit(ux, uy){
	unit_width = windowWidth / vertical_division;
	unit_height = (windowHeight - bottombar - topbar) / horizontal_division;
	
}

