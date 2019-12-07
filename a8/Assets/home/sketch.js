var canvas;
let Shaker;

let x = 100,
  y = 100,
  angle1 = 0.0,
  Length = 60;

// load shaker pic
function preload(){
   Shaker = loadImage('https://image.flaticon.com/icons/png/512/90/90615.png');
}

// respnsive canvas
function windowResized() {
  resizeCanvas(windowWidth, 2000);
}

function setup() {
  canvas = createCanvas(windowWidth, 2000);
  strokeWeight(20.0);
  stroke('#ebae34');
  canvas.position(0,0);
  canvas.style('z-index', '-1','display','block');
}

function draw() {
  // bakcground color
  background('#5c615c');
  
  // convert angles
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * Length;
  y = mouseY - sin(angle1) * Length;

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
  image(Shaker, x-25, y-23, 50, 50);

  // draw small shaker follow mouse
  angleMode(DEGREES); 
  let a = atan2(mouseY - height/3, mouseX - width/3);
  translate(width / 2, height / 2);
  push();
  rotate(a);
  image(Shaker, mouseX-20, mouseY-20, 30, 30); 
  pop();
}

// draw line follow mouse //
function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, Length, 0);
  pop();
}



