//creation and computation 
// bijun and ania
//oct 24
//santa block for the building
//using sound and loading gif
//http://www.freesound.org/people/airmedia/sounds/349855/

var song;
var img;

function preload() {
  //img = loadImage("santa.gif");
  img = createImg("santa.gif");
  song = loadSound('santa.mp3');
}

function setup() {
  createCanvas(600,900);
  //image(img,0,0);
 
  img.position(0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    
  } else {
    song.play();
    
  }
}