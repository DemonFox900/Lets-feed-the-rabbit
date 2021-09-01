var garden,rabbit;
var gardenImg,rabbitImg;
var background
var apple
var leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage= loadImage("apple.png")
leavesImage=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
function createApples(){
 if(frameCount % 80===0){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage("Guru",appleImage)
   apple.scale=0.1
   apple.velocityY=2}
  }
  function createLeaves(){
    if(frameCount % 80===0){
    leaves=createSprite(random(50,350),40,10,10)
    leaves.addImage("BABA",leavesImage)
    leaves.velocityY=2
    leaves.scale=0.1}
   }
   

function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples()
 createLeaves()
  drawSprites();
}

var select_sprite=Math.round(random(1,2))



 