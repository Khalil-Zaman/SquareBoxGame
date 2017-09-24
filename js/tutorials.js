var tutorail_running, tutorial_counter;
var tutorial_tips;

function initialize_tutorial_variables(){
	tutorial_running = false;
	tutorial_counter = 0;
	tutorial_tips = [0,0,0,0,0,0];
}

function autosizetext(){
	if (windowWidth/65 < 12){
		textSize(12);
		return 12;
	} else {
		textSize(windowWidth/65);
		return windowWidth/65;
	}
}

function tutorial_this_is_player(){
	playingHeight = windowHeight - topbar;
	textAlign(LEFT, CENTER);
	autosizetext();
	fill(255);
	t = "This is you! The great 'Orange'\nClick to start!";
	text(t, player_width/4, playingHeight - 2*player_height - 3*(windowWidth/55));
}

function tutorial(){
	if (tutorial_counter == 0) {
		tutorial_running = true;
		tutorial_this_is_player();
		tutorial_tips[tutorial_counter] = 1;
	} else if (tutorial_counter == 1 && x > windowWidth/2 - unit_width/2 - 2*player_width - speed){
		tutorial_how_to_jump();
		tutorial_tips[tutorial_counter] = 1;
	} else if (tutorial_counter == 2 && section == 2){
		tutorial_section_2_beginning();
		tutorial_tips[tutorial_counter] = 1;
	} else if (tutorial_counter == 3 && section == 2 && x < windowWidth/2 + unit_width/2 + 2*player_width - speed){
		tutorial_collect_stars();
		tutorial_tips[tutorial_counter] = 1;
	} else if (tutorial_counter == 4 && section == 1 && x >= 0){
		tutorial_section_1();
		tutorial_tips[tutorial_counter] = 1;
	}
}

function tutorial_section_1(){
	running = false;
	textAlign(LEFT, CENTER);
	autosizetext();
	fill(255);
	t = "You're now up here! You start from the left side.\nClick to continue";
	text(t, player_width/4, 2*(windowWidth/55)  + 25);
}

function tutorial_collect_stars(){
	running = false;
	textAlign(CENTER, CENTER);
	autosizetext();
	fill(0);
	t = "Collect the spinning diamonds to unlock more levels! \nClick to continue";
	text(t, windowWidth/2, sect2_top_y + 3*(windowWidth/55));
}

function tutorial_section_2_beginning(){
	running = false;
	textAlign(RIGHT, CENTER);
	autosizetext();
	fill(0);
	t = "You're now up here! You start from the right side. \nClick to continue";
	text(t, windowWidth - player_width/4, sect2_top_y + 2*(windowWidth/55));
}

function tutorial_how_to_jump(){
	running = false;
	textAlign(CENTER, CENTER);
	autosizetext();
	fill(255);
	t = "You've encountered an obstacle. You have to jump over it! \nClick to jump";
	text(t, windowWidth/2, sect2_top_y + section_height + 2*(windowWidth/55));
}

function fade_background(){
	fill(123, 123, 123, 200)
	rect(0, 0, windowWidth, windowHeight)
}
