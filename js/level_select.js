var message;

function level_select_text(){
	textAlign(CENTER);
	textSize(Math.floor(windowHeight/28));
	fill(255);
	text("SELECT A LEVEL", Math.ceil(windowWidth/2), 25);
}

function draw_levels(extras){

	width = Math.floor(windowWidth/7);
	height = Math.floor(windowHeight/7);

	box_dimension = width;
	if (height<width) box_dimension = height;

	fill_i = 0;
	level_no = 1;
	textAlign(CENTER, CENTER);
	for (iy = 1; iy < 6; iy+=2){
		fill((fill_i+=255)%510);
		for (i = 1; i < 7; i+=2){
			x1 = width*i;
			y1 =  Math.floor(iy*windowHeight/6)-Math.floor(box_dimension/2);
			if (box_dimension < width){
				x1 = x1 + width/2 - box_dimension/2;
			}
			rect(x1, y1, box_dimension, box_dimension);
			extras();
			display_level_accomplishments(x1, y1, box_dimension, level_no);
			textSize(box_dimension/4);
			if (level_playable(level_no, x1, y1, box_dimension) > 0){
				fill((fill_i+=255)%510);
				text(level_no, x1+box_dimension/2, y1+box_dimension/2);
				fill((fill_i+=255)%510);
			}
			fill((fill_i+=255)%510);fill((fill_i+=255)%510);
			level_no++;
		}
	}
}

function display_message(message){
	autosizetext();
	textAlign(CENTER, CENTER);
	fill(255);
	text(message, windowWidth/2, windowHeight/3 - 1.5*autosizetext());
}

function level_playable(level_no, x1, y1, width){
	if (enough_stars_for_level(level_no) == false){
		fill(123, 123, 123, 123);
		rect(Math.floor(x1), Math.floor(y1), Math.ceil(width), Math.ceil(width));
		return 0;
	} else {
		if (previous_level_been_completed(level_no) == false){
			fill(123, 123, 123, 123);
			rect(Math.floor(x1), Math.floor(y1), Math.ceil(width), Math.ceil(width));
			return 1;
		} else {
			return 2;
		}
	}
}

function previous_level_been_completed(level_number){
	if (level_number != 1){
		name = arc + "-LEVEL-" + (level_number - 1);
		if ($.cookie(name) == null) return false;
	}
	return true;
}

function enough_stars_for_level(level_no){
	no_total_stars = 0;
	for (level_counter = 1; level_counter <= 9; level_counter++){
		name = arc + "-LEVEL-" + level_counter;
		if ($.cookie(name) != null){
			values = $.cookie(name).split('-');
			no_stars = parseInt(values[1]);
			if (no_stars == 0) no_stars = 3;
			if (no_stars == 1) no_stars = 2;
			if (no_stars == 2) no_stars = 1;
			no_total_stars += no_stars;
		}
	}
	if (no_total_stars < level_no  && level_no != 1) return false;
	return true;
}

function display_level_accomplishments(pos_x, pos_y, width, level_number){
	name = arc + '-LEVEL-' + level_number;
	if ($.cookie(name) != null){
		values = $.cookie(name).split('-');
		no_deaths = parseInt(values[0]);
		no_stars = parseInt(values[1]);
		if(no_stars == 0 && no_deaths == 0){
			draw_gold_star_acclompishment(pos_x, pos_y, width);
		} else {
			draw_stars_accomplishment(pos_x, pos_y, width, no_stars, level_number);
		}
	}
}

function draw_gold_star_acclompishment(pos_x, pos_y, width){
	fill(255, 215, 0);
	push();
	translate(pos_x + width/2, pos_y+width/2);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/5, width/5);
	pop();
}

function draw_stars_accomplishment(pos_x, pos_y, width, no_stars, level_number){
	if (level_number < 4 || level_number > 6) fill(0);
	else fill(255);

	if (no_stars == 0) 			draw_three_stars_accomplishment(pos_x, pos_y, width);
	else if (no_stars == 1) draw_two_stars_accomplishment(pos_x, pos_y, width);
	else if (no_stars == 2) draw_one_stars_accomplishment(pos_x, pos_y, width);
}

function draw_three_stars_accomplishment(pos_x, pos_y, width){

	push();
	translate(pos_x + width/2, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();

	push();
	translate(pos_x + width/2 - 2*width/7, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();

	push();
	translate(pos_x + width/2 + 2*width/7, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();
}

function draw_two_stars_accomplishment(pos_x, pos_y, width){

	push();
	translate(pos_x + width/2 - 1.5*width/7, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();

	push();
	translate(pos_x + width/2 + 1.5*width/7, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();
}

function draw_one_stars_accomplishment(pos_x, pos_y, width){
	push();
	translate(pos_x + width/2, pos_y+3*width/4);
	rotate(radians(45));
	rectMode(RADIUS);
	rect(0, 0, width/14, width/14);
	pop();
}

function draw_levels(extras){

	width = Math.floor(windowWidth/7);
	height = Math.floor(windowHeight/7);

	box_dimension = width;
	if (height<width) box_dimension = height;

	fill_i = 0;
	level_no = 1;
	textAlign(CENTER, CENTER);
	for (iy = 1; iy < 6; iy+=2){
		fill((fill_i+=255)%510);
		for (i = 1; i < 7; i+=2){
			x1 = width*i;
			y1 =  Math.floor(iy*windowHeight/6)-Math.floor(box_dimension/2);
			if (box_dimension < width){
				x1 = x1 + width/2 - box_dimension/2;
			}
			rect(x1, y1, box_dimension, box_dimension);
			extras();
			display_level_accomplishments(x1, y1, box_dimension, level_no);
			textSize(box_dimension/4);
			if (level_playable(level_no, x1, y1, box_dimension) > 0){
				fill((fill_i+=255)%510);
				text(level_no, x1+box_dimension/2, y1+box_dimension/2);
				fill((fill_i+=255)%510);
			}
			fill((fill_i+=255)%510);fill((fill_i+=255)%510);
			level_no++;
		}
	}
}
