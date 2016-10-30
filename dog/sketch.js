//Creation and computation project 2, 
//Bijun and Ania, 
//Dog Block for the building
//http://www.freesound.org/people/Piink_Aces/sounds/257824/
var song;
var value = 0;
//var img1;
var img2;
var img3;
var img4;

function preload() {
  //img1 = loadImage("Dog1.png");
  img2 = loadImage("Dog2.png");
  img3 = loadImage("nobowl.png");
  img4 = loadImage("bowl.png");
  song = loadSound('whining.mp3');
}

function setup() {
  createCanvas(600,900);
}


function draw(){
  scale(0.5,0.5);
  image(img3,0,0);
  image(img4,mouseX,mouseY);
  // if(value === 0){
  //   image(img1,0,0);
  // }
  // else if(value == 1){
  //   image(img2,0,0);
  // }
   console.log(mouseX);
  console.log(mouseY);
  if(mouseX>352 && mouseX<572 && mouseY>422 && mouseY<678){
   image(img2,0,0); 
   
  }
  }

function mousePressed() 
{
  // trigger sound
  
  if(mouseX>352 && mouseX<572 && mouseY>422 && mouseY<678){
   song.play(); 
   
  }
  // change background color

  
}
// function deviceTurned() {
//   //increment the value variable
//   value = value + 1;
// //reset the value variable when it gets too big
//   if(value > 1){
//     value = 0;
//   }

//   }