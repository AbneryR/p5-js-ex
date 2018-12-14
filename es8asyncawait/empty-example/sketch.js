function setup() {
  noCanvas();
  delayES8(1000)
  .then(() => createP('hello'))
  .catch((err) => console.error(err));
  ;
}

async function delayES8(time){

  //esta funcion regresa una promesa
  await delay(time);

  return;
}








function delay(time){

  return new Promise((resolve, reject) => {
    if(isNaN(time)){
      reject(new Error('delay requires a valid number'));
    }
    else{
    setTimeout(resolve,time);
    }
  });
  //setTimeout(sayHello, time);
}

function sayHello(){
  createP('hello');
}
