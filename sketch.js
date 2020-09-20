var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "Green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "Green";
}

function draw() {
  background(0);
  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  if(movingRect.x - fixedRect.x<fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x<fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y<fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y<fixedRect.height/2 + movingRect.height/2)
  {
    movingRect.shapeColor = "Red";
    fixedRect.shapeColor = "Red";
  }
   else
  {
    movingRect.shapeColor = "Green";
    fixedRect.shapeColor = "Green";
  }

  drawSprites();
}