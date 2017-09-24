var arc;

function arc_selection_setup(){
  select_arc();
  draw_arcs();
}

function select_arc(){
  text_size = Math.floor(windowHeight/28);
  if (text_size < 12) text_size = 12;
  textSize(text_size);
  fill(255);
  text("SELECT AN ARC", windowWidth/2, text_size);
}

function draw_arcs(){
  blue_arc();
  purple_arc();
  green_arc();
}

function set_color_green(){
  fill(0, 204, 0);
}

function blue_arc(){
  set_color_blue();
  text_size = windowWidth/9;
  textSize(text_size);
  textAlign(CENTER, CENTER);
  text("BLUE", windowWidth/2, 1.5*windowHeight/9);
}

function purple_arc(){
  set_color_purple();
  text_size = windowWidth/9;
  textSize(text_size);
  textAlign(CENTER, CENTER);
  text("PURPLE", windowWidth/2, 4.5*windowHeight/9);
}

function green_arc(){
  set_color_green();
  text_size = windowWidth/9;
  textSize(text_size);
  textAlign(CENTER, CENTER);
  text("COMING SOON", windowWidth/2, 7.5*windowHeight/9);
}
