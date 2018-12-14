var api = "https://api.giphy.com/v1/gifs/search\?rating=G&lang=en";
var api_key = "api_key=wQyaa2fxneZlxy6YHJ0ROcKqmjl0xhFJ&";

var giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=wQyaa2fxneZlxy6YHJ0ROcKqmjl0xhFJ&q=";
var wordnikAPI = "http://api.wordnik.com/v4/words.json/randomWord?api_key=8a09c92b014e0f69ef0010bfb2109d85adb5cc9fb02a60bc9";

//data.image.downsized_medium.url <<Location of gif


function setup() {
  noCanvas();


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
  .catch(err => console.log(err));
  }


function draw() {

}
