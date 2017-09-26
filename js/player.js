function run(){
	move();
	constant_gravity();
}

function move(){
	if (running){
		if(section == 3 || section == 1){
			if (reverse) x -= speed;
			else x += speed;
		} else if (section == 2){
			if (reverse) x += speed;
			else x -= speed;
		}
		transition_sections();
	}
}

function transition_sections(){
	difference = 0;
	// Transition between section 3 to 2
	if (x+player_width>windowWidth && section == 3){
		difference = (x+player_width) - windowWidth;
		fill(255, 204, 0);
		rect(windowWidth - difference + speed, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference >= player_width){
			change_section(3, 2);
		}
	// Transition between section 2 to 3
	} else if (x+player_width>windowWidth && section == 2 && reverse == true){
		difference = (x+player_width) - windowWidth;
		fill(255, 204, 0);
		rect(windowWidth - difference + speed, (y + (windowHeight - bottombar - topbar)/3) + 1, player_width, player_height);
		if (difference >= player_width){
			change_section(2, 3);
		}
	// Transition from section 2 to 1
	} else if (x<0 && section == 2){
		difference = (x+player_width) ;
		fill(255, 204, 0);
		rect(-difference, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference <= 0){
			change_section(2, 1);
		}
	} else if (x<0 && section == 1){
		difference = (x+player_width) ;
		fill(255, 204, 0);
		rect(-difference, (y + (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference <= 0){
			change_section(1, 2);
		}
	} else if (section == 1 && x > windowWidth){
		level_completed = true;
	}
}

function change_section(from_section, new_section){
	if (fade_animation >= 200){
		fade_animation = 0;
	}
	if (new_section == 2 && from_section == 3){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x -= player_width;
		section = 2;
		base = windowHeight-player_height-bottombar - (((windowHeight-bottombar-topbar)/3)-1);
	} else if (new_section == 1 && from_section == 2){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x = 0;
		section = 1;
		base = windowHeight-player_height-bottombar - (2*(((windowHeight-bottombar-topbar)/3))-1);
	} else if (new_section == 3 && from_section == 2){
		y += (((windowHeight-(bottombar+topbar))/3)-1);
		x -= player_width;
		section = 3;
		base = windowHeight - player_height - bottombar;
	} else if (new_section == 2 && from_section == 1){
		y += (((windowHeight-(bottombar+topbar))/3)-1);
		x -= player_width;
		section = 2;
		base = windowHeight-player_height-bottombar - (((windowHeight-bottombar-topbar)/3)-1);
	}
}

function player_jump(){
	if (running){
		if (jump == false){
			if (blue_base != 0){
				current_acceleration = -jump_acceleration;
				y -= current_acceleration;
				blue_base = 0;
				bottom_blue = false;
			} else {
				current_acceleration = jump_acceleration;
				y -= current_acceleration;
			}
			jump = true;
		}
	}
}


function constant_gravity(){
	y -= current_acceleration;
	jump = true;
	if (bottom_blue == true) {
		current_acceleration -= gravity;
		if (y <= blue_base){
			y = blue_base;
			jump = false;
			current_acceleration = -1*gravity;
		}
	} else {
		current_acceleration += gravity;
		if (y >= base){
			if (blue_base != 0) blue_base = 0;
			y = base;
			jump = false;
			current_acceleration = gravity;
		}
	}
}

var bottom_blue = false;
var blue_base = 0;
function hit_check(sx, sy, w, h, type){
	bottom_blue = false;
	value = collision_detection(sx, sy, w, h, x, y, player_width, player_height);
	if (type == 1) {
		if (value) reset();
	} else if (type == 2) {
		if (value == 1 || value == 3){
			if (current_acceleration <= 0){
				y = sy - player_height;
				jump = false;
				current_acceleration = gravity;
				blue_base = 0;
			} else {
				reset();
			}
		} else if (value == 2 || value == 4){
			if (current_acceleration > 0 || blue_base != 0){
				jump = false;
				bottom_blue = true;
				blue_base = sy + h;
				y = blue_base;
				current_acceleration = -1*gravity;
			} else {
				reset();
			}
		}
	} else if (type == 3) {
		if (value == 3 || value == 4) direction_reverse(6);
		else if (value == 1 || value == 2) direction_reverse(5);
	} else if (type == 4) {
		if (value) {
			stars[section] = 0;
		};
	}
}

function direction_reverse(type){
	// 6 is when the players right hand side hits the obstacles left side
	// 5 is when the players left hand side hits the obstacles right side
	if (section == 2 && type ==  5) { alert("HERE TOO"); reverse = true;}
	else if (section != 2 && type == 5) reverse = false;
	else if (section == 2 && type == 6) { alert("YUP"); reverse = false; }
	else if (section != 2 && type == 6) reverse = true;
}

function collision_detection(sx, sy, w, h, x, y, player_width, player_height){
	condxl = (x >= sx && x <= sx + w); 									// left most x coordinates of player is in the obstacles x range
	condxr = (x + player_width >= sx && x + player_width <= sx + w);	// right most x coordinates of player is in the obstacles x range

	condyt = (y >= sy && y <= sy + h);									// top most coordinates of player is in the obstacles y range
	condyb = (y + player_height >= sy && y + player_height <= sy + h);	// bottom most coordinates of player is in the obstacles y range

	if (condxl && condyb){ // top left of player is in obstacles range
		return 1;
	}
	if (condxl && condyt){ // bottom left of player is in obstacles range
		return 2;
	}
	if (condxr && condyb){ // top right of player is in obstacles range
		return 3;
	}
	if (condxr && condyt){ // bottom right of player is in obstacles range
		return 4;
	}

	// Obstacle is within player
	condxl = (sx >= x && sx <= x + player_width);
	condxr = (sx + w >= x && sx + w <= x + player_width);

	condyt = (sy >= y && sy <= y + player_height);
	condyb = (sy + h >= y && sy + h <= y + player_height);

	if (condxl && (condyb || condyt)){
		return true;
	}
	if (condxr && (condyb || condyt)){
		return true;
	}

	return 0;
}

function reset(){
	if (section == 2){
		x = windowWidth - player_width;
	} else {
		x = 0;
	}
	deaths++;
	y = base;
	current_acceleration = gravity;
	jump = false;
	game_start = false;
	blue_base = 0;
	bottom_blue = false;
	reverse = false;
}

function reset_death(){
	deaths = 0;
}

function complete_reset(){
	section = 3;
	base = windowHeight-player_height-bottombar;
	reset();
	reset_death();
	initialize_complete_variables();
	initialize_star_variables();
}
