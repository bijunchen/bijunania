//creation and computation 
// bijun and ania
//oct 24
//strong man block for the building
//using sound
//sound reference: http://www.freesound.org/people/zagi2/sounds/193934/

var song;
var img;

function preload() {
  img = loadImage("man.png");
  song = loadSound('sound.wav');
}

function setup() {
  createCanvas(600, 900);
  scale(0.5,0.5);
  image(img,0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
    
  }
}