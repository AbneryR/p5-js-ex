var tree;

function setup(){
 createCanvas(800,600);
 background(100);

 tree = new Tree();
  console.log(tree);
  tree.tranverse();
  tree.addValue(500);

}

function draw(){
 background(0);
 tree.tranverse();
}

function mousePressed(){
  tree.addValue(floor(random(0,100)));
}
