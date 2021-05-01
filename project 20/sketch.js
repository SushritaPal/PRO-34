var cat, catImage
var mouse, mouseImage
var gameBackground, gameBackgroundImage
function setup() {
  createCanvas(800,400);
  cat=createSprite(750, 200, 50, 50);
  mouse=createSprite(50,200,50,50);
}

function draw() {
  background(0);  
  drawSprites();
}