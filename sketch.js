var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  speed= random(55,90);
  weight= random(400,1500);

  car.velocityX = speed;

}

function draw() {

  background("black"); 
  
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
        if(deformation > 180){
          car.shapeColor = "red";
          textSize(30);
          fill("red")
          text("Lethal",200,200);
        }
        if(deformation < 180 && deformation > 100){
          car.shapeColor = "yellow";
          textSize(30);
          fill("yellow")
          text("Average",300,200);
        }
        if(deformation < 100){
          car.shapeColor = "lightgreen";
          textSize(30);
          fill("lightgreen")
          text("Good",200,200);
        }
    }



  drawSprites();
}