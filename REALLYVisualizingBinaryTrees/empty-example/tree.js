function Tree(){
this.root = null;
}

Tree.prototype.addValue = function(val){
 var n = new Node(val);
  if(this.root == null){
    this.root = n;
    this.root.x = width/2;
    this.root.y = height/8;
  }
  else{
    this.root.addNode(n);
  }

}

Tree.prototype.tranverse =  function(){
  if(this.root!=null)
  tree.root.visit(this.root);
}

Tree.prototype.search = function(val){
  var found = tree.root.search(val);
  if(found == null){
    console.log("Not found");
  }
  else{
    console.log(found);
  }
}
