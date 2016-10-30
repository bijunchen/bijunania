//creation and computation 
// bijun and ania
//oct 26
//painting block for the building
//using loading image


var value = 0;
var img1;
var img2;
//boolean hasClicked;


function preload() {
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
}

function setup() {
  createCanvas(600,900);
  //image(hasClicked?img1:img1, 0, 0);
  //image(img1,0,0);
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

  }
  
