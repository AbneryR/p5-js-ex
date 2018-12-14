var v;

function setup(){
  createCanvas(800,600);
  background(255);
  v= new Vehicle();
  // put setup code here
}

function draw(){
  background(255);
  v.show();
  var a =p5.Vector [0] [0];
  console.log(a);
  // put drawing code here
}
