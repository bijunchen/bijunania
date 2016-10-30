//Creation and computation project 2, 
//Bijun and Ania, 
//Cat Block for the building
//http://www.freesound.org/people/thearxx08/sounds/333916/

var value = 0;
var img1;
var img2;
var img3;


function preload() {
  img1 = loadImage("cat1.png");
  img2 = loadImage("cat2.png");
  img3 = loadImage("cat3.png");
  var song;
}

function setup() {
  createCanvas(600,900);
  song = loadSound('meow.mp3');
}

function draw() {
   if(value === 0){
     scale(0.5,0.5);
    image(img1, 0, 0);
  }
  else if(value == 1){
    scale(0.5,0.5);
    image(img2, 0, 0);
  }
  else if(value == 2){
    scale(0.5,0.5);
    image(img3, 0, 0);
  }
}

function mousePressed(){

  //increment the value variable
  value = value + 1;

  //reset the value variable when it gets too big
  if(value > 2){
    value = 0;
  }
  
   if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
  }
}