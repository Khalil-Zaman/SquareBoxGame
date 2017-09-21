var star_counter_1, star_counter_2, star_counter_3;
var star_acceleration;
var star_increase, star_start_time;
var stars_animation_finished;

function initalize_complete_variables(){
	initialize_star_complete_variables();
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

function level_complete(){
	level_complete_box();
	level_complete_congrats();
	level_complete_coins();
	level_complete_deaths();
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

function level_complete_coins(){
	sum_coins = ((coins[1]+1)%2) + ((coins[2]+1)%2) + ((coins[3]+1)%2);
	fill(0);
	level_complete_t = "Stars collected: ";
	textAlign(LEFT, CENTER);
	text(level_complete_t, windowWidth/2 - unit_width*9, windowHeight/2 - unit_height*3);
	fill(0);
	for (i = 0; i < 3; i ++){
		coins_blank(windowWidth/2 + unit_width, windowHeight/2-unit_height*3, unit_width/2);
		coins_blank(windowWidth/2 + 4*unit_width, windowHeight/2-unit_height*3, unit_width/2);
		coins_blank(windowWidth/2 + 7*unit_width, windowHeight/2-unit_height*3, unit_width/2);
	}
	if (star_start_time == 0) star_start_time = millis();
	if (millis() - star_start_time > 1000){
		for (i = 0; i < sum_coins; i++){
			if (i == 0)	coin_added_animation(windowWidth/2 + unit_width, windowHeight/2-unit_height*3, star_counter_1);
			else if (i == 1) coin_added_animation(windowWidth/2 + 4*unit_width, windowHeight/2-unit_height*3, star_counter_2);
			else if (i == 2 ) coin_added_animation(windowWidth/2 + 7*unit_width, windowHeight/2-unit_height*3, star_counter_3);

			if (star_counter_1 < unit_width/2){
				star_increase += star_acceleration;
				star_counter_1 += star_increase;
				if (star_counter_1 >= unit_width/2) { star_increase = 0; star_counter_1 = unit_width/2 };
			} else {
				if (star_counter_2 < unit_width/2){
					star_increase += star_acceleration;
					star_counter_2 += star_increase;
					if (star_counter_2 >= unit_width/2) { star_increase = 0; star_counter_2 = unit_width/2}
				} else {
					if (star_counter_3 < unit_width/2){
						star_increase += star_acceleration;
						star_counter_3 += star_increase;
						if (star_counter_3 >= unit_width/2) { star_counter_3 = unit_width/2; stars_animation_finished = true; }
					}
				}
			}
		}
	}

}

function coins_blank(x1, y1, star_width){
	push();
	translate(x1, y1);
	rotate(radians(45));
	rectMode(RADIUS);
	fill(123,123,123, 123);
	rect(0, 0, star_width, star_width);
	pop();
}
 // STAR ANIMATION FINISHED! ADD NO DEATHS AFTER
function coin_added_animation(x1, y1, star_width){
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
	level_complete_t = "No deaths: "
	textAlign(LEFT, CENTER);
	text(level_complete_t, windowWidth/2 - unit_width*9, windowHeight/2);
	text(str(deaths), windowWidth/2 +unit_width*4, windowHeight/2)
}
