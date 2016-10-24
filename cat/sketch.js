//Creation and computation project 2, 
//Bijun and Ania, 
//Cat Block for the building
var value = 0;
var img1;
var img2;
var img3;


function preload() {
  img1 = loadImage("cat1.png");
  img2 = loadImage("cat2.png");
  img3 = loadImage("cat3.png");
}

function setup() {
  createCanvas(144, 216);
}

function draw() {
   if(value === 0){
    image(img1, 0, 0);
  }
  else if(value == 1){
    image(img2, 0, 0);
  }
  else if(value == 2){
    image(img3, 0, 0);
  }
}

function deviceShaken(){

  //increment the value variable
  value = value + 1;

  //reset the value variable when it gets too big
  if(value > 2){
    value = 0;
  }
}