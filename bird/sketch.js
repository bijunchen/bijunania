//Creation and computation project 2, 
//Bijun and Ania, oct 27
//Bird Block for the building
//http://www.freesound.org/search/?q=bird+noise&page=2#sound
var song;
var img1;
var img2;
var value = 0;
function preload() {
  
  img1 = loadImage("bird1.png");
  img2 = loadImage("bird2.png");
  song = loadSound('bird.wav');
}

function setup() {
  createCanvas(600,900);
  //image(img,0,0);
 
  // scale(0.5,0.5);
  // image(img,0,0);
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
    value = value + 1;
 if(value > 1){
    value = 0;
  }
if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
    
  }
}