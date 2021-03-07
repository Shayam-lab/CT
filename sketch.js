var wall,car;
var speed,weight
function setup() {
  createCanvas(1600,800);
  wall= createSprite(1500,200,60,height/2);
  car= createSprite(50,200,50,50);

}

function setup() {

speed = random(55,90)
weight = random(400,1500)


}

function draw() {
  
car.velocityX = speed;

if (wall.x-car.x < (car.width+wall.width)/2)
{

car.velocityX=0;
var deformination = 0.5 * weight * speed * speed/22500;
if (deformination>180)
{
car.shapeColour=colour(255,0,0);
}

if (deformination<180 && deformation>100)
{
car.shapeColour=colour(230,230,0);
}

if (deformination<100)
{
  car.shapeColour(0,255,0)
}
}



  drawSprites();
}
