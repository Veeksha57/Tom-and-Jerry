var cat,catImg,catImg2;
var mouse,mouseImg,mouseImg2;
var garden,gardenImg;
function preload() {
    //load the images here
    catImg=loadImage("cat2.png");
    catImg2=loadImage("cat4.png");
    mouseImg=loadImage("mouse3.png");
    mouseImg2=loadImage("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,900);
    //create tom and jerry sprites here
cat=createSprite(100,100,50,50);
cat.addImage(catImg);
cat.scale=0.2;

mouse=createSprite(350,450,30,30);
mouse.addImage(mouseImg);
mouse.scale=0.1;

garden=createSprite(400,400);
garden.addImage(gardenImg);


}

function draw() {

    background(255);
    cat.x=World.mouseX;
    cat.y=World.mouseY;
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<148
&& mouse.x-cat.x<148
&& cat.y-mouse.y<148
&& mouse.y-cat.y<148){
  cat.addImage("lastCatImage",catImg2);
    cat.changeImage("lastCatImage");
    mouse.addImage("lastMouseImage",mouseImg2);
    mouse.changeImage("lastMouseImage");
}
else{
cat.addImage("firstCatImage",catImg)
    cat.changeImage("firstCatImage");
mouse.addImage("firstMouseImage",mouseImg);
    mouse.changeImage("firstMouseImage");
}

cat.depth=garden.depth;
cat.depth=cat.depth+1;

mouse.depth=garden.depth;
mouse.depth=mouse.depth+1;
console.log(cat.x-mouse.x);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
