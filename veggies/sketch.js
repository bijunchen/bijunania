//creation and computation 
//bijun and ania
//oct 26
//veggies block for the building
//random images


var img1, img2, img3;
var imgs;

function preload() {
  
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.png");
  
  
  imgs = [ img1, img2, img3];
}

function setup() {
  createCanvas(600*2, 900*2);
  noLoop();
  //image(img,0,0);
}

function draw() {
  //scale(0.5,0.5);
  var randomVar = random(imgs);
  // console.log(randomVar);
  background(randomVar,0,0); //?????????
}


function mousePressed() {
  redraw();
}