function run(){
	move();
	constant_gravity();
}

function move(){
	if(section == 3 || section == 1){
		x += speed;
	} else if (section == 2){
		x -= speed;
	}
	if (jump == true) player_jump();
	transition_sections();
}

function transition_sections(){
	difference = 0;
	// Transition between section 3 to 2
	if (x+player_width>windowWidth && section == 3){
		difference = (x+player_width) - windowWidth;
		fill(0);
		rect(windowWidth - difference + speed, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference >= player_width){
			change_section(2);
		}
	// Transition between section 2 to 1
	} else if (x<0 && section == 2){
		difference = (x+player_width) ;
		fill(255);
		rect(-difference, (y - (windowHeight-bottombar-topbar)/3)+1, player_width, player_height);
		if (difference <= 0){
			change_section(1);
		}
	}
}

function change_section(new_section){

	if (new_section == 2){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x -= player_width;
		section = 2;
		base = windowHeight-player_height-bottombar - (((windowHeight-bottombar-topbar)/3)-1);
	} else 
	if (new_section == 1){
		y -= (((windowHeight-(bottombar+topbar))/3)-1);
		x = 0;
		section = 1;
		base = windowHeight-player_height-bottombar - (2*(((windowHeight-bottombar-topbar)/3))-1);
	}
}

function player_jump(){
	if (jump == false){
		current_acceleration = jump_acceleration;
		y -= current_acceleration;
		jump = true;
	}
}


function constant_gravity(){
	//alert("Player y: " + y + ". Player x: " + x);
	y -= current_acceleration;
	current_acceleration += gravity; 
	if (y > base){
		y = base;
		jump = false;
		current_acceleration = gravity;
		//alert("Player y: " + y + ". Player x: " + x);
	}
}

function hit_check(sx, sy, w, h, type){
	on_blue = false;
	if (type == 1) {
		if (collision_detection(sx, sy, w, h)) reset();
	} else if (type == 2) {
		if (collision_detection(sx, sy, w, h) == 1 || collision_detection(sx, sy, w, h) == 3){
			if (current_acceleration <= 0){
				y = sy - player_height;
				jump = false;
				current_acceleration = gravity;
				on_blue = true;
				blue_x = sx;
				blue_y = sy;
			} else {
				reset();
			}
		}
	}
}

function collision_detection(sx, sy, w, h){
	condxl = (x >= sx && x <= sx + w); 									// left most x coordinates of player is in the obstacles x range
	condxr = (x + player_width >= sx && x + player_width <= sx + w);	// right most x coordinates of player is in the obstacles x range
	
	condyt = (y >= sy && y <= sy + h);									// top most coordinates of player is in the obstacles y range
	condyb = (y + player_height >= sy && y + player_height <= sy + h);	// bottom most coordinates of player is in the obstacles y range
	
	if (condxl && condyb){ // top left
		return 1;
	}
	if (condxl && condyt){ // bottom left
		return 2;
	}
	if (condxr && condyb){ // top right
		return 3;
	}
	if (condxr && condyt){ // bottom right
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
	x = 0;
	section = 3;
	y = windowHeight-player_height-bottombar;
	current_acceleration = gravity;
	jump = false;
	game_start = false;
	base = windowHeight-player_height-bottombar;
}