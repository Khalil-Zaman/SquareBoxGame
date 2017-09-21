function main_menu_animation(){
	if (main_menu_clicked == true){
		main_menu_background();
		if (reverse == false){
			y_animation+=2;
			y_bottom = (windowHeight - Math.floor(ythird)) - y_animation;
			y_top = Math.ceil(ythird)+y_animation;
			if (y_bottom < (y_top-70)){
				reverse = true;
			}
			main_menu_play_btn();
		} else {
			y_animation-=3;
			y_bottom = (windowHeight - Math.floor(ythird)) - y_animation;
			y_top = Math.ceil(ythird)+y_animation;
			if (y_animation <= 0){
				screen = 3;
			}
		}
	} else {
		main_menu_background();
		main_menu_play_btn();
	}
}
