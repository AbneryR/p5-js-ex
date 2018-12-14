function Node(value){
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;

}

Node.prototype.addEdge = function(neighbor){
  this.edges.push(neighbor);
  //both directions
  neighbor.edges.push(this);
}
