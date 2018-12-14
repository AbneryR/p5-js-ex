function Spring(bob1, bob2, restLength){
    this.bob1 = bob1;
    this.bob2 = bob2;
    this.restLength = restLength;
    this.k = 0.2;
    this.color = [255,255,255,255];
}

Spring.prototype.update =function(){
  var dir = p5.Vector.sub(this.bob2.pos,this.bob1.pos);
  // var dirx = this.bob2.x - this.bob1.x;
  // var diry = this.bob2.y - this.bob1.y;
  var currentLength = dir.mag();
  // var currentLength = sqrt((dirx)**2-(diry)**2);
  var forcemag = this.restLength - currentLength;
  var force = dir.normalize();
// dirx = dirx/currentLength;
// diry = diry/currentLength;
  force = dir.mult(-1*this.k* forcemag);
// dirx *= -1 * this.k * forcemag;
// diry *= -1 * this.k * forcemag;
  this.bob1.applyForce(force);
  // bob1.applyForces(dirx,diry);
  force = dir.mult(-1);
  //  dirx*=-1;
  //  diry*=-1;
  this.bob2.applyForce(force);
  // bob2.applyForces(dirx,diry);

}

Spring.prototype.show =function(){
  strokeWeight(2);
  stroke(this.color);
  fill(this.color);
  line(this.bob1.pos.x, this.bob1.pos.y, this.bob2.pos.x, this.bob2.pos.y);
    // line(this.bob1.x, this.bob1.y, this.bob2.x, this.bob2.y);
}

Spring.prototype.setColor= function(color){
  this.color = color;
}
