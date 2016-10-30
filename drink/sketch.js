//creation and computation 
// bijun and ania
//oct 24
//drinking block for the building
//using sound and loading gif
//http://www.freesound.org/people/Taira%20Komori/sounds/212739/


var value = 0;
var img1;
var img2;
//boolean hasClicked;


function preload() {
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  var song;
}

function setup() {
  createCanvas(600,900);
  //image(hasClicked?img1:img1, 0, 0);
  //image(img1,0,0);
  song = loadSound('drink.mp3');
}


function draw(){
  if(value === 0){
    scale(0.5,0.5);
    image(img1,0,0);
  }
  else if(value == 1){
    scale(0.5,0.5);
    image(img2,0,0);
  }
}


function mousePressed() {
  //increment the value variable
  value = value + 1;
//reset the value variable when it gets too big
  if(value > 1){
    value = 0;
  }
 if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
    
  }
  }