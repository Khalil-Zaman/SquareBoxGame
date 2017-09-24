function blue_levels(){
	level_select_text();
	draw_levels(blue_levels_extra_draw);
  complete_reset();
  display_message(message);
}

function initialize_blue_variables(){
	arc = 'BLUE';
	message = '';
}

function blue_levels_extra_draw(){
	set_color_blue();
	if (level_no>3)	rect(x1, y1, box_dimension, box_dimension/10);
	if (level_no>6)	rect(x1, y1+9*box_dimension/10, box_dimension, box_dimension/10);
}

function set_color_blue(){
  fill(65, 105, 225);
}
