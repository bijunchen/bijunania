//creation and computation 
//bijun and ania
//oct 27
//mouse block for the building
//random images


var img1, img2, img3, img4, img5, img6;
var imgs;

function preload() {
  
  img1 = loadImage("img1.png");
  img2 = loadImage("img2.png");
  img3 = loadImage("img3.png");
  img4 = loadImage("img4.png");
  img5 = loadImage("img5.png");
  img6 = loadImage("img6.png");
  
  imgs = [ img1, img2, img3, img4, img5, img6];
}

function setup() {
  createCanvas(600*2, 900*2);
  noLoop();
  //image(img,0,0);
}

function draw() {
 // scale(0.5,0.5);
  var randomVar = random(imgs);
  // console.log(randomVar);
  background(randomVar,0,0); //?????????
}


function mousePressed() {
  redraw();
}