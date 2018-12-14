function Graph(){
  this.nodes = [];
  this.graph = {};
  Graph.prototype.addNode = function(n){
    //node into array
    this.nodes.push(n);
    var title = n.value;
    //node into hash
    this.graph[title] = n;
  }



Graph.prototype.getNode = function(actor){
  var n = this.graph[actor];
  return n;
}

}
