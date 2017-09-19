function this_is_player(){
	playingHeight = windowHeight - topbar;
	textAlign(LEFT, CENTER);
	textSize(windowWidth/55);
	t = "This is you! A wonderful person called 'Orange'\nClick or press space to jump!"; 
	text(t, player_width/4, playingHeight - 2*player_height - 3*(windowWidth/55));
	drawArrow(player_width*3, playingHeight-2.2*player_height, 0.8*player_height, 100);	
}

function tutorial(){
	this_is_player();
}
