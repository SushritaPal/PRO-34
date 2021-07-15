var ball;
var database;
var databaseRef;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    databaseRef = database.ref('ball/position');
    databaseRef.on("value",readPosition,showError);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position=data.val();
    ball.x = position.x;
    ball.y = position.y;
    
}

function showError(){
    console.log("Error");
}

function writePosition(x,y){
   databaseRef.set({
       'x': position.x + x,
       'y': position.y + y
   });
}
