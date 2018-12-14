function Vehicle(){
  this.loc = createVector(width/2,height/2);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.mass = 10;
  this.maxforce = .5;
  this.maxspeed = 20;
}

Vehicle.prototype.update = function(){
  this.force.limit(this.maxforce);
  this.vel.add(this.acc);
  this.vel.limit(this.maxspeed);
  this.loc.add(this.vel);
}

Vehicle.prototype.applyForce = function(force){
  var f  = p5.Vector.div(force,this.mass);
  this.acc.add(f);
}

Vehicle.prototype.show = function(){
  var theta = atan(this.vel.y/this.vel.x);
  push();
  fill(255);
  stroke(0);
  translate(this.loc.x,this.loc.y);
  rotate(theta);
  beginShape();
  vertex(0,-this.mass*2);
  vertex(-this.mass,this.mass*2);
  vertex(this.mass,this.mass*2);
  endShape(CLOSE);
  pop();
}
