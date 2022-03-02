var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 ghost = createSprite(300,300,20,20)
 ghost.addImage(ghostImg)
 ghost.scale = 0.4

 climbersGroup = new Group()
  doorsGroup = new Group()
  invisibleBlockGroup = new Group()
}

function draw() {
  background(200);
  if(gameState === "play"){
spookySound.loop()
  drawSprites()

ghost.velocityY = ghost.velocityY+0.8

  if(tower.y > 400){
      tower.y = 300
    }

move()
if(keyDown("space"))

    ghost.velocityY = -15

    if(keyDown("left"))

    ghost.velocityX = -5

    if(keyDown("right"))

    ghost.velocityX = 5


    if(ghost.y > 600 || invisibleBlockGroup.isTouching(ghost) ){
      gameState = "end"
    }

    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0
    }
  }
if (gameState === "end"){
background("black")
stroke("yellow"); fill("yellow"); textSize(30);
  text(" Game Over ",230,250)

}
}

function move() {
  


  if(frameCount % 60 === 0){
    climber = createSprite(360,-10)
    climber.addImage(climberImg);
    climber.velocityY = 1
    climber.x = Math.round(random(120,480))

    climbersGroup.add(climber)


    door = createSprite(climber.x,climber.y - 60)
    door.addImage(doorImg)
    door.velocityY = 1 
    door.depth = climber.depth
    climber.depth = climber.depth+1

    doorsGroup.add(door)



    ghost.depth = door.depth
    ghost.depth += 1

    invisibleBlock = createSprite(360,-5)
    invisibleBlock.width = climber.width
    invisibleBlock.height = 2
    invisibleBlock.velocityY = 1
    invisibleBlock.x = climber.x

    invisibleBlockGroup.add(invisibleBlock)

  }

 


}
