var angle;
var slider;
var treeHeight;
function setup(){
  var docHeight = window.innerHeight;
  var docWidth = window.innerWidth;
  createCanvas(docWidth, docHeight);
  slider = createSlider(0, PI/4, 0, 0.01)
  slider.position(0,0)
  treeHeight = createSlider(0, 200, 100, 10)
  treeHeight.position(0, 20);
}

function draw(){
  background(51);
  angle = slider.value();
  tHeight = treeHeight.value()
  stroke(255);
  translate(width/2, height);
  branch(tHeight);
}

function branch(len){
  line(0, 0, 0, 0 - len)
  translate(0, -len);
  if(len > 4){
    push()
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
