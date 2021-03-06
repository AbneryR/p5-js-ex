 function removeFromArray(arr,elt){
  for (var i = arr.length-1; i>=0; i--){
    if(arr[i] == elt){
      arr.splice(i,1);
    }
  }
}

function heuristic(a,b){
  // var d = dist(a.i,a.j,b.i,b.j);
  var d = abs(a.i-b.i) + abs(a.j-b.j);
  return d;
}

var cols = 25;
var rows = 25;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;

var w;
var h;

var path = [];

function setup() {
  createCanvas(400,400);
  background(0);

  w = width/cols;
  h = height/rows;

  for(var i=0; i<cols; i++){
    grid[i] = new Array(rows);
  }

  for(var i=0; i<cols; i++){j
    for(var j=0; j<rows; j++){
      grid[i][j] = new Spot(i,j);
    }
  }

    for(var i=0; i<cols; i++){j
      for(var j=0; j<rows; j++){
        grid[i][j].addNeighbors(grid);
      }
    }

  start = grid[0][0];
  end = grid[cols-1][rows-1];
  console.log(grid);

  openSet.push(start);
  // put setup code here
}

function draw() {
  if(openSet.length>0){
    var winner = 0;
    for(var i=0; i<openSet.length;i++){
      if(openSet[i].f < openSet[winner].f){
            winner = i;
      }
    }
    var current = openSet[winner];

    if(current== end){
      noLoop();
      console.log("DONE!!");
    }

    //openSet.remove(current);
    removeFromArray(openSet,current);
    closedSet.push(current);

    var neighbors = current.neighbors;
    for(var i=0; i<neighbors.length;i++){
      var neighbor = neighbors[i];
      if(!closedSet.includes(neighbor)){
        var tempG = current.g+1;

        if(openSet.includes(neighbor)){
          if(tempG<neighbor.g){
            neighbor.g=tempG;
          }
        } else{
          neighbor.g = tempG;
          openSet.push(neighbor);
        }

        neighbor.h=heuristic(neighbor,end);
        neighbor.f= neighbor.g+neighbor.h;

        neighbor.previous = current;

      }

    }
  }

  else{

  }
  background(0);

  for(var i = 0; i<cols; i++){
    for(var j=0; j<rows; j++){
      grid[i][j].show(color(255));
    }
  }

  for(var i=0; i<openSet.length;i++){
    openSet[i].show(color(220,100,200));
  }
  for(var i=0; i<closedSet.length;i++){
    closedSet[i].show(color(40,100,100));
  }


      path =[];
      var temp = current;
      path.push(temp);
      while(temp.previous){
        path.push(temp.previous);
        temp = temp.previous;
      }

  for(var i=0; i<path.length;i++){
    path[i].show(color(0,0,200));
  }
  // put drawing code here
}
