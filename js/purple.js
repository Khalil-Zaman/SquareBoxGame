function purple_levels(){
	level_select_text();
	draw_levels(purple_levels_extra_draw);
  complete_reset();
  display_message(message);
}

function set_color_purple(){
  fill(204, 0, 204);
}

function initialize_purple_variables(){
	arc = 'PURPLE';
	message = '';
}

function purple_levels_extra_draw(){
	set_color_purple();
	rect(Math.floor(x1), y1, Math.ceil(box_dimension/10), box_dimension);
	rect(Math.floor(x1 + 9*box_dimension/10), y1, Math.ceil(box_dimension/10), box_dimension);
}
