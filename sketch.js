var car ,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
  
  speed=random(30,100);
  weight=random(400,1500);
  deformation=0.5*weight*speed*speed/2250;

  
  car=createSprite(20,200,20,20);
  car.velocityX=speed;
  car.shapeColor="white";
 
  wall=createSprite(720,200,60,200);
  wall.shapeColor=color(80,80,80);

  

}

function draw() {
  background(0);  

  if(car.isTouching(wall)){
  if(deformation>180){
    car.shapeColor="red";
  }
  else if(deformation<80){
    car.shapeColor="green";
  }
  else if(deformation=Math.round(random(80,180))){
    car.shapeColor="yellow";
  }
  else{
    car.shapeColor="white";
  }
}

  car.collide(wall);
  drawSprites();
}