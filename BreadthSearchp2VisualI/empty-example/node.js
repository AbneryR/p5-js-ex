function Node(value, color){
  this.springs = [];
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
  this.color = color;
  this.orig = this.color;
  //display
  this.acc = createVector(0,0);
  // this.acc.x = 0;
  // this.acc.y = 0;
  this.vel = createVector(0,0);
  // this.vel.x = 0;
  // this.vel.y = 0;
  this.pos = createVector(random(width), random(height));
  // this.x = random(width);
  // this.y = random(height);
  this.springLength = 180;
  this.damping= 0.95;
}

Node.prototype.addEdge = function(neighbor){
  this.edges.push(neighbor);
  //both directions
  neighbor.edges.push(this);
  this.springs.push(new Spring(this, neighbor, this.springLength));
}

Node.prototype.show = function(){
  fill(this.color);
  stroke(230);
  ellipse(this.pos.x, this.pos.y, 40,40);
  // ellipse(this.x, this.y, 40,40);
  noStroke();

  fill(this.color);
  textSize(20);
  text(this.value,this.pos.x-30,this.pos.y+30);
  // text(this.value, this.x-30,this.y+30);
}

Node.prototype.update = function(){
 this.vel.add(this.acc);
 this.vel.mult(this.damping);
 this.vel.limit(10);
 this.pos.add(this.vel);
 this.acc.mult(0);
 for(var i=0; i<this.springs.length;i++){
   this.springs[i].update();
   this.springs[i].show();
 }
 this.checkedges();
}

Node.prototype.applyForce = function(force){
  this.acc.add(force);
}

Node.prototype.setColor = function(color){
  this.color = color;
}

Node.prototype.repel =function(node){
  var force = p5.Vector.sub(this.pos,node.pos);
  var dist = force.mag();
 dist = constrain(dist,100,300);
  force.normalize();

  var strength=(-.9 * 10*10) / (dist**2);
  force.mult(strength);
  return force;
}

Node.prototype.checkedges = function(){
  if(this.pos.x < 50){this.pos.x = 50; this.vel.x*=-1;}
  if(this.pos.x >width-50){this.pos.x=width-50; this.vel.x*=-1;}
  if(this.pos.y < 50){this.pos.y = 50; this.vel.y*=-1;}
  if(this.pos.y >height-50){this.pos.y=height-50; this.vel.y*=-1;}
}
// Node.prototype.applyForces(){
//
// }
