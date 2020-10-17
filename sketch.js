var fixedRect, movingRect;
var ob1,ob2,ob3,ob4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1=createSprite(200,150,50,50);
  ob2=createSprite(400,150,50,50);
  ob3=createSprite(600,150,50,50);
  ob4=createSprite(800,150,50,50);

  ob1.shapeColor="green"
  ob2.shapeColor="green"
  ob3.shapeColor="green"
  ob4.shapeColor="green"
  


}

function draw() {
  background(0,0,0);  
 ob2.x = World.mouseX;
 ob2.y = World.mouseY;

  if(collision(ob2,ob4)){

  ob2.shapeColor = "red";
  ob4.shapeColor = "red";

  }else
  {
ob2.shapeColor = "green";
  ob4.shapeColor = "green";


  }
 
  drawSprites();
}

function collision(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {

 

  return true;

}
else {
 
  return false;

}

}