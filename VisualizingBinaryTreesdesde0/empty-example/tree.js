
function Tree(){
  this.root = null;
}

Tree.prototype.addValue = function (val){
var n = new Node(val);
  if(this.root == null){
      this.root = n;
  }
  else{
    this.root.addNode(n);
  }
}

Tree.prototype.search = function (val){
  var found = this.root.search(val);
     if(found != null){
      console.log("Value found: "+ found);
    }
    else {
      console.log("not found");
    }
}

Tree.prototype.traverse = function(){
  this.root.visit();
}
