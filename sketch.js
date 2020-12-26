var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacleImage
var foodGroup, obstaclesGroup
var ground;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
    createCanvas(400,400);

  ground = createSprite(200,330,400,10);
  
  monkey = createSprite(45,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  
}


function draw() {

  background("white");
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 280){
     monkey.velocityY = -15;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  text(mouseX + "," + mouseY , mouseX, mouseY);
  spawnObstacles();
  spawnBanana();
  drawSprites();
}

function spawnObstacles(){

  if(frameCount % 80 === 0){
    obstacle = createSprite(400,305,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.16;
    obstacle.velocityX = -6;
     }
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,305,10,40);
    banana.y = Math.round(random(100,140))
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
     }
}