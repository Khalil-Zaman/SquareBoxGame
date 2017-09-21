function level_complete(){
	level_complete_box();
	level_complete_text();
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
	rect(windowWidth/2, windowHeight/2, windowWidth/4, windowHeight/4);
	rectMode(CORNER);
}

function level_complete_text(){
	congrats = "Level " + level + " completed!"
	textAlign(CENTER);
	fill(0);
	text(congrats, windowWidth/2, windowHeight/2 - 25);
}