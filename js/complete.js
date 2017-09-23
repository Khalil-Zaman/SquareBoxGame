var star_counter_1, star_counter_2, star_counter_3;
var star_acceleration;
var star_increase, star_start_time;
var stars_animation_finished;

var death_show_start_time, death_animation_finished;
var death_show_text, death_show_text_increase, death_show_text_acceleration;
var death_fade, death_fade_increase, death_fade_acceleration;

var gold_star_fade, gold_star_fade_increase, gold_star_fade_acceleration;
var gold_star_size, gold_star_size_increase, gold_star_size_acceleration;
var gold_star_rotation, gold_star_rotation_increase, gold_star_rotation_acceleration;
var gold_star_animation_finished;

var options_showing, options_start_time;


function initialize_complete_variables(){
	initialize_star_complete_variables();
	initialize_death_complete_variables();
	initialize_gold_star_variables();
	initialize_options_variables();
}

function initialize_star_complete_variables(){
	star_counter_1 = 0;
	star_counter_2 = 0;
	star_counter_3 = 0;
	star_acceleration = 0.01;
	star_increase = 0;
	star_start_time = 0;
	stars_animation_finished = false;
}

function initialize_death_complete_variables(){
	death_show_start_time = 0;
	death_animation_finished = false;

	death_fade_increase = 5;
	death_fade_acceleration = 0.2;
	death_fade = 25;

	death_show_text = windowWidth/4;
	death_show_text_increase = 1;
	death_show_text_acceleration = 0.4;
}

function initialize_gold_star_variables(){
	gold_star_animation_finished = false;
	gold_star_rotation = 3;

	gold_star_fade_increase = 5;
	gold_star_fade_acceleration = 0.2;
	gold_star_fade = 25;

	gold_star_size = 0;
	gold_star_size_increase = 1;
	gold_star_size_acceleration = 0.1;

	gold_star_rotation = 3;
	gold_star_rotation_increase = 1;
	gold_star_rotation_acceleration = 0.5;
}

function initialize_options_variables(){
	options_showing = false;
	options_start_time = 0;
}

function level_complete(){
	level_complete_box();
	level_complete_congrats();
	level_complete_stars();
	level_complete_deaths();
	level_complete_gold_star();
	level_complete_options();
	level_complete_set_cookie();
}

function level_complete_set_cookie(){
	sum = str(stars[1] + stars[2] + stars[3]);
	days = 30/(24*60*60*1000);
	name = arc+'-LEVEL-'+level;
	value = deaths + "-" + sum;
	$.cookie(name, value);
}

function drawArrow(cx, cy, len, angle){
  strokeWeight(1);
  stroke(255);
  push();
  translate(cx, cy);
  rotate(radians(angle));
  line(0,0,len, 0);
  line(len, 0, len - 8, -8);
  line(len, 0, len - 8, 8);
  pop();
  noStroke();
}

function level_complete_box(){
	fill(123, 123, 123, 150);
	rect(0, 0, windowWidth, windowHeight);
	rectMode(RADIUS);
	fill(255);
	rect(windowWidth/2, windowHeight/2, unit_width*10, unit_height*10);
	rectMode(CORNER);
}

function level_complete_congrats(){
	textAlign(CENTER, CENTER);
	fill(0);

	congrats = "CONGRATULATIONS";
  textSize(30);
	text(congrats, windowWidth/2, windowHeight/2 - unit_height*9);

	autosizetext();
	level_complete_t = "LEVEL COMPLETE!";
	text(level_complete_t, windowWidth/2, windowHeight/2 - unit_height*7);
}

function level_complete_stars(){
	sum_stars = ((stars[1]+1)%2) + ((stars[2]+1)%2) + ((stars[3]+1)%2);
	fill(0);
	level_complete_t = "Stars collected: ";
	textAlign(LEFT, CENTER);
	text(level_complete_t, windowWidth/2 - unit_width*9, windowHeight/2 - unit_height*3);
	fill(0);
	for (i = 0; i < 3; i ++){
		stars_blank(windowWidth/2 + unit_width, windowHeight/2-unit_height*3, unit_width/2);
		stars_blank(windowWidth/2 + 4*unit_width, windowHeight/2-unit_height*3, unit_width/2);
		stars_blank(windowWidth/2 + 7*unit_width, windowHeight/2-unit_height*3, unit_width/2);
	}
	if (star_start_time == 0) star_start_time = millis();
	if (millis() - star_start_time > 500){
		if (sum_stars > 0){
			for (i = 0; i < sum_stars; i++){
				if (i == 0)	stars_added_animation(windowWidth/2 + unit_width, windowHeight/2-unit_height*3, star_counter_1);
				else if (i == 1) stars_added_animation(windowWidth/2 + 4*unit_width, windowHeight/2-unit_height*3, star_counter_2);
				else if (i == 2 ) stars_added_animation(windowWidth/2 + 7*unit_width, windowHeight/2-unit_height*3, star_counter_3);

				if (star_counter_1 < unit_width/2){
					star_increase += star_acceleration;
					star_counter_1 += star_increase;
					if (star_counter_1 >= unit_width/2) { star_increase = 0; star_counter_1 = Math.ceil(unit_width/2); };
				} else {
					if (star_counter_2 < unit_width/2){
						star_increase += star_acceleration;
						star_counter_2 += star_increase;
						if (star_counter_2 >= unit_width/2) { star_increase = 0; star_counter_2 = Math.ceil(unit_width/2);}
					} else {
						if (star_counter_3 < unit_width/2){
							star_increase += star_acceleration;
							star_counter_3 += star_increase;
							if (star_counter_3 >= unit_width/2) { star_counter_3 = Math.ceil(unit_width/2);}
						}
					}
				}
				if (sum_stars == 3 && star_counter_3 >= unit_width/2) stars_animation_finished = true;
				if (sum_stars == 2 && star_counter_2 >= unit_width/2) stars_animation_finished = true;
				if (sum_stars == 1 && star_counter_1 >= unit_width/2) stars_animation_finished = true;
			}
		} else {
			stars_animation_finished = true;
		}
	}

}

function stars_blank(x1, y1, star_width){
	push();
	translate(x1, y1);
	rotate(radians(45));
	rectMode(RADIUS);
	fill(123,123,123, 123);
	rect(0, 0, star_width, star_width);
	pop();
}

function stars_added_animation(x1, y1, star_width){
	push();
	translate(x1, y1);
	rotate(radians(45));
	rectMode(RADIUS);
	fill(0);
	rect(0, 0, star_width, star_width);
	pop();
}

function level_complete_deaths(){
	fill(0);
	level_complete_t = "Number of deaths: "
	textAlign(LEFT, CENTER);
	text(level_complete_t, windowWidth/2 - unit_width*9, windowHeight/2);
	if (stars_animation_finished) {
		textSize(death_show_text);
		if (deaths == 0) fill(255,215,0, death_fade);
		else fill(0, death_fade);

		death_show_text_increase += death_show_text_acceleration;
		death_show_text -= death_show_text_increase;

		death_fade_increase+=death_fade_acceleration;
		death_fade+=death_fade_increase;

		if(death_fade > 255) death_fade = 255;
		if (death_show_text < windowWidth/35) death_show_text = windowWidth/35;
		textAlign(CENTER, CENTER);
		text(deaths, windowWidth/2 +unit_width*4, windowHeight/2);
		if (death_show_text == windowWidth/35 && death_fade == 255) death_animation_finished = true;
		if (death_animation_finished == true && deaths != 0){
			 txt ="Collect all three stars without dying to unlock bonus levels";
			 if (death_show_text/3 > 12) textSize(death_show_text/3);
			 else textSize(12);
			 text(txt, windowWidth/2, windowHeight/2 + unit_height*3);
		}
	}
}

function level_complete_gold_star(){
	if (deaths == 0 && stars[1] == 0 && stars[2] == 0 && stars[3] == 0 && death_animation_finished == true){

		gold_star_rotation_increase += gold_star_rotation_acceleration;
		gold_star_rotation += gold_star_rotation_increase;

		gold_star_fade_increase += gold_star_fade_acceleration;
		gold_star_fade += gold_star_fade_increase;

		gold_star_size_increase += gold_star_size_acceleration;
		gold_star_size += gold_star_size_increase;


		if(gold_star_size >= unit_width) gold_star_size = unit_width;
		if(gold_star_fade >= 255) gold_star_fade = 255;
		if(gold_star_size == unit_width && gold_star_fade == 255) gold_star_rotation = 45;
		push();
		translate(windowWidth/2, windowHeight/2 + unit_height*3);
		rotate(radians(gold_star_rotation));
		rectMode(RADIUS);
		fill(255,215,0, gold_star_fade);
		rect(0, 0, gold_star_size, gold_star_size);
		pop();
		if(gold_star_size == unit_width && gold_star_fade == 255 && gold_star_rotation == 45) gold_star_animation_finished = true;
	}
}

function level_complete_options(){
	if (deaths == 0 && (stars[1] + stars[2] + stars[3]) == 0){
		if (gold_star_animation_finished == true) {
			if (options_start_time == 0) options_start_time = millis();
			if (millis() - options_start_time > 500) options_display();
		}
	} else if (death_animation_finished == true){
		options_display();
	}
}

function options_display(){
	textSize(14);
	textAlign(LEFT, CENTER);
	y1 = windowHeight/2 + unit_height*7;

	fill(0)
	x1 = windowWidth/2 - unit_width*9;
	rect(x1, y1, unit_width*5, unit_height*2);
	fill(255);
	text("Play again", x1+unit_width, y1 + unit_height);

	fill(0)
	x1 = windowWidth/2 - unit_width*3;
	rect(x1, y1, unit_width*6, unit_height*2);
	fill(255);
	text("Home", x1+unit_width, y1 + unit_height);

	fill(0);
	x1 = windowWidth/2 + 4*unit_width;
	rect(x1, y1, unit_width*5, unit_height*2);
	fill(255);
	text("Next Level", x1+unit_width, y1 + unit_height);

	options_showing = true;
}
