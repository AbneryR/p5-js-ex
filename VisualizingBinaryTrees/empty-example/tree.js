function Tree(){
this.root = null;
}

Tree.prototype.addValue = function(val){
 var n = new Node(val);
  if(this.root == null){
    this.root = n;
  }
  else{
    this.root.addNode(n);
  }

}

Tree.prototype.tranverse =  function(){
  tree.root.visit();
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
