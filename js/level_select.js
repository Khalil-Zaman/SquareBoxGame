function blue_levels(){
	textAlign(CENTER);
	fill(255);
	textSize(Math.floor(windowHeight/28));
	fill(255);
	text("LEVEL", Math.ceil(windowWidth/2), 25);
	draw_levels(blue_levels_extra_draw);
}

function blue_levels_extra_draw(){
	fill(65, 105, 225);
	if (level_no>3)	rect(x1, y1, box_dimension, box_dimension/10);
	if (level_no>6)	rect(x1, y1+9*box_dimension/10, box_dimension, box_dimension/10);
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
			textSize(box_dimension/4);
			fill((fill_i+=255)%510);
			text(level_no, x1+box_dimension/2, y1+box_dimension/2);
			fill((fill_i+=255)%510);
			level_no++;
		}
	}
}