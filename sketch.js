var ship_sailing;
var sea;

var ship 


//to load the animation and image at first
function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");
}

function setup(){
 createCanvas(600,500);
 background("blue");
 
  //to create sea sprite 
  sea=createSprite(100,200);

  //to add the animation on the sea   
  sea.addImage(sea_image);

  //to give size to sea
  sea.scale=0.3;

  //to move it
sea.velocityX=-5;


//to craete ship sprite
  ship=createSprite(200,200,20,20);

  //to add animatiom on ship
 ship.addAnimation("moving ship",ship_sailing);


 //to give size to the ship
 ship.scale=0.2;

 

}
function draw() {

sea.velocityX=-3;

  //to make sea infinite
if (sea.x < 0){
sea.x = sea.widht/7;
}


//draw all sprites
drawSprites();
}