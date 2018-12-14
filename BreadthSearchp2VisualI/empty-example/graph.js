function Graph(){
  this.nodes = [];
  this.graph = {};
  this.end = null;
  this.start = null;
}

  Graph.prototype.reset = function(){
    for(var i = 0 ; i< this.nodes.length;i++){
      this.nodes[i].searched = false;
      this.nodes[i].parent = null;
      this.nodes[i].color = this.nodes[i].orig;
    }
  }


  Graph.prototype.setStart = function(actor){
    this.start = this.graph[actor];
    return this.start;
  }


    Graph.prototype.setEnd = function(actor){
      this.end = this.graph[actor];
      return this.end;
    }

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

Graph.prototype.showNode = function(){
  for(var i= 0 ; i<this.nodes.length; i++){

    for(var j=0; j<this.nodes.length; j++){
      var force = this.nodes[j].repel(this.nodes[i]);
      this.nodes[i].applyForce(force);
    }
      this.nodes[i].update();
      this.nodes[i].show();
      }
}

Graph.prototype.displayPath = function(path){
  if(path == undefined){
  }
  else{
    for(var i =0; i<path.length;i++){
       var n = this.getNode(path[i].value);
      // var m = this.getNode(path[i+1].value);
      // for(var j=0; j<n.springs.length;i++){
      //   if(n.springs[j].bob1 == m || n.springs[j].bob2 == m){
      //     n.springs[j].setColor([255,255,0,200]);
      //   }
      n.setColor([255,255,0,200]);
    // console.log(n);
    }
  }
}
