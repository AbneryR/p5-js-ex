var data;
var dropdown;
var graph;
var path;
//FALTA ARREGLAR LA RELACION ENTRE SPRINGS Y PATHING
//que al seleccionar una opcion. los springs que unen los caminos
//tambien cambien de color;
//FALTA ARREGLAR reset
//que todos vuelvan a su color original cambiar seleccion del dropdown
function preload(){
  data = loadJSON("kevinbacon.json");
//  data = loadJSON("jasondeprueba.json");
}

function setup() {
  graph = new Graph();
  dropdown = createSelect();
  dropdown.changed(bfs);
  createCanvas(1080,1024);
  background(40,20,30);
  var movies = data.movies;


  for(var i = 0; i<movies.length; i++){
    var movie = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie,[200,140,180,200]);//NOOO
    graph.addNode(movieNode);

    for(var j = 0; j < cast.length; j++){
      var actor = cast[j];
      var actorNode = graph.getNode(actor);
      if(actorNode == undefined){
        actorNode = new Node(actor,[100,100,180,100]);//NOOOOO
        dropdown.option(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
  // put setup code here
  console.log(graph);
}

function draw(){
background(40,20,30);
graph.showNode();
graph.displayPath(path);
}


function bfs(){
  graph.reset();

    var start = graph.setStart(dropdown.value());
    var end = graph.setEnd("Kevin Bacon");

  //  console.log(graph);
    var queue = [];
    start.searched = true;
    queue.push(start);

    while(queue.length>0){
      var current = queue.shift();
      //console.log(current.value);
      if(current == end){
        console.log("Found " + current. value);
        break;
      }
      var edges = current.edges;
      for(var i = 0; i< edges.length; i++){
        var neighbor = edges[i];
        if(!neighbor.searched){
            neighbor.searched =true;
            neighbor.setColor([255,255,255,50]);
          neighbor.parent = current;
          queue.push(neighbor);
        }
      }
    }

    path = [];
    path.push(end);
    var next = end.parent;
    while(next!=null){
      path.push(next);
      next = next.parent;
    }
    console.log(path);


    var txt= '';
    for(var i = path.length-1; i>= 0; i--){
      var n = path[i];
      txt += n.value;
       if(i!=0) txt+=' --> ';
      }
    createP(txt);
}
