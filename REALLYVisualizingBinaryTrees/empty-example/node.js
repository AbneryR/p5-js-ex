function Node(val,x,y, parent){
  this.x = x;
  this.y=y;
  this.value=val;
  this.right=null;
  this.left=null;
//NEW CODE
if(parent !=null){
  this.parent=parent;
}
else{
  this.parent = null;
}
}


Node.prototype.addNode = function(n){
  if(n.value < this.value){
      if(this.left == null){
        this.left =n;
        this.left.x = this.x - 50;
        this.left.y = this.y + 20;
        this.left.parent = this;
      }
      else{
        this.left.addNode(n);
      }
  }
  else if (n.value > this.value) {
      if(this.right == null){
        this.right = n;
        this.right.x = this.x + 50;
        this.right.y = this.y + 20;
        this.right.parent = this;
      }
      else{
        this.right.addNode(n);
      }
  }

}

Node.prototype.visit = function(parent){
  if(this.left != null){
    this.left.visit(this);
  }
  this.display(parent);
  //console.log(this.value);
  // fill(255);
  // stroke(255);
  // text(this.value, this.x-8, this.y+3);
  // line(parent.x, parent.y, this.x, this.y);
  // noFill();
  // ellipse(this.x,this.y,25,25);
  if(this.right != null){
    this.right.visit(this);
  }
}

Node.prototype.search = function(val){
  if(this.value == val ){
      return this;
  }
  if(val < this.value && this.left!=null){
   return this.left.search(val);
  }
  if(val> this.value && this.right!=null){
  return this.right.search(val);
  }
  return null;
}

Node.prototype.display = function(parent){
  noFill();
  ellipse(this.x,this.y,25,25);
  fill(255);
  noStroke();
  text(this.value, this.x-8, this.y-3);
  stroke(255);
  line(parent.x, parent.y,this.x,this.y);
}
