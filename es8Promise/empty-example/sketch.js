var api = "https://api.giphy.com/v1/gifs/search\?rating=G&lang=en";
var api_key = "api_key=wQyaa2fxneZlxy6YHJ0ROcKqmjl0xhFJ&";

var giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=wQyaa2fxneZlxy6YHJ0ROcKqmjl0xhFJ&q=";
var wordnikAPI = "http://api.wordnik.com/v4/words.json/randomWord?api_key=8a09c92b014e0f69ef0010bfb2109d85adb5cc9fb02a60bc9";

//data.image.downsized_medium.url <<Location of gif


function setup() {
  noCanvas();

  wordGif().then(results=> {
    createP(results.word);
    createImg(results.img);
  })
  .catch(err => console.error(err));

  }

async function wordGif(){
let response1 = await fetch(wordnikAPI);
let json1 = await response1.json();
console.log(json1)
let response2 = await fetch(giphyAPI + json1.word);
let json2 = await response2.json();
console.log(json2);
let img_url = json2.data[0].images['fixed_height_small'].url;
console.log(img_url);
return{
  word: json1.word,
  img: img_url
 };
}

/* //ORIGINAL PROMISES from SETUP
  fetch(wordnikAPI)
  .then(response => response.json())
  .then(json => {
    createP(json.word);
    return fetch(giphyAPI + json.word);
  })
  .then(response => {
    return response.json()
  })
  .then(json => {
    createImg(json.data[0].images['fixed_height_small'].url);
  })
  .catch(err => console.error(err));
*/
function draw() {

}
