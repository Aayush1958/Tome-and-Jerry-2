

var bgImg,bg;
var catImg, cat;
var rat,ratImg

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    ratImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    ratImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    ratImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   // bg = createSprite(200,200,20,20);
   // bg.addImage(bgImg);
    //bg.scale=1 

    cat = createSprite(700,700,20,20);
    cat.addAnimation("walking",catImg1);
    cat.scale=0.2
    cat.debug=true;
    cat.setCollider("rectangle",10,600,2000,1000)
    

    rat = createSprite(100,700,20,20);
    rat.addAnimation("stop",ratImg1);
    rat.scale=0.2
    rat.debug=true;

    


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x < (cat.width-rat.width)/2){

        cat.addAnimation("stop",catImg3);
        cat.changeAnimation("stop");
        cat.y=700
        cat.x = 250;
        
        cat.velocityX=0;
        
        rat.addAnimation("halt",ratImg3);
        rat.changeAnimation("halt");
      }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyDown(LEFT_ARROW)){
   rat.addAnimation("teasing",ratImg2);
   rat.changeAnimation("teasing");

   cat.addAnimation("walking",catImg2);
   cat.velocityX=-4;
 }

}
