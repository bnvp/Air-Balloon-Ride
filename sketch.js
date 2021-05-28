var balloon,balloonImg;
var background,backgroundImg;

function preload() {
  balloonImg = loadImage("hotairballoon1.png");
  backgroundImg = loadImage("cityImage.png");


}

function setup() {
  createCanvas(800,400);

  balloon = createSprite(250,100,20,20);
  balloon.addImage(balloonImg,"Balloon");
  balloon.scale = 0.3;

}

function draw() {
  background(backgroundImg,"Background"); 

  fill("black");
  text("Use Arrow Keys to move the Balloon!",10,30);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
    }
else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    balloon.scale = 0.35;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    balloon.scale = 0.25;
  }

  drawSprites();
}

function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readValue(data) {
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;

}

function showError() {
  console.log("Error in connecting to Database");
}

function writePosition(x,y) {
  database.ref('balloon/position').set({
      'x' : position.x + x,
      'y' : position.y + y,
  })    

} 