var target;
var pos;
var vel;
var drag;
var strength;

function setup() {
  createCanvas(800,600);

  drag = 0.75;
  strength = 0.1;
  vel=0;
  pos=100;
  // put setup code here
}

function draw() {
  background('rgba(0,0,0, 0.6)');
  target = mouseX;

  var force = target - pos;
  force *= strength;

  vel *= drag;
  vel += force;

  pos += vel;

  fill(214,71,150);
  ellipse(pos, 200, 30);
  // put drawing code here
}
