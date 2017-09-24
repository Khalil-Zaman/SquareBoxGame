rotate_counter = 0;
function draw_player(){
// If the player is in section 3 or 1, draw them white against the black background
// Otherwise (in section 2) draw them black against the white background.
	if (section == 3 || section == 1){
		fill(255, 255, 26);
		fill(255, 204, 0);
	} else if (section == 2){
		fill(255, 204, 0);
	}
	push();
	translate(x+player_width/2, Math.floor(y+(player_height/2)));
	if (jump == true) {
		if (section == 1 || section == 3) { rotate(rotate_counter); rotate_counter+=0.3; }
		else { rotate(rotate_counter); rotate_counter -= 0.3; }
	}
	rectMode(RADIUS);
	rect(0, 0, player_width/2, player_height/2);
	pop();
	rectMode(CORNER);
}

function draw_level(l_array = []){
	// Starts from 0, from top left to bottom right
	stars_rotation++;
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
		} else if (l_array[i] == 4) { /*REWARD*/
			draw_star = true;
			if (i >= sect_3_i) {
				if (stars[3] == 0) draw_star = false;
			} else if (i < sect_1_i) {
				if (stars[1] == 0) draw_star = false;
			} else  {
				if (stars[2] == 0) draw_star = false;
			}
			if (draw_star){
				x1 = (x1+w/2);
				y1 = (y1+h/2);
				if (i >= sect_1_i && i < sect_3_i){
					fill(0);
					if (section==2) hit_check(x1, y1, w/3, w/3, 4);
				} else {
					fill(255);
					if (section == 1) hit_check(x1, y1, w/3, w/3, 4);
					if (section == 3) hit_check(x1, y1, w/3, w/3, 4);
				}
				push();
				translate(x1, y1);
				rotate(stars_rotation/(10));
				rectMode(RADIUS);
				rect(0, 0, w/6, w/6);
				pop();
				rectMode(CORNER);
			}
		} else if (l_array[i] == 5) {
			if (i >= sect_1_i && i < sect_3_i){
				fill(0);
				if (section==2) hit_check(x1, y1, w, h, 5);
			} else {
				fill(255);
				if (section == 1) hit_check(x1, y1, w, h, 5);
				if (section == 3) hit_check(x1, y1, w, h, 5);
			}
			rect(x1, y1, w, h);
			set_color_purple();
			rect(x1+w-(Math.floor(unit_height/3)+1), y1, Math.floor(unit_height/3)+1, h);
		}  else if (l_array[i] == 6) {
			if (i >= sect_1_i && i < sect_3_i){
				fill(0);
				if (section==2) hit_check(x1, y1, w, h, 6);
			} else {
				fill(255);
				if (section == 1) hit_check(x1, y1, w, h, 6);
				if (section == 3) hit_check(x1, y1, w, h, 6);
			}
			rect(x1, y1, w, h);
			set_color_purple();
			rect(x1, y1, Math.floor(unit_height/3)+1, h);
		}

	}
}

function fade_other_sections(){
	if (section == 3){
		fill(123, 123, 123, 123);
		rect(0, 0, windowWidth, Math.ceil(2*windowHeight/3));
	} else if (section == 2){
		fill(123, 123, 123, 123);
		rect(0, 0, windowWidth, Math.ceil(windowHeight/3));
	}
}

function back_btn(){
	if( backscreen.length > 0){
		fill(123);
		stroke(255);
		rect(5,5,30,30);
		fill(0);
		strokeWeight(1);
		line(10,20,30,20);
		line(10,20,20,10);
		line(10,20,20,30);
		noStroke();
	}
}
