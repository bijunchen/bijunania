//Creation and computation project 2, 
//Bijun and Ania, Oct 26th
//Squirrel Block for the building
var img1;
var img2;
var img3;

function preload() {
  img1 = loadImage("squirrel1.png"); //backgorund img
  img2 = loadImage("squirrel2.png"); //dresser
  img3 = loadImage("squirrel3.png");  //squirrel
  
}

function setup() {
  createCanvas(600,900);
  scale(0.5,0.5);
  image(img1,0,0);
}

function draw() {
  scale(0.5,0.5);
  image(img1,0,0);
  image(img3,mouseX,mouseY);
  image(img2,0,0);
}