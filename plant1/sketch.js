//Creation and computation project 2, 
//Bijun and Ania, 
//plant Block for the building

var value = 0;
var img1;
var img2;


function preload() {
  img1 = loadImage("plant1.png");
  img2 = loadImage("plant2.png");
}

function setup() {
  createCanvas(600, 900);
  //createCanvas(144, 216);
}

function draw() {
  scale(0.5,0.5);
  image(img1,0,0);
  
  image(img2,0,mouseY-900);
}
