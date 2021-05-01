var rect1;
var rect2;
var rect3;
var rect4;
var ball;
function setup() {
  createCanvas(350,400);
  rect1=createSprite(200, 390, 80, 15);
  rect1.shapeColor="green";
  rect2=createSprite(290, 390, 80, 15);
  rect2.shapeColor="yellow";
  rect3 = createSprite(110,390,80,15);
  rect3.shapeColor="blue";
  rect4=createSprite(30,390,60,15);
  rect4.shapeColor="red";
  ball=createSprite(160,130,20,20);
  ball.shapeColor="white";
  ball.velocityX=5;
  ball.velocityY=5;
  edges=createEdgeSprites();
}

function draw() {
  background(0);

  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
if(rect2.isTouching(ball)&&ball.bounceOff(rect2)){
     ball.shapeColor="yellow";
}
if(rect1.isTouching(ball)&&ball.bounceOff(rect1)){
  ball.shapeColor="green";
}
if(rect3.isTouching(ball)&&ball.bounceOff(rect3)){
  ball.shapeColor="blue";
}
if(rect4.isTouching(ball)&&ball.bounceOff(rect4)){
  ball.shapeColor="red";
}
  drawSprites();
}