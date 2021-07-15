var bgWidth = 900;
var bgHeight = 500;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var sofa, sofaImg;
var plant1, plantImg1;
var tv, tvImg;
var plant2, plant2Img;
var plant3, plant3Img;
var plant4;
var direction = [1,-1];
var bugSpeed = 6;
var wallsGrp, bugsGrp, furnitureGrp;
var player, playerImg;
var playerSpeed = 5;
var playerEnergy = 100;
var countDown = 1000;
var life = 3;
var gameState = "play";
var bed, bedImg;
var diningTable, diningTableImg;
var washroom, washroomImg;
var washBasin, washBasinImg;
var kitchenSlave, kitchenSlaveImg;

function preload(){
  sofaImg = loadImage("images/sofa.png");
  plantImg1 = loadImage("images/plant3.png");
  plant2Img = loadImage("images/plant2.png");
  plant3Img = loadImage("images/plant4.png");
  tvImg = loadImage("images/tv.png");
  bugImg = loadImage("images/spider.png");
  bedImg = loadImage("images/bed.jpg");
  diningTableImg = loadImage("images/diningtable.png");
  kitchenSlaveImg = loadImage("images/kitchenslave.jpg");
  washBasinImg = loadImage("images/washbasin.jpg");
  washroomImg = loadImage("images/washroom1.png");
  playerImg = loadImage("images/insectracket.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  wallsGrp = new Group();
  bugsGrp = new Group();
  furnitureGrp = new Group();
  createWalls();
  createFurniture();
  for(var i = 0; i<=9; i++){
    createBug();
  }
  
  player = createSprite(width/2+100, height/2+100,20,20);
  player.addImage(playerImg);
  player.scale = 0.2
}

function draw() {
  background("lightblue");  
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, bgWidth, bgHeight);
  
  if(gameState==="play"){
    bugsGrp.isTouching(wallsGrp,bounceBug);
    bugsGrp.isTouching(furnitureGrp, bounceBug);
    if(keyDown(LEFT_ARROW)){
      movePlayer(-1*playerSpeed,0);
    }
    if(keyDown(RIGHT_ARROW)){
      movePlayer(playerSpeed,0);
    }
    if(keyDown(DOWN_ARROW)){
      movePlayer(0,playerSpeed);
    }
    if(keyDown(UP_ARROW)){
      movePlayer(0,-1*playerSpeed);
    }
    player.collide(furnitureGrp);
    player.collide(wallsGrp);
    countDown--;
    if(playerEnergy<=0 && life>0){
      life--;
      playerEnergy=100;
    }
    if(countDown<=0 && life>0){
      life--;
      countDown=1000;
    }
    player.isTouching(bugsGrp,killBug);
    
    if(life>0 && bugsGrp[0]===undefined){
      gameState="win";
    }
    if(life<=0 && bugsGrp[0]){
      gameState = "lost";
    }
  }
  if(gameState==="win"){
    textSize(40);
    fill("lightgreen");
    text("YOU WIN",width/2-100,height/2);
  }
  if(gameState==="lost"){
    textSize(40);
    fill("pink");
    text("YOU LOST!!",width/2-100,height/2);
  }
  drawSprites();

 
  
  textSize(16);
  fill("black");
  text("Energy: "+Math.round(playerEnergy),width/2-bgWidth/2,height/2-bgHeight/2-20);
  text("Life: "+Math.round(life),width/2,height/2-bgHeight/2-20);
  text("Countdown: "+Math.round(countDown),width/2+bgWidth/2-100,height/2-bgHeight/2-20);
 
  
}
function killBug(player,bug){
  bug.destroy();
}
function movePlayer(x,y){
  player.x += x;
  player.y += y;
  playerEnergy-=0.1;
}
function createWalls(){
  wall1 = createSprite(width/2-bgWidth/2+5,height/2,10,bgHeight);
  wall2 = createSprite(width/2, height/2-bgHeight/2+5, bgWidth, 10);
  wall3 = createSprite(width/2, height/2+bgHeight/2-5, bgWidth, 10);
  wall4 = createSprite(width/2+bgWidth/2-5,height/2,10,bgHeight);
  wall5 = createSprite(width/2-bgWidth/6,height/2-bgHeight/3,10,bgHeight/3);
  wall6 = createSprite(width/2-bgWidth/3,height/2,bgWidth/3,10);
  wall7 = createSprite(width/2-bgWidth/6,height/2+bgHeight/3,10,bgHeight/3);
  wall8 = createSprite(width/2,height/2+bgHeight/3,10,bgHeight/3);
  wall9 = createSprite(width/2-bgWidth/24,height/2+bgHeight/6,bgWidth/12,10);
  wall10 = createSprite(width/2+bgWidth/3,height/2+bgHeight/6,bgWidth/3,10);
  wallsGrp.add(wall1);
  wallsGrp.add(wall2);
  wallsGrp.add(wall3);
  wallsGrp.add(wall4);
  wallsGrp.add(wall5);
  wallsGrp.add(wall6);
  wallsGrp.add(wall7);
  wallsGrp.add(wall8);
  wallsGrp.add(wall9);
  wallsGrp.add(wall10);
 
}
function createFurniture(){
  sofa = createSprite(width/2+bgWidth/2.7,height/2,10,10);
  sofa.addImage(sofaImg);
  sofa.scale = 0.15;
  sofa.debug = true;
  plant1 = createSprite(width/2+bgWidth/2.3,height/2+bgHeight/2.5,10,10);
  plant1.addImage(plantImg1);
  plant1.scale = 0.08;
  plant1.debug = true;
  plant2 = createSprite(width/2+bgWidth/3.5,height/2+bgHeight/4,10,10);
  plant2.addImage(plant2Img);
  plant2.scale = 0.2;
  plant2.debug = true;
  plant3 = createSprite(width/2+bgWidth/20,height/2+bgHeight/2.5,10,10);
  plant3.addImage(plant3Img);
  plant3.scale = 0.11;
  plant3.debug = true;
  plant4 = createSprite(width/2-bgWidth/50,height/2+bgHeight/10,10,10);
  plant4.addImage(plant2Img);
  plant4.scale = 0.2;
  plant4.debug = true;
  tv = createSprite(width/2+bgWidth/2.7,height/2-bgHeight/2.5,10,10);
  tv.addImage(tvImg);
  tv.scale = 0.5;
  tv.debug = true;
  diningTable = createSprite(width/2+bgWidth/15,height/2-bgHeight/3,10,10);
  diningTable.addImage(diningTableImg);
  diningTable.scale = 0.3;
  diningTable.debug = true;
  bed = createSprite(width/2-bgWidth/3,height/2+bgHeight/5,10,10);
  bed.addImage(bedImg);
  bed.scale = 0.2;
  bed.debug = true
  kitchenSlave = createSprite(width/2-bgWidth/2.4,height/2-bgHeight/2.4,10,10);
  kitchenSlave.addImage(kitchenSlaveImg);
  kitchenSlave.scale = 0.2;
  kitchenSlave.debug = true;
  washBasin = createSprite(width/2-bgWidth/20,height/2+bgHeight/4.5,10,10);
  washBasin.addImage(washBasinImg);
  washBasin.scale = 0.06;
  washBasin.debug = true;
  washroom = createSprite(width/2-bgWidth/9,height/2+bgHeight/2.5,10,10);
  washroom.addImage(washroomImg);
  washroom.scale = 0.25;
  washroom.debug = true;
  furnitureGrp.add(sofa);
  furnitureGrp.add(plant1);
  furnitureGrp.add(plant2);
  furnitureGrp.add(plant3);
  furnitureGrp.add(tv);
  furnitureGrp.add(diningTable);
  furnitureGrp.add(bed);
  furnitureGrp.add(washBasin);
  furnitureGrp.add(kitchenSlave);
  furnitureGrp.add(washroom);
  furnitureGrp.add(plant4);
}
function createBug(){
  var bug = createSprite(random(width/2-bgWidth/3,width/2+bgWidth/3),random(height/2-bgHeight/3,height/2+bgHeight/3),10,10);
  bug.addImage(bugImg);
  bug.velocityX = random(bugSpeed/2,bugSpeed)*direction[Math.round(random(0,1))]; 
  bug.scale = 0.2;
  bugsGrp.add(bug);
}
function bounceBug(bug,obstacle){
  bug.bounceOff(obstacle);
  if(bug.velocityY!==0){
    bug.velocityX = random(bugSpeed/2,bugSpeed)*direction[Math.round(random(0,1))];
    bug.velocityY = 0;
  }
  else if(bug.velocityX!==0){
    bug.velocityY = random(bugSpeed/2,bugSpeed)*direction[Math.round(random(0,1))];
    bug.velocityX = 0;
  }
}