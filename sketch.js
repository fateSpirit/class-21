

var movingRect,fixedRect;
var newRect;
function setup() {
  createCanvas(400,400);
  fixedRect =createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect =createSprite(100,100,80,50);
  movingRect.shapeColor = "green"; 
  newRect =createSprite(100,100,80,50);
  newRect.shapeColor = "green"; 
}
//fixedRect.width/2+ movingRect.width/2 === movingRect.x-fixedRect.x
//50/2+80/2 =65
function draw() {
  background(0); 
movingRect.x = mouseX;
movingRect.y = mouseY;  
console.log( movingRect.x-fixedRect.x);
if(isTouching (movingRect,fixedRect)){
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";

}
else if(isTouching(movingRect,newRect)){
  movingRect.shapeColor = "blue";
  newRect.shapeColor = "blue";
}
else{
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green"; 
 newRect.shapeColor = "green"    
}


  drawSprites();
}

//obj1 as movingRect and obj2 as fixedRect
//boolean value - true and false


