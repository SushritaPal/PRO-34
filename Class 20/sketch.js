var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;
function setup() {
  createCanvas(1200,800);
   gameObject1=createSprite(100, 200, 50, 80);
  gameObject1.shapeColor="green";
  gameObject1.debug=true;

  gameObject2=createSprite(200, 200, 50, 80);
  gameObject2.shapeColor="green";
  gameObject2.debug=true;

  gameObject3=createSprite(300, 200, 50, 80);
  gameObject3.shapeColor="green";
  gameObject3.debug=true;

  gameObject4=createSprite(400, 200, 50, 80);
  gameObject4.shapeColor="green";
  gameObject4.debug=true;

  gameObject4.velocityX=3;
  fixedRect.velocityX=-5;
}

function draw() {
  background(0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect,gameObject2)===true){
    gameObject2.shapeColor="yellow";
    movingRect.shapeColor="blue";
  }
  else{
    gameObject2.shapeColor="green";
    movingRect.shapeColor="green";
  }
  bounceOff(gameObject4,fixedRect);
    drawSprites();
}
