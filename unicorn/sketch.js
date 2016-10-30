//Creation and computation project 2, 
//Bijun and Ania, oct 27 2016
//Unicorn Block for the building


var value = 0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

function preload() {
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.png");
 img4 = loadImage("img4.png");
 img5 = loadImage("img5.png");
 img6 = loadImage("img6.png");
}

function setup() {
  createCanvas(600,900);
 
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
  
  else if(value == 3){
    scale(0.5,0.5);
    image(img4, 0, 0);
  }
  
    else if(value == 4){
    scale(0.5,0.5);
    image(img5, 0, 0);
  }
  
   else if(value == 5){
    scale(0.5,0.5);
    image(img6, 0, 0);
  }
  
}

function mousePressed(){

  //increment the value variable
  value = value + 1;

  //reset the value variable when it gets too big
  if(value > 5){
    value = 0;
  }
  
}