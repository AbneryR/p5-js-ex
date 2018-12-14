var tree;

function setup(){
  noCanvas();
  tree = new Tree();
  tree.addValue(2);
  for(var i =0; i<10;i++){
    tree.addValue(floor(random(0,100)));
  }
  console.log(tree);
  tree.traverse();
  
}
