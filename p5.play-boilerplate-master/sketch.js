var a, b;

function setup() {
  createCanvas(800,400);
  a= createSprite(400, 200, 50, 50);
  a.shapeColor = "red";
  b= createSprite(170, 130, 50, 50);
  b.shapeColor = "blue";
}

function draw() {
  background("grey");  
  drawSprites();

  b.x = mouseX;
  b.y = mouseY;

  if(b.x-a.x <= b.width/2+a.width/2 
    && a.x-b.x <= b.width/2+a.width/2
    && b.y-a.y <= b.height/2+a.height/2 
    && a.y-b.y <= b.height/2+a.height/2){
    a.shapeColor= "green";
    b.shapeColor = "green";
  }
  else {
    a.shapeColor = "red";
    b.shapeColor = "blue";
  }
}