function draw_player(){
// If the player is in section 3 or 1, draw them white against the black background
// Otherwise (in section 2) draw them black against the white background.
	if (section == 3 || section == 1){
		fill(255);
	} else if (section == 2){
		fill(0);
	}
	rect(x, y, player_width, player_height);
}

function draw_level(l_array = []){
	// Starts from 0, from top left to bottom right
	noStroke();
	lim = l_array.length;
	for (i = 0; i < lim; i++){
		draw_unit(i, l_array);
	}
}

function draw_unit(i, l_array){
	if (l_array[i] != 0){
	
		x1 = Math.ceil((i % vertical_division)*unit_width);
		y1 = Math.floor((Math.floor(i/vertical_division)*unit_height) +  topbar)
		w = Math.floor(unit_width)+1;
		h = Math.floor(unit_height)+1;
		
		if (l_array[i] == 1){
			if (i >= sect_1_i && i < sect_3_i){
				fill(0);
				if (section == 2) hit_check(x1, y1, w, h, 1);
			} else {
				fill(255);
				if (section == 1) hit_check(x1, y1, w, h, 1);
				if (section == 3) hit_check(x1, y1, w, h, 1);
			}
			rect(x1, y1, w, h);
		} else if (l_array[i] == 2) {
			if (i >= sect_1_i && i < sect_3_i){
				fill(0);
				if (section==2) hit_check(x1, y1, w, h, 2);
			} else {
				fill(255);
				if (section == 1) hit_check(x1, y1, w, h, 2);
				if (section == 3) hit_check(x1, y1, w, h, 2);
			}
			rect(x1, y1, w, h);
			fill(65, 105, 225);
			rect(x1, y1, w, Math.floor(unit_height/3)+1);
		} else if (l_array[i] == 3) {
			if (i >= sect_1_i && i < sect_3_i){
				fill(0);
				if (section==2) hit_check(x1, y1, w, h, 3);
			} else {
				fill(255);
				if (section == 1) hit_check(x1, y1, w, h, 3);
				if (section == 3) hit_check(x1, y1, w, h, 3);
			}
			rect(x1, y1, w, h);
			fill(65, 105, 225);
			rect(x1, y1+h-(Math.floor(unit_height/3)+1), w, Math.floor(unit_height/3)+1);
		}
	}
}
